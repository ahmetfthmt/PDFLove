/**
 * Advanced PDF Editor Processor
 * 
 * Provides advanced PDF editing capabilities including:
 * - OCR text recognition and extraction
 * - Text editing with font, weight, style options
 * - Image manipulation (add, resize, move, delete)
 * - Shape drawing (rectangle, circle, line, arrow)
 */

import type {
  ProcessInput,
  ProcessOutput,
  ProgressCallback,
} from '@/types/pdf';
import { PDFErrorCode } from '@/types/pdf';
import { BasePDFProcessor } from '../processor';
import { loadPdfjs, loadPdfLib } from '../loader';

// Font types available for text editing
export type PDFFontFamily =
  | 'Helvetica'
  | 'HelveticaBold'
  | 'HelveticaOblique'
  | 'HelveticaBoldOblique'
  | 'TimesRoman'
  | 'TimesBold'
  | 'TimesItalic'
  | 'TimesBoldItalic'
  | 'Courier'
  | 'CourierBold'
  | 'CourierOblique'
  | 'CourierBoldOblique';

// Font weight options
export type PDFFontWeight = 'normal' | 'bold';

// Font style options
export type PDFFontStyle = 'normal' | 'italic' | 'oblique';

// Text alignment options
export type TextAlignment = 'left' | 'center' | 'right';

// Shape types
export type ShapeType = 'rectangle' | 'circle' | 'line' | 'arrow' | 'whiteout';

// Element types in the editor
export type EditorElementType = 'text' | 'image' | 'shape';

// Base editor element
export interface EditorElement {
  id: string;
  type: EditorElementType;
  pageNumber: number;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

// Text element with full styling options
export interface TextElement extends EditorElement {
  type: 'text';
  content: string;
  fontFamily: PDFFontFamily;
  fontSize: number;
  fontWeight: PDFFontWeight;
  fontStyle: PDFFontStyle;
  color: string; // hex color
  alignment: TextAlignment;
  lineHeight: number;
  letterSpacing: number;
  opacity: number;
  backgroundCover?: boolean;
}

// Image element
export interface ImageElement extends EditorElement {
  type: 'image';
  imageData: string; // base64 data URL
  opacity: number;
  preserveAspectRatio: boolean;
  backgroundCover?: boolean;
}

// Shape element
export interface ShapeElement extends EditorElement {
  type: 'shape';
  shapeType: ShapeType;
  fillColor: string;
  strokeColor: string;
  strokeWidth: number;
  opacity: number;
}

// OCR text block from recognition
export interface OCRTextBlock {
  id: string;
  text: string;
  confidence: number;
  bounds: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  pageNumber: number;
}

// OCR result
export interface OCRResult {
  textBlocks: OCRTextBlock[];
  fullText: string;
  confidence: number;
}

// Editor options
export interface PDFEditorOptions {
  elements: (TextElement | ImageElement | ShapeElement)[];
  ocrEnabled: boolean;
  ocrLanguages: string[];
  preserveOriginalContent: boolean;
}

// Font family display names
export const FONT_FAMILY_NAMES: Record<PDFFontFamily, string> = {
  'Helvetica': 'Helvetica',
  'HelveticaBold': 'Helvetica Bold',
  'HelveticaOblique': 'Helvetica Italic',
  'HelveticaBoldOblique': 'Helvetica Bold Italic',
  'TimesRoman': 'Times New Roman',
  'TimesBold': 'Times New Roman Bold',
  'TimesItalic': 'Times New Roman Italic',
  'TimesBoldItalic': 'Times New Roman Bold Italic',
  'Courier': 'Courier',
  'CourierBold': 'Courier Bold',
  'CourierOblique': 'Courier Italic',
  'CourierBoldOblique': 'Courier Bold Italic',
};

// Standard font sizes
export const FONT_SIZES = [8, 9, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 64, 72];

// Standard colors
export const STANDARD_COLORS = [
  { name: 'Black', value: '#000000' },
  { name: 'White', value: '#FFFFFF' },
  { name: 'Red', value: '#FF0000' },
  { name: 'Green', value: '#00FF00' },
  { name: 'Blue', value: '#0000FF' },
  { name: 'Yellow', value: '#FFFF00' },
  { name: 'Cyan', value: '#00FFFF' },
  { name: 'Magenta', value: '#FF00FF' },
  { name: 'Orange', value: '#FFA500' },
  { name: 'Purple', value: '#800080' },
  { name: 'Pink', value: '#FFC0CB' },
  { name: 'Brown', value: '#A52A2A' },
  { name: 'Gray', value: '#808080' },
  { name: 'Light Gray', value: '#D3D3D3' },
  { name: 'Dark Gray', value: '#404040' },
];

/**
 * Generate a unique ID for elements
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Convert hex color to RGB values
 */
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : { r: 0, g: 0, b: 0 };
}

