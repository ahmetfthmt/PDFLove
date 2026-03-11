/**
 * Conversion Operations for PyMuPDF
 */

export async function pdfToDocx(pyodide: any, file: File): Promise<Blob> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);

    // Write PDF to virtual filesystem
    pyodide.FS.writeFile('/input.pdf', pdfData);

    // Convert using pdf2docx
    const result = await pyodide.runPythonAsync(`
import base64
from pdf2docx import Converter

cv = Converter('/input.pdf')
cv.convert('/output.docx')
cv.close()

with open('/output.docx', 'rb') as f:
    docx_data = f.read()

base64.b64encode(docx_data).decode('ascii')
`);

    // Clean up
    try {
        pyodide.FS.unlink('/input.pdf');
        pyodide.FS.unlink('/output.docx');
    } catch {
        // Ignore cleanup errors
    }

    // Convert base64 to Blob
    const binary = atob(result);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return new Blob([bytes], {
        type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
}

export async function htmlToPdf(pyodide: any, html: string, options: any): Promise<Blob> {
    const { pageSize = 'a4', margins = { top: 50, right: 50, bottom: 50, left: 50 }, attachments = [] } = options || {};

    // Page dimensions in points (72 points per inch)
    const pageSizes: Record<string, [number, number]> = {
        'a4': [595, 842],
        'letter': [612, 792],
        'legal': [612, 1008],
    };
    const [width, height] = pageSizes[pageSize] || pageSizes['a4'];

    // Write HTML to virtual filesystem
    const encoder = new TextEncoder();
    const htmlBytes = encoder.encode(html);
    pyodide.FS.writeFile('/input.html', htmlBytes);

    // Write attachments to virtual filesystem
    for (let i = 0; i < attachments.length; i++) {
        const att = attachments[i];
        if (att.content) {
            const attData = new Uint8Array(att.content);
            pyodide.FS.writeFile(`/attachment_${i}`, attData);
        }
    }

    // Build attachments info for Python
    const attachmentsJson = JSON.stringify(attachments.map((att: any, idx: number) => ({
        filename: att.filename,
        contentType: att.contentType,
        path: `/attachment_${idx}`,
        hasContent: !!att.content
    })));

    const result = await pyodide.runPythonAsync(`
import pymupdf
import base64
import json

# Read HTML
with open('/input.html', 'r', encoding='utf-8') as f:
    html_content = f.read()

# Margins
margin_left = ${margins.left}
margin_top = ${margins.top}
margin_right = ${margins.right}
margin_bottom = ${margins.bottom}
page_width = ${width}
page_height = ${height}

# Create PDF document
doc = pymupdf.open()

try:
    # Try using Story API (available in newer PyMuPDF versions)
    rect = pymupdf.Rect(margin_left, margin_top, page_width - margin_right, page_height - margin_bottom)
    story = pymupdf.Story(html=html_content)
    
    more = True
    while more:
        page = doc.new_page(width=page_width, height=page_height)
        filled, more = story.place(rect)
        story.draw(page)
except Exception as e:
    # Fallback: Simple text-based PDF
    doc.close()
    doc = pymupdf.open()
    
    # Strip HTML tags for fallback
    import re
    text = re.sub('<[^<]+?>', '', html_content)
    text = text.replace('&nbsp;', ' ').replace('&lt;', '<').replace('&gt;', '>').replace('&amp;', '&')
    
    # Split into lines
    lines = text.split('\\n')
    
    page = doc.new_page(width=page_width, height=page_height)
    y = margin_top
    fontsize = 11
    line_height = fontsize * 1.5
    
    for line in lines:
        line = line.strip()
        if not line:
            y += line_height / 2
            continue
            
        # Check if we need a new page
        if y + line_height > page_height - margin_bottom:
            page = doc.new_page(width=page_width, height=page_height)
            y = margin_top
        
        # Insert text
        page.insert_text((margin_left, y), line, fontsize=fontsize, fontname="helv")
        y += line_height

# Embed attachments
attachments_info = json.loads('${attachmentsJson.replace(/'/g, "\\'")}')
for att_info in attachments_info:
    if att_info['hasContent']:
        try:
            with open(att_info['path'], 'rb') as att_file:
                att_data = att_file.read()
            # Embed file attachment
            doc.embfile_add(
                name=att_info['filename'],
                buffer=att_data,
                filename=att_info['filename'],
                desc=f"Attachment: {att_info['filename']}"
            )
        except Exception as e:
            # Silently skip if embedding fails
            pass

# Save to bytes
pdf_bytes = doc.tobytes()
doc.close()

base64.b64encode(pdf_bytes).decode('ascii')
`);

    try {
        pyodide.FS.unlink('/input.html');
        // Clean up attachment files
        for (let i = 0; i < attachments.length; i++) {
            try {
                pyodide.FS.unlink(`/attachment_${i}`);
            } catch {
                // Ignore
            }
        }
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
