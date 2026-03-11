/**
 * Optimization Operations for PyMuPDF
 */

export async function deskewPdf(pyodide: any, file: File, options: any): Promise<{ pdf: Blob; result: any }> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);
    const { threshold = 0.5, dpi = 150 } = options || {};

    pyodide.FS.writeFile('/input.pdf', pdfData);

    const result = await pyodide.runPythonAsync(`
import pymupdf
import numpy as np
import base64
import json
import math

def detect_skew_angle(pix, threshold=0.5, max_angle=10):
    samples = pix.samples
    width = pix.width
    height = pix.height
    n = pix.n
    
    img_array = np.frombuffer(samples, dtype=np.uint8)
    
    if n == 1:
        img = img_array.reshape(height, width)
    elif n == 3:
        img = img_array.reshape(height, width, n)
        img = np.dot(img[...,:3], [0.299, 0.587, 0.114]).astype(np.uint8)
    elif n == 4:
        img = img_array.reshape(height, width, n)
        img = np.dot(img[...,:3], [0.299, 0.587, 0.114]).astype(np.uint8)
    else:
        img = img_array.reshape(height, width, n)
        img = img[:,:,0]
    
    hist, _ = np.histogram(img.flatten(), bins=256, range=(0, 256))
    total_pixels = img.size
    
    sum_total = sum(i * hist[i] for i in range(256))
    sum_background = 0
    weight_background = 0
    max_variance = 0
    otsu_threshold = 0
    
    for i in range(256):
        weight_background += hist[i]
        if weight_background == 0: continue
        weight_foreground = total_pixels - weight_background
        if weight_foreground == 0: break
        sum_background += i * hist[i]
        mean_background = sum_background / weight_background
        mean_foreground = (sum_total - sum_background) / weight_foreground
        variance = weight_background * weight_foreground * (mean_background - mean_foreground) ** 2
        if variance > max_variance:
            max_variance = variance
            otsu_threshold = i
    
    binary = (img > otsu_threshold).astype(np.uint8) * 255
    angle_range = np.linspace(-max_angle, max_angle, int(max_angle * 4 + 1))
    variances = []
    
    for angle in angle_range:
        angle_rad = math.radians(angle)
        cos_a = math.cos(angle_rad)
        sin_a = math.sin(angle_rad)
        
        if abs(angle) < 0.5:
            projection = np.sum(binary, axis=1)
        else:
            h_new = int(abs(height * cos_a) + abs(width * sin_a))
            projection = np.zeros(h_new)
            for y in range(0, height, max(1, height // 200)):
                for x in range(0, width, max(1, width // 200)):
                    if binary[y, x] > 128:
                        y_rot = int((x - width/2) * sin_a + (y - height/2) * cos_a + height/2)
                        y_new = int(y_rot * h_new / height)
                        if 0 <= y_new < h_new:
                            projection[y_new] += 1
        variance = np.var(projection)
        variances.append(variance)
    
    best_idx = np.argmax(variances)
    detected_angle = angle_range[best_idx]
    max_var = variances[best_idx]
    baseline_var = variances[len(variances) // 2]
    
    if baseline_var > 0 and (max_var - baseline_var) / baseline_var > threshold / 10:
        return detected_angle
    else:
        return 0.0

def rotate_page(page, angle):
    if abs(angle) < 0.1: return False
    if abs(angle % 90) < 0.1:
        rotation = int(round(angle / 90) * 90) % 360
        page.set_rotation(rotation)
        return True
    else:
        if abs(angle) >= 0.5:
            rotation = int(round(angle))
            if abs(rotation) >= 1:
                current_rotation = page.rotation
                new_rotation = (current_rotation - rotation) % 360
                page.set_rotation(new_rotation)
                return True
        return False

# Main processing
doc = pymupdf.open("/input.pdf")
angles = []
corrected = []

for page_num, page in enumerate(doc):
    try:
        pix = page.get_pixmap(dpi=${dpi})
        angle = detect_skew_angle(pix, threshold=${threshold}, max_angle=10)
        angles.append(float(angle))
        if abs(angle) >= 0.3:
            was_corrected = rotate_page(page, angle)
            corrected.append(was_corrected)
        else:
            corrected.append(False)
    except:
        angles.append(0.0)
        corrected.append(False)

pdf_bytes = doc.tobytes()
doc.close()

result_data = {
    "totalPages": len(angles),
    "correctedPages": sum(corrected),
    "angles": angles,
    "corrected": corrected
}

json.dumps(result_data) + "|||" + base64.b64encode(pdf_bytes).decode('ascii')
`);

    const [resultJson, pdfBase64] = result.split('|||');
    const resultData = JSON.parse(resultJson);

    try {
        pyodide.FS.unlink('/input.pdf');
    } catch {
        // Ignore cleanup errors
    }

    const binary = atob(pdfBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return {
        pdf: new Blob([bytes], { type: 'application/pdf' }),
        result: resultData
    };
}