/**
 * Advanced PDF Editor Processor
 */
export class PDFEditorProcessor extends BasePDFProcessor {
  /**
   * Process PDF with advanced editing capabilities
   */
  async process(
    input: ProcessInput,
    onProgress?: ProgressCallback
  ): Promise<ProcessOutput> {
    this.reset();
    this.onProgress = onProgress;

    const { files, options } = input;
    const editorOptions: PDFEditorOptions = {
      elements: [],
      ocrEnabled: false,
      ocrLanguages: ['eng'],
      preserveOriginalContent: true,
      ...(options as Partial<PDFEditorOptions>),
    };

    // Validate we have exactly 1 PDF file
    if (files.length !== 1) {
      return this.createErrorOutput(
        PDFErrorCode.INVALID_OPTIONS,
        'Please provide exactly one PDF file.',
        `Received ${files.length} file(s).`
      );
    }

    const file = files[0];

    // Validate file type
    if (!file.type.includes('pdf') && !file.name.toLowerCase().endsWith('.pdf')) {
      return this.createErrorOutput(
        PDFErrorCode.FILE_TYPE_INVALID,
        'Invalid file type. Please upload a PDF file.',
        `Received: ${file.type || 'unknown'}`
      );
    }

    try {
      this.updateProgress(5, 'Loading PDF libraries...');

      const pdfLib = await loadPdfLib();

      if (this.checkCancelled()) {
        return this.createErrorOutput(
          PDFErrorCode.PROCESSING_CANCELLED,
          'Processing was cancelled.'
        );
      }

      this.updateProgress(10, 'Loading PDF document...');

      // Load the PDF document
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await pdfLib.PDFDocument.load(arrayBuffer, {
        ignoreEncryption: false,
      });

      const pages = pdfDoc.getPages();
      const totalPages = pages.length;

      this.updateProgress(20, 'Applying edits...');

      // Process each element
      const elements = editorOptions.elements;
      const progressPerElement = 70 / (elements.length || 1);

      for (let i = 0; i < elements.length; i++) {
        if (this.checkCancelled()) {
          return this.createErrorOutput(
            PDFErrorCode.PROCESSING_CANCELLED,
            'Processing was cancelled.'
          );
        }

        const element = elements[i];
        const elementProgress = 20 + (i * progressPerElement);

        this.updateProgress(
          elementProgress,
          `Processing element ${i + 1} of ${elements.length}...`
        );

        // Ensure the page exists
        if (element.pageNumber < 1 || element.pageNumber > totalPages) {
          continue;
        }

        const page = pages[element.pageNumber - 1];
        const { height: pageHeight } = page.getSize();

        // Process based on element type
        if (element.type === 'text') {
          await this.processTextElement(pdfLib, pdfDoc, page, element as TextElement, pageHeight);
        } else if (element.type === 'image') {
          await this.processImageElement(pdfLib, pdfDoc, page, element as ImageElement, pageHeight);
        } else if (element.type === 'shape') {
          await this.processShapeElement(pdfLib, pdfDoc, page, element as ShapeElement, pageHeight);
        }
      }

      this.updateProgress(90, 'Generating output...');

      // Save the modified PDF
      const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
      const blob = new Blob([new Uint8Array(pdfBytes)], { type: 'application/pdf' });

      this.updateProgress(100, 'Complete!');

      return this.createSuccessOutput(blob, `edited_${file.name}`, {
        elementsProcessed: elements.length,
        pagesProcessed: totalPages,
      });

    } catch (error) {
      return this.createErrorOutput(
        PDFErrorCode.PROCESSING_FAILED,
        'Failed to edit PDF.',
        error instanceof Error ? error.message : 'Unknown error'
      );
    }
  }

