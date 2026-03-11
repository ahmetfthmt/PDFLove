/**
 * Unit Tests for Advanced PDF Editor Processor
 */

import { describe, it, expect, beforeEach, vi } from 'vitest';
import { PDFEditorProcessor, createPDFEditorProcessor, editPDF } from '@/lib/pdf/processors/pdf-editor';
import { PDFErrorCode } from '@/types/pdf';

// Mock Tesseract.js
vi.mock('tesseract.js', () => {
    const mockWorker = {
        recognize: vi.fn().mockResolvedValue({
            data: {
                text: 'OCR Result Text',
                confidence: 90,
                words: [
                    { text: 'OCR', confidence: 95, bbox: { x0: 10, y0: 10, x1: 50, y1: 30 } },
                    { text: 'Result', confidence: 85, bbox: { x0: 60, y0: 10, x1: 120, y1: 30 } }
                ]
            }
        }),
        terminate: vi.fn().mockResolvedValue(undefined)
    };
    return {
        createWorker: vi.fn().mockResolvedValue(mockWorker),
        default: {
            createWorker: vi.fn().mockResolvedValue(mockWorker),
        }
    };
});

// Mock pdfjs-dist
vi.mock('pdfjs-dist', () => {
    const mockPdf = {
        numPages: 1,
        getPage: vi.fn().mockResolvedValue({
            getViewport: vi.fn().mockReturnValue({ width: 600, height: 800 }),
            render: vi.fn().mockReturnValue({ promise: Promise.resolve() }),
        }),
    };
    const mockGetDocument = vi.fn().mockReturnValue({
        promise: Promise.resolve(mockPdf),
    });
    return {
        getDocument: mockGetDocument,
        default: {
            getDocument: mockGetDocument,
        },
        GlobalWorkerOptions: {},
    };
});

// Mock canvas for jsdom
if (typeof HTMLCanvasElement !== 'undefined') {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(((contextId: string) => {
        if (contextId === '2d') {
            return {
                fillRect: vi.fn(),
                clearRect: vi.fn(),
                getImageData: vi.fn(),
                putImageData: vi.fn(),
                createImageData: vi.fn(),
                setTransform: vi.fn(),
                drawImage: vi.fn(),
                save: vi.fn(),
                restore: vi.fn(),
            } as any;
        }
        return null;
    }) as any);
}

// Helper to create a real minimal PDF using pdf-lib
async function createRealPDFFile(name: string, pageCount: number = 1): Promise<File> {
    const { PDFDocument } = await import('pdf-lib');
    const pdfDoc = await PDFDocument.create();

    for (let i = 0; i < pageCount; i++) {
        pdfDoc.addPage([612, 792]); // Letter size
    }

    const pdfBytes = await pdfDoc.save();
    const arrayBuffer = pdfBytes.buffer.slice(
        pdfBytes.byteOffset,
        pdfBytes.byteOffset + pdfBytes.byteLength
    ) as ArrayBuffer;

    const file = new File([arrayBuffer], name, { type: 'application/pdf' });

    if (typeof file.arrayBuffer !== 'function') {
        Object.defineProperty(file, 'arrayBuffer', {
            value: async () => arrayBuffer,
            writable: false,
        });
    }

    return file;
}

describe('PDFEditorProcessor', () => {
    let processor: PDFEditorProcessor;

    beforeEach(() => {
        processor = createPDFEditorProcessor();
        vi.clearAllMocks();
    });

    describe('process', () => {
        it('should return error when no files are provided', async () => {
            const result = await processor.process({
                files: [],
                options: {},
            });

            expect(result.success).toBe(false);
            expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
        });

        it('should return error when more than 1 file is provided', async () => {
            const file1 = await createRealPDFFile('doc1.pdf');
            const file2 = await createRealPDFFile('doc2.pdf');

            const result = await processor.process({
                files: [file1, file2],
                options: {},
            });

            expect(result.success).toBe(false);
            expect(result.error?.code).toBe(PDFErrorCode.INVALID_OPTIONS);
        });

        it('should successfully process a PDF with text elements', async () => {
            const file = await createRealPDFFile('doc.pdf', 1);

            const elements = [
                {
                    id: '1',
                    type: 'text',
                    pageNumber: 1,
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 20,
                    rotation: 0,
                    content: 'Hello World',
                    fontFamily: 'Helvetica',
                    fontSize: 12,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#000000',
                    alignment: 'left',
                    lineHeight: 1.2,
                    letterSpacing: 0,
                    opacity: 1,
                }
            ];

            const result = await processor.process({
                files: [file],
                options: { elements },
            });

            expect(result.success).toBe(true);
            expect(result.result).toBeInstanceOf(Blob);
            expect(result.metadata?.elementsProcessed).toBe(1);
        });

        it('should successfully process a PDF with shape elements', async () => {
            const file = await createRealPDFFile('doc.pdf', 1);

            const elements = [
                {
                    id: '2',
                    type: 'shape',
                    pageNumber: 1,
                    x: 100,
                    y: 100,
                    width: 50,
                    height: 50,
                    rotation: 0,
                    shapeType: 'rectangle',
                    fillColor: '#FF0000',
                    strokeColor: '#000000',
                    strokeWidth: 2,
                    opacity: 0.8,
                },
                {
                    id: '3',
                    type: 'shape',
                    pageNumber: 1,
                    x: 200,
                    y: 200,
                    width: 40,
                    height: 40,
                    rotation: 0,
                    shapeType: 'circle',
                    fillColor: '#00FF00',
                    strokeColor: '#000000',
                    strokeWidth: 1,
                    opacity: 1,
                }
            ];

            const result = await processor.process({
                files: [file],
                options: { elements },
            });

            expect(result.success).toBe(true);
            expect(result.metadata?.elementsProcessed).toBe(2);
        });

        it('should handle invalid page numbers by skipping them', async () => {
            const file = await createRealPDFFile('doc.pdf', 1);

            const elements = [
                {
                    id: '4',
                    type: 'text',
                    pageNumber: 5, // Invalid page
                    x: 50,
                    y: 50,
                    width: 100,
                    height: 20,
                    rotation: 0,
                    content: 'Skip Me',
                    fontFamily: 'Helvetica',
                    fontSize: 12,
                    color: '#000000',
                }
            ];

            const result = await processor.process({
                files: [file],
                options: { elements },
            });

            expect(result.success).toBe(true);
            expect(result.metadata?.elementsProcessed).toBe(1);
        });
    });

    describe('performOCR', () => {
        it('should perform OCR and return text blocks', async () => {
            const file = await createRealPDFFile('doc.pdf', 1);

            const result = await processor.performOCR(file);

            expect(result.fullText).toContain('OCR Result Text');
            expect(result.textBlocks.length).toBeGreaterThan(0);
            expect(result.confidence).toBeGreaterThan(0);
        });
    });
});