export async function fontToOutline(pyodide: any, file: File, options: any): Promise<{ pdf: Blob; fontsConverted: number; pagesProcessed: number; totalPages: number }> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);
    const { dpi = 300, preserveSelectableText = false, pageRange = '' } = options || {};

    pyodide.FS.writeFile('/input.pdf', pdfData);

    const result = await pyodide.runPythonAsync(`
import pymupdf
import base64
import json

def parse_page_range(range_str, total_pages):
    if not range_str or range_str.strip() == '':
        return list(range(total_pages))
    pages = set()
    for part in range_str.split(','):
        part = part.strip()
        if '-' in part:
            start, end = part.split('-', 1)
            start = max(1, int(start.strip()))
            end = min(total_pages, int(end.strip()))
            pages.update(range(start - 1, end))
        else:
            page_num = int(part.strip())
            if 1 <= page_num <= total_pages:
                pages.add(page_num - 1)
    return sorted(list(pages))

def convert_fonts_to_outlines(input_doc, dpi=300, preserve_text=False, page_indices=None):
    output_doc = pymupdf.open()
    total_fonts = 0
    pages_processed = 0
    if page_indices is None:
        page_indices = range(len(input_doc))
    
    for page_idx in page_indices:
        if page_idx >= len(input_doc): continue
        page = input_doc[page_idx]
        pages_processed += 1
        try:
            font_list = page.get_fonts()
            total_fonts += len(font_list)
        except: pass
        
        page_rect = page.rect
        zoom = dpi / 72
        mat = pymupdf.Matrix(zoom, zoom)
        pix = page.get_pixmap(matrix=mat, alpha=False)
        new_page = output_doc.new_page(width=page_rect.width, height=page_rect.height)
        new_page.insert_image(new_page.rect, pixmap=pix)
        
        if preserve_text:
            try:
                text_instances = page.get_text("dict")
                for block in text_instances.get("blocks", []):
                    if block.get("type") == 0:
                        for line in block.get("lines", []):
                            for span in line.get("spans", []):
                                text = span.get("text", "")
                                bbox = span.get("bbox", [])
                                font_size = span.get("size", 12)
                                if text and len(bbox) == 4:
                                    rect = pymupdf.Rect(bbox)
                                    new_page.insert_textbox(rect, text, fontsize=font_size, color=(1, 1, 1), render_mode=3)
            except: pass
    return output_doc, total_fonts

# Main processing
input_doc = pymupdf.open("/input.pdf")
total_pages = len(input_doc)
try:
    page_indices = parse_page_range('${pageRange}', total_pages)
except:
    page_indices = None

output_doc, fonts_converted = convert_fonts_to_outlines(
    input_doc,
    dpi=${dpi},
    preserve_text=${preserveSelectableText ? 'True' : 'False'},
    page_indices=page_indices
)

pdf_bytes = output_doc.tobytes(garbage=4, deflate=True)
input_doc.close()
output_doc.close()

result_data = {
    "fontsConverted": fonts_converted,
    "pagesProcessed": len(page_indices) if page_indices else total_pages,
    "totalPages": total_pages
}
json.dumps(result_data) + "|||" + base64.b64encode(pdf_bytes).decode('ascii')
`);

    const [resultJson, pdfBase64] = result.split('|||');
    const resultData = JSON.parse(resultJson);

    try {
        pyodide.FS.unlink('/input.pdf');
    } catch {
        // Ignore cleanup errors
    }

    const binary = atob(pdfBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return {
        pdf: new Blob([bytes], { type: 'application/pdf' }),
        fontsConverted: resultData.fontsConverted || 0,
        pagesProcessed: resultData.pagesProcessed || 0,
        totalPages: resultData.totalPages || 0
    };
}