  /**
   * Process a text element
   */
  private async processTextElement(
    pdfLib: typeof import('pdf-lib'),
    pdfDoc: import('pdf-lib').PDFDocument,
    page: import('pdf-lib').PDFPage,
    element: TextElement,
    pageHeight: number
  ): Promise<void> {
    const { r, g, b } = hexToRgb(element.color);
    const color = pdfLib.rgb(r / 255, g / 255, b / 255);

    // Get the appropriate font
    const font = await this.getFont(pdfLib, pdfDoc, element.fontFamily);

    // Calculate position (PDF coordinates are from bottom-left)
    const y = pageHeight - element.y - element.height;

    // Draw background cover if requested to "replace" existing text
    if (element.backgroundCover) {
      const padding = 2; // Add 2 pt padding to ensure full coverage of original "ink"
      page.drawRectangle({
        x: element.x - padding,
        y: y - padding,
        width: element.width + padding * 2,
        height: element.height + padding * 2,
        color: pdfLib.rgb(1, 1, 1), // Standard white out
      });
    }

    // Draw the text (adjusted y for baseline if needed, but pdf-lib centers/aligns)
    page.drawText(element.content, {
      x: element.x,
      y: y + (element.height - element.fontSize) / 2, // Center text in the box
      size: element.fontSize,
      font: font,
      color: color,
      opacity: element.opacity,
      rotate: pdfLib.degrees(element.rotation),
    });
  }

  /**
   * Process an image element
   */
  private async processImageElement(
    pdfLib: typeof import('pdf-lib'),
    pdfDoc: import('pdf-lib').PDFDocument,
    page: import('pdf-lib').PDFPage,
    element: ImageElement,
    pageHeight: number
  ): Promise<void> {
    // Calculate position (PDF coordinates are from bottom-left)
    const y = pageHeight - element.y - element.height;

    // Draw background cover if requested
    if (element.backgroundCover) {
      page.drawRectangle({
        x: element.x,
        y: y,
        width: element.width,
        height: element.height,
        color: pdfLib.rgb(1, 1, 1),
      });
    }

    // Only draw the image if we have image data
    if (element.imageData) {
      try {
        const image = await this.embedImage(pdfLib, pdfDoc, element.imageData);
        page.drawImage(image, {
          x: element.x,
          y: y,
          width: element.width,
          height: element.height,
          opacity: element.opacity,
          rotate: pdfLib.degrees(element.rotation),
        });
      } catch (e) {
        console.error('Failed to embed image:', e);
      }
    }
  }

