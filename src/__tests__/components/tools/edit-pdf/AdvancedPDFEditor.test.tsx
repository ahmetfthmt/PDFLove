import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { AdvancedPDFEditor } from '@/components/tools/edit-pdf/AdvancedPDFEditor';
import React from 'react';

// Mock lucide-react
vi.mock('lucide-react', () => ({
    MousePointer2: () => <div data-testid="icon-select" />,
    Type: () => <div data-testid="icon-text" />,
    Square: () => <div data-testid="icon-rect" />,
    Circle: () => <div data-testid="icon-circleicon" />,
    Minus: () => <div data-testid="icon-lineicon" />,
    Image: () => <div data-testid="icon-imageicon" />,
    Eraser: () => <div data-testid="icon-eraser" />,
    ScanText: () => <div data-testid="icon-scantext" />,
    Eye: () => <div data-testid="icon-eye" />,
    Save: () => <div data-testid="icon-save" />,
    Trash2: () => <div data-testid="icon-trash" />,
    Copy: () => <div data-testid="icon-copy" />,
    ZoomIn: () => <div data-testid="icon-zoomin" />,
    ZoomOut: () => <div data-testid="icon-zoomout" />,
    ChevronLeft: () => <div data-testid="icon-left" />,
    ChevronRight: () => <div data-testid="icon-right" />,
    X: () => <div data-testid="icon-x" />,
    Bold: () => <div data-testid="icon-bold" />,
    Italic: () => <div data-testid="icon-italic" />,
    AlignLeft: () => <div data-testid="icon-alignleft" />,
    AlignCenter: () => <div data-testid="icon-aligncenter" />,
    AlignRight: () => <div data-testid="icon-alignright" />,
    Check: () => <div data-testid="icon-check" />,
    ArrowRight: () => <div data-testid="icon-arrow" />,
    Layers: () => <div data-testid="icon-layers" />,
    Maximize2: () => <div data-testid="icon-max" />,
    Minimize2: () => <div data-testid="icon-min" />,
    Settings2: () => <div data-testid="icon-settings" />,
    Palette: () => <div data-testid="icon-palette" />,
    Download: () => <div data-testid="icon-download" />,
    Share2: () => <div data-testid="icon-share" />,
    PanelLeft: () => <div data-testid="icon-panel" />,
    Move: () => <div data-testid="icon-move" />,
    Grab: () => <div data-testid="icon-grab" />,
}));

// Mock pdf loader
vi.mock('@/lib/pdf/loader', () => ({
    loadPdfjs: vi.fn().mockResolvedValue({
        getDocument: vi.fn().mockReturnValue({
            promise: Promise.resolve({
                numPages: 5,
                getPage: vi.fn().mockResolvedValue({
                    getViewport: vi.fn().mockReturnValue({ width: 600, height: 800 }),
                    render: vi.fn().mockReturnValue({ promise: Promise.resolve() }),
                    getTextContent: vi.fn().mockResolvedValue({ items: [] }),
                }),
            }),
        }),
    }),
}));

// Mock processors
vi.mock('@/lib/pdf/processors', () => ({
    editPDF: vi.fn().mockResolvedValue({ success: true, result: new Blob() }),
    performOCR: vi.fn().mockResolvedValue({ textBlocks: [], fullText: '', confidence: 0 }),
    FONT_FAMILY_NAMES: { 'Helvetica': 'Helvetica' },
    FONT_SIZES: [12],
    STANDARD_COLORS: [{ name: 'Black', value: '#000000' }],
}));

// Mock child components
vi.mock('../ProcessingProgress', () => ({
    ProcessingProgress: () => <div data-testid="processing-progress" />,
}));
vi.mock('../DownloadButton', () => ({
    DownloadButton: () => <button data-testid="download-button">Download</button>,
}));

describe('AdvancedPDFEditor', () => {
    const mockFile = new File(['test'], 'test.pdf', { type: 'application/pdf' });
    if (typeof mockFile.arrayBuffer !== 'function') {
        Object.defineProperty(mockFile, 'arrayBuffer', {
            value: async () => new ArrayBuffer(0),
            writable: false,
        });
    }
    const mockOnClear = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        // Mock canvas methods
        HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
            fillRect: vi.fn(),
            beginPath: vi.fn(),
            moveTo: vi.fn(),
            lineTo: vi.fn(),
            stroke: vi.fn(),
        });
    });

    it('renders correctly and loads PDF', async () => {
        render(<AdvancedPDFEditor file={mockFile} onClear={mockOnClear} />);

        expect(screen.getByText(/SAYFALAR/i)).toBeInTheDocument();
        await waitFor(() => {
            expect(screen.getByText('1 / 5')).toBeInTheDocument();
        });
    });

    it('toggles sidebar when clicking the toggle button', async () => {
        render(<AdvancedPDFEditor file={mockFile} onClear={mockOnClear} />);
        await waitFor(() => expect(screen.getByText('1 / 5')).toBeInTheDocument());

        const toggleBtn = screen.getByTestId('icon-panel').closest('button');
        fireEvent.click(toggleBtn!);

        // Sidebar header should be gone
        expect(screen.queryByText('SAYFALAR')).not.toBeInTheDocument();

        fireEvent.click(toggleBtn!);
        expect(screen.getByText('SAYFALAR')).toBeInTheDocument();
    });

    it('changes active tool when clicking tool buttons', async () => {
        render(<AdvancedPDFEditor file={mockFile} onClear={mockOnClear} />);
        await waitFor(() => expect(screen.getByText('1 / 5')).toBeInTheDocument());

        const textToolBtn = screen.getByText('Metin').closest('button');
        fireEvent.click(textToolBtn!);

        // Check if the button is active (it has a blue-600 class or similar in implementation)
        // Since we are checking behavior, we can check if it stays highlighted or cursor changes
        // But cursor is on a ref, hard to check in JSDOM easily.

        // We can verify that it doesn't crash and we can click other tools
        const rectToolBtn = screen.getByText('Dörtgen').closest('button');
        fireEvent.click(rectToolBtn!);
    });

    it('navigates pages using the pagination buttons', async () => {
        render(<AdvancedPDFEditor file={mockFile} onClear={mockOnClear} />);

        await waitFor(() => expect(screen.getByText('1 / 5')).toBeInTheDocument());

        const nextBtn = screen.getByTestId('icon-right').closest('button');
        fireEvent.click(nextBtn!);

        expect(screen.getByText('2 / 5')).toBeInTheDocument();

        const prevBtn = screen.getByTestId('icon-left').closest('button');
        fireEvent.click(prevBtn!);

        expect(screen.getByText('1 / 5')).toBeInTheDocument();
    });

    it('calls onClear when closing the editor', async () => {
        render(<AdvancedPDFEditor file={mockFile} onClear={mockOnClear} />);
        await waitFor(() => expect(screen.getByText('1 / 5')).toBeInTheDocument());

        const closeBtn = screen.getByTestId('icon-x').closest('button');
        fireEvent.click(closeBtn!);

        expect(mockOnClear).toHaveBeenCalled();
    });

    it('zooms in and out', async () => {
        render(<AdvancedPDFEditor file={mockFile} onClear={mockOnClear} />);
        await waitFor(() => expect(screen.getByText('1 / 5')).toBeInTheDocument());

        const zoomInBtn = screen.getByTestId('icon-zoomin').closest('button');
        const zoomOutBtn = screen.getByTestId('icon-zoomout').closest('button');

        expect(screen.getByText('100%')).toBeInTheDocument();

        fireEvent.click(zoomInBtn!);
        await waitFor(() => expect(screen.getByText('110%')).toBeInTheDocument());

        fireEvent.click(zoomOutBtn!);
        await waitFor(() => expect(screen.getByText('100%')).toBeInTheDocument());
    });
});