export async function compress(pyodide: any, file: File, options: any): Promise<Blob> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);
    const { quality = 'medium', removeMetadata = false } = options || {};

    const qualitySettings: Record<string, { imageQuality: number; maxDpi: number }> = {
        'low': { imageQuality: 40, maxDpi: 72 },
        'medium': { imageQuality: 65, maxDpi: 120 },
        'high': { imageQuality: 85, maxDpi: 200 },
        'maximum': { imageQuality: 95, maxDpi: 300 },
    };
    const settings = qualitySettings[quality] || qualitySettings['medium'];

    pyodide.FS.writeFile('/input.pdf', pdfData);

    const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")
image_quality = ${settings.imageQuality}
max_dpi = ${settings.maxDpi}
remove_metadata = ${removeMetadata ? 'True' : 'False'}

for page_num in range(len(doc)):
    page = doc[page_num]
    image_list = page.get_images(full=True)
    for img_info in image_list:
        xref = img_info[0]
        try:
            base_image = doc.extract_image(xref)
            if not base_image: continue
            
            image_bytes = base_image["image"]
            width = base_image.get("width", 0)
            height = base_image.get("height", 0)
            
            if width < 50 or height < 50: continue
            if len(image_bytes) < 10000: continue
            
            pix = pymupdf.Pixmap(image_bytes)
            if pix.width > 100 and pix.height > 100:
                scale = 1.0
                if pix.width > max_dpi * 10 or pix.height > max_dpi * 10:
                    scale = max(max_dpi * 10 / pix.width, max_dpi * 10 / pix.height)
                    if scale < 1.0:
                        new_width = int(pix.width * scale)
                        new_height = int(pix.height * scale)
                        if new_width > 50 and new_height > 50:
                            pix = pymupdf.Pixmap(pix, new_width, new_height, None)
                
                if pix.alpha:
                    pix = pymupdf.Pixmap(pymupdf.csRGB, pix)
                
                new_image_bytes = pix.tobytes(output="jpeg", jpg_quality=image_quality)
                if len(new_image_bytes) < len(image_bytes) * 0.9:
                    doc.update_stream(xref, new_image_bytes)
                    doc.xref_set_key(xref, "Filter", "/DCTDecode")
                    doc.xref_set_key(xref, "ColorSpace", "/DeviceRGB")
                    doc.xref_set_key(xref, "BitsPerComponent", "8")
                    doc.xref_set_key(xref, "Width", str(pix.width))
                    doc.xref_set_key(xref, "Height", str(pix.height))
                    try:
                        doc.xref_set_key(xref, "DecodeParms", "null")
                    except: pass
        except: pass

if remove_metadata:
    doc.set_metadata({})
    doc.del_xml_metadata()

pdf_bytes = doc.tobytes(garbage=4, deflate=True, clean=True)
doc.close()
base64.b64encode(pdf_bytes).decode('ascii')
`);

    try {
        pyodide.FS.unlink('/input.pdf');
    } catch {
        // Ignore cleanup errors
    }

    const binary = atob(result);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return new Blob([bytes], { type: 'application/pdf' });
}

export async function photonCompress(pyodide: any, file: File, options: any): Promise<Blob> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);
    const { dpi = 150, quality = 85 } = options || {};

    pyodide.FS.writeFile('/input.pdf', pdfData);

    const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")
new_doc = pymupdf.open()
target_dpi = ${dpi}
jpeg_quality = ${quality}

for page_num in range(len(doc)):
    page = doc[page_num]
    rect = page.rect
    zoom = target_dpi / 72
    mat = pymupdf.Matrix(zoom, zoom)
    pix = page.get_pixmap(matrix=mat, alpha=False)
    img_bytes = pix.tobytes(output="jpeg", jpg_quality=jpeg_quality)
    new_page = new_doc.new_page(width=rect.width, height=rect.height)
    new_page.insert_image(new_page.rect, stream=img_bytes)

pdf_bytes = new_doc.tobytes(garbage=4, deflate=True)
doc.close()
new_doc.close()
base64.b64encode(pdf_bytes).decode('ascii')
`);

    try {
        pyodide.FS.unlink('/input.pdf');
    } catch {
        // Ignore cleanup errors
    }

    const binary = atob(result);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return new Blob([bytes], { type: 'application/pdf' });
}