  /**
   * Helper to embed image data into the PDF document.
   */
  private async embedImage(
    pdfLib: typeof import('pdf-lib'),
    pdfDoc: import('pdf-lib').PDFDocument,
    imageData: string
  ): Promise<import('pdf-lib').PDFImage> {
    // Extract base64 data
    const base64Data = imageData.split(',')[1];
    const imageBytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));

    // Determine image type and embed
    if (imageData.includes('image/png')) {
      return await pdfDoc.embedPng(imageBytes);
    } else if (imageData.includes('image/jpg') || imageData.includes('image/jpeg')) {
      return await pdfDoc.embedJpg(imageBytes);
    } else {
      // For other formats, try PNG first, then JPG
      try {
        return await pdfDoc.embedPng(imageBytes);
      } catch {
        return await pdfDoc.embedJpg(imageBytes);
      }
    }
  }

  /**
   * Process a shape element
   */
  private async processShapeElement(
    pdfLib: typeof import('pdf-lib'),
    pdfDoc: import('pdf-lib').PDFDocument,
    page: import('pdf-lib').PDFPage,
    element: ShapeElement,
    pageHeight: number
  ): Promise<void> {
    const { r: fr, g: fg, b: fb } = hexToRgb(element.fillColor);
    const { r: sr, g: sg, b: sb } = hexToRgb(element.strokeColor);

    const fillColor = pdfLib.rgb(fr / 255, fg / 255, fb / 255);
    const strokeColor = pdfLib.rgb(sr / 255, sg / 255, sb / 255);

    // Calculate position (PDF coordinates are from bottom-left)
    const y = pageHeight - element.y - element.height;

    // Draw based on shape type
    switch (element.shapeType) {
      case 'rectangle':
        page.drawRectangle({
          x: element.x,
          y: y,
          width: element.width,
          height: element.height,
          color: fillColor,
          borderColor: strokeColor,
          borderWidth: element.strokeWidth,
          opacity: element.opacity,
          rotate: pdfLib.degrees(element.rotation),
        });
        break;

      case 'circle':
        // Use ellipse for circle (width and height should be equal for circle)
        const radiusX = element.width / 2;
        const radiusY = element.height / 2;
        page.drawEllipse({
          x: element.x + radiusX,
          y: y + radiusY,
          xScale: radiusX,
          yScale: radiusY,
          color: fillColor,
          borderColor: strokeColor,
          borderWidth: element.strokeWidth,
          opacity: element.opacity,
        });
        break;

      case 'line':
        page.drawLine({
          start: { x: element.x, y: y + element.height },
          end: { x: element.x + element.width, y: y },
          thickness: element.strokeWidth,
          color: strokeColor,
          opacity: element.opacity,
        });
        break;

      case 'arrow':
        // Draw line
        page.drawLine({
          start: { x: element.x, y: y + element.height },
          end: { x: element.x + element.width, y: y },
          thickness: element.strokeWidth,
          color: strokeColor,
          opacity: element.opacity,
        });

        // Draw arrowhead using lines (triangle shape)
        const arrowSize = Math.min(element.width, element.height) * 0.2;
        const tipX = element.x + element.width;
        const tipY = y;

        // Draw arrowhead as two lines forming a V shape
        page.drawLine({
          start: { x: tipX - arrowSize, y: tipY + arrowSize },
          end: { x: tipX, y: tipY },
          thickness: element.strokeWidth,
          color: strokeColor,
          opacity: element.opacity,
        });
        page.drawLine({
          start: { x: tipX - arrowSize, y: tipY - arrowSize },
          end: { x: tipX, y: tipY },
          thickness: element.strokeWidth,
          color: strokeColor,
          opacity: element.opacity,
        });
        break;
    }
  }

  /**
   * Get the appropriate font for text rendering
   */
  private async getFont(
    pdfLib: typeof import('pdf-lib'),
    pdfDoc: import('pdf-lib').PDFDocument,
    fontFamily: PDFFontFamily
  ): Promise<import('pdf-lib').PDFFont> {
    // Map font family to standard PDF fonts
    switch (fontFamily) {
      case 'Helvetica':
        return pdfDoc.embedFont(pdfLib.StandardFonts.Helvetica);
      case 'HelveticaBold':
        return pdfDoc.embedFont(pdfLib.StandardFonts.HelveticaBold);
      case 'HelveticaOblique':
        return pdfDoc.embedFont(pdfLib.StandardFonts.HelveticaOblique);
      case 'HelveticaBoldOblique':
        return pdfDoc.embedFont(pdfLib.StandardFonts.HelveticaBoldOblique);
      case 'TimesRoman':
        return pdfDoc.embedFont(pdfLib.StandardFonts.TimesRoman);
      case 'TimesBold':
        return pdfDoc.embedFont(pdfLib.StandardFonts.TimesRomanBold);
      case 'TimesItalic':
        return pdfDoc.embedFont(pdfLib.StandardFonts.TimesRomanItalic);
      case 'TimesBoldItalic':
        return pdfDoc.embedFont(pdfLib.StandardFonts.TimesRomanBoldItalic);
      case 'Courier':
        return pdfDoc.embedFont(pdfLib.StandardFonts.Courier);
      case 'CourierBold':
        return pdfDoc.embedFont(pdfLib.StandardFonts.CourierBold);
      case 'CourierOblique':
        return pdfDoc.embedFont(pdfLib.StandardFonts.CourierOblique);
      case 'CourierBoldOblique':
        return pdfDoc.embedFont(pdfLib.StandardFonts.CourierBoldOblique);
      default:
        return pdfDoc.embedFont(pdfLib.StandardFonts.Helvetica);
    }
  }

  /**
   * Perform OCR on a PDF page
   */
  async performOCR(
    file: File,
    languages: string[] = ['eng'],
    onProgress?: ProgressCallback
  ): Promise<OCRResult> {
    this.reset();
    this.onProgress = onProgress;

    try {
      this.updateProgress(5, 'Loading OCR engine...');

      // Dynamically import Tesseract.js
      const Tesseract = await import('tesseract.js');

      const langString = languages.join('+');
      const worker = await Tesseract.createWorker(langString);

      this.updateProgress(15, 'Loading PDF...');

      const pdfjs = await loadPdfjs();
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
      const totalPages = pdf.numPages;

      const textBlocks: OCRTextBlock[] = [];
      let fullText = '';
      let totalConfidence = 0;

      const progressPerPage = 80 / totalPages;

      for (let i = 1; i <= totalPages; i++) {
        if (this.checkCancelled()) {
          await worker.terminate();
          return { textBlocks: [], fullText: '', confidence: 0 };
        }

        const pageProgress = 15 + ((i - 1) * progressPerPage);
        this.updateProgress(pageProgress, `OCR processing page ${i} of ${totalPages}...`);

        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });

        // Create canvas
        const canvas = document.createElement('canvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) continue;

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        await page.render({
          canvasContext: ctx,
          viewport: viewport,
        }).promise;

        // Perform OCR
        const result = await worker.recognize(canvas);
        const pageText = result.data.text;
        fullText += `--- Page ${i} ---\n${pageText}\n\n`;

        // Extract text blocks with bounding boxes
        // Access words through the raw OCR data
        const ocrData = result.data as any;
        if (ocrData.words && Array.isArray(ocrData.words)) {
          for (const word of ocrData.words) {
            // Scale coordinates back to PDF coordinates
            const scaleX = viewport.width / canvas.width;
            const scaleY = viewport.height / canvas.height;

            textBlocks.push({
              id: generateId(),
              text: word.text,
              confidence: word.confidence,
              bounds: {
                x: word.bbox.x0 / 2, // Scale back from 2x analysis scale to PDF points
                y: word.bbox.y0 / 2,
                width: (word.bbox.x1 - word.bbox.x0) / 2,
                height: (word.bbox.y1 - word.bbox.y0) / 2,
              },
              pageNumber: i,
            });
          }
        }

        totalConfidence += ocrData.confidence || 0;
      }

      await worker.terminate();

      this.updateProgress(100, 'OCR complete!');

      return {
        textBlocks,
        fullText,
        confidence: totalConfidence / totalPages,
      };

    } catch (error) {
      console.error('OCR failed:', error);
      return {
        textBlocks: [],
        fullText: '',
        confidence: 0,
      };
    }
  }
}

/**
 * Create a new instance of the PDF editor processor
 */
export function createPDFEditorProcessor(): PDFEditorProcessor {
  return new PDFEditorProcessor();
}

/**
 * Perform OCR on a PDF file (convenience function)
 */
export async function performOCR(
  file: File,
  languages: string[] = ['eng'],
  onProgress?: ProgressCallback
): Promise<OCRResult> {
  const processor = createPDFEditorProcessor();
  return processor.performOCR(file, languages, onProgress);
}

/**
 * Apply edits to PDF (convenience function)
 */
export async function editPDF(
  file: File,
  options?: Partial<PDFEditorOptions>,
  onProgress?: ProgressCallback
): Promise<ProcessOutput> {
  const processor = createPDFEditorProcessor();
  return processor.process(
    {
      files: [file],
      options: options || {},
    },
    onProgress
  );
}