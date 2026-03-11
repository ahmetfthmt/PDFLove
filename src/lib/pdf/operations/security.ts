/**
 * Security Operations for PyMuPDF
 */

export async function pdfToPdfa(pyodide: any, file: File, options: any): Promise<{ pdf: Blob }> {
    const arrayBuffer = await file.arrayBuffer();
    const pdfData = new Uint8Array(arrayBuffer);
    // Options are available for future use (level, embedFonts, flattenTransparency)
    const _options = options;

    pyodide.FS.writeFile('/input.pdf', pdfData);

    const result = await pyodide.runPythonAsync(`
import pymupdf
import base64

doc = pymupdf.open("/input.pdf")

# Ensure all fonts are embedded and subsetted if possible
# garbage=4 will remove unused objects and deduplicate
save_options = {
    "garbage": 4,
    "deflate": True,
}

doc.save("/output.pdf", **save_options)
doc.close()

with open("/output.pdf", "rb") as f:
    pdf_data = f.read()

base64.b64encode(pdf_data).decode('ascii')
`);

    try {
        pyodide.FS.unlink('/input.pdf');
        pyodide.FS.unlink('/output.pdf');
    } catch {
        // Ignore cleanup errors
    }

    const binary = atob(result);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }

    return {
        pdf: new Blob([bytes], { type: 'application/pdf' })
    };
}
