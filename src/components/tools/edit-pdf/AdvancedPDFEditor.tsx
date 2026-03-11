'use client';

import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';
import {
    MousePointer2, Type, Square, Circle as CircleIcon, Minus as LineIcon,
    Image as ImageIcon, Eraser, ScanText, Eye, Save, Trash2,
    Copy, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, X, Bold, Italic,
    AlignLeft, AlignCenter, AlignRight, Check, ArrowRight, Layers,
    Maximize2, Minimize2, Settings2, Palette, Download, Share2, PanelLeft, Move, Grab
} from 'lucide-react';

import { loadPdfjs } from '@/lib/pdf/loader';
import {
    ShapeType, EditorElement, TextElement, ImageElement,
    ShapeElement, FONT_FAMILY_NAMES, FONT_SIZES, STANDARD_COLORS,
    editPDF, performOCR, PDFFontFamily, TextAlignment
} from '@/lib/pdf/processors';

import { ProcessingProgress } from '../ProcessingProgress';
import { DownloadButton } from '../DownloadButton';

export interface AdvancedPDFEditorProps {
    file: File;
    onClear: () => void;
    className?: string;
}

type Tool = 'select' | 'hand' | 'text' | 'rectangle' | 'circle' | 'line' | 'arrow' | 'whiteout' | 'image';

const TOOL_CURSORS: Record<Tool, string> = {
    select: 'default', hand: 'grab', text: 'text', rectangle: 'crosshair', circle: 'crosshair',
    line: 'crosshair', arrow: 'crosshair', whiteout: 'crosshair', image: 'crosshair'
};

function genId() { return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`; }

export function AdvancedPDFEditor({ file, onClear, className = '' }: AdvancedPDFEditorProps) {
    // PDF state
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [scale, setScale] = useState(1.0);
    const [pageSize, setPageSize] = useState({ width: 0, height: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);

    // Elements
    const [elements, setElements] = useState<EditorElement[]>([]);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);

    // Tool
    const [activeTool, setActiveTool] = useState<Tool>('select');
    const [activeColor, setActiveColor] = useState('#000000');

    // Drag, Resize, Pan state
    const [isDrawing, setIsDrawing] = useState(false);
    const [drawStart, setDrawStart] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [isResizing, setIsResizing] = useState<string | null>(null);
    const [isPanning, setIsPanning] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [initialPan, setInitialPan] = useState({ x: 0, y: 0 });
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [initRect, setInitRect] = useState({ x: 0, y: 0, w: 0, h: 0 });

    // Processing
    const [isProcessing, setIsProcessing] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressMsg, setProgressMsg] = useState('');
    const [result, setResult] = useState<Blob | null>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const scrollAreaRef = useRef<HTMLDivElement>(null);
    const pdfDocRef = useRef<any>(null);
    const renderTaskRef = useRef<any>(null);
    const isRenderingRef = useRef(false);
    const renderQueueRef = useRef<number | null>(null);

    const SCALE_FACTOR = 1.5 * scale;

    // --- Keyboard shortcuts ---
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const tag = (e.target as HTMLElement).tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {
                setElements(prev => prev.filter(el => el.id !== selectedId));
                setSelectedId(null);
                setEditingId(null);
            }
            if (e.key === 'Escape') {
                setSelectedId(null);
                setEditingId(null);
                setActiveTool('select');
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
                e.preventDefault();
                duplicate();
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [selectedId, elements]);

    // --- PDF Load ---
    useEffect(() => {
        (async () => {
            try {
                const pdfjs = await loadPdfjs();
                const buf = await file.arrayBuffer();
                const pdf = await pdfjs.getDocument({ data: buf }).promise;
                pdfDocRef.current = pdf;
                setTotalPages(pdf.numPages);
                setIsLoaded(true);
            } catch (e) { console.error(e); }
        })();
    }, [file]);

    // --- Render Page ---
    const renderPage = useCallback(async (num: number) => {
        if (!pdfDocRef.current || !canvasRef.current) return;
        if (isRenderingRef.current) {
            renderQueueRef.current = num;
            renderTaskRef.current?.cancel();
            return;
        }
        isRenderingRef.current = true;
        try {
            const page = await pdfDocRef.current.getPage(num);
            const vp = page.getViewport({ scale: SCALE_FACTOR });
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d')!;
            canvas.width = vp.width;
            canvas.height = vp.height;
            setPageSize({ width: vp.width, height: vp.height });
            const task = page.render({ canvasContext: ctx, viewport: vp });
            renderTaskRef.current = task;
            await task.promise;
        } catch (e: any) {
            if (e?.name !== 'RenderingCancelledException') console.error(e);
        } finally {
            isRenderingRef.current = false;
            if (renderQueueRef.current !== null) {
                const next = renderQueueRef.current;
                renderQueueRef.current = null;
                renderPage(next);
            }
        }
    }, [SCALE_FACTOR]);

    useEffect(() => {
        if (!isLoaded) return;
        renderPage(currentPage).then(() => {
            const hasElements = elements.some(e => e.pageNumber === currentPage);
            if (!hasElements) autoScan();
        });
    }, [currentPage, scale, isLoaded]);

    // --- Auto Scan ---
    const autoScan = useCallback(async () => {
        if (!pdfDocRef.current) return;
        try {
            const page = await pdfDocRef.current.getPage(currentPage);
            const textContent = await page.getTextContent();
            const vp = page.getViewport({ scale: 1.0 });
            const items: TextElement[] = textContent.items
                .map((item: any) => {
                    const [, , , sy, tx, ty] = item.transform;
                    const h = Math.abs(sy);
                    return {
                        id: genId(), type: 'text' as const, pageNumber: currentPage,
                        x: tx, y: vp.height - ty - h, width: item.width || 80, height: h || 14,
                        rotation: 0, content: item.str,
                        fontFamily: 'Helvetica' as PDFFontFamily, fontSize: (h || 12) * 0.9,
                        fontWeight: 'normal' as const, fontStyle: 'normal' as const,
                        color: 'transparent', alignment: 'left' as TextAlignment,
                        lineHeight: 1.1, letterSpacing: 0, opacity: 1, backgroundCover: false,
                    };
                })
                .filter((el: TextElement) => el.content.trim().length > 0);
            setElements(prev => [...prev.filter(e => e.pageNumber !== currentPage), ...items]);
        } catch (e) { console.error(e); }
    }, [currentPage]);

    // --- Coordinate Calculation ---
    const getCanvasPos = (e: React.MouseEvent) => {
        const rect = canvasRef.current!.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) / SCALE_FACTOR,
            y: (e.clientY - rect.top) / SCALE_FACTOR,
        };
    };

    // --- Mouse Interaction ---
    const handleCanvasMouseDown = (e: React.MouseEvent) => {
        if (activeTool === 'hand') {
            setIsPanning(true);
            setDragStart({ x: e.clientX, y: e.clientY });
            setInitialPan({ x: pan.x, y: pan.y });
            return;
        }

        if (activeTool === 'select') return;
        if (activeTool === 'image') { pickImage(e); return; }

        const pos = getCanvasPos(e);
        setIsDrawing(true);
        setDrawStart(pos);
    };

    const handleCanvasMouseUp = (e: React.MouseEvent) => {
        if (isPanning) { setIsPanning(false); return; }
        if (!isDrawing) return;

        setIsDrawing(false);
        const pos = getCanvasPos(e);
        const dx = pos.x - drawStart.x;
        const dy = pos.y - drawStart.y;
        const w = Math.abs(dx) || 80;
        const h = Math.abs(dy) || (activeTool === 'text' ? 20 : 50);
        const x = dx >= 0 ? drawStart.x : pos.x;
        const y = dy >= 0 ? drawStart.y : pos.y;

        if (activeTool === 'text') {
            const el: TextElement = {
                id: genId(), type: 'text', pageNumber: currentPage,
                x, y, width: Math.max(w, 60), height: Math.max(h, 20), rotation: 0,
                content: 'Metin Girin', fontFamily: 'Helvetica', fontSize: 14,
                fontWeight: 'normal', fontStyle: 'normal', color: activeColor === 'transparent' ? '#000000' : activeColor,
                alignment: 'left', lineHeight: 1.2, letterSpacing: 0, opacity: 1,
                backgroundCover: true, // New manual text always covers background
            };
            setElements(prev => [...prev, el]);
            setSelectedId(el.id);
            setEditingId(el.id);
        } else {
            const shapeMap: Record<string, ShapeType> = {
                rectangle: 'rectangle', circle: 'circle', line: 'line',
                arrow: 'arrow', whiteout: 'whiteout'
            };
            const shapeType = shapeMap[activeTool] as ShapeType;
            if (!shapeType) return;
            const isWhiteout = shapeType === 'whiteout';
            const el: ShapeElement = {
                id: genId(), type: 'shape', pageNumber: currentPage,
                x, y, width: Math.max(w, 10), height: Math.max(h, 10), rotation: 0,
                shapeType,
                fillColor: isWhiteout ? '#ffffff' : (activeColor === 'transparent' ? '#3b82f644' : activeColor + '44'),
                strokeColor: isWhiteout ? '#cccccc' : (activeColor === 'transparent' ? '#3b82f6' : activeColor),
                strokeWidth: isWhiteout ? 1 : 2,
                opacity: isWhiteout ? 1 : 0.85,
            };
            setElements(prev => [...prev, el]);
            setSelectedId(el.id);
        }
        setActiveTool('select');
    };

    const pickImage = (e: React.MouseEvent) => {
        const pos = getCanvasPos(e);
        const input = document.createElement('input');
        input.type = 'file'; input.accept = 'image/*';
        input.onchange = (ev: any) => {
            const f = ev.target.files?.[0];
            if (!f) return;
            const reader = new FileReader();
            reader.onload = (re: any) => {
                const img = new Image();
                img.onload = () => {
                    const ratio = img.width / img.height;
                    const w = Math.min(img.width, 200);
                    const el: ImageElement = {
                        id: genId(), type: 'image', pageNumber: currentPage,
                        x: pos.x, y: pos.y, width: w, height: w / ratio,
                        rotation: 0, imageData: re.target.result, opacity: 1, preserveAspectRatio: true,
                        backgroundCover: true,
                    };
                    setElements(prev => [...prev, el]);
                    setSelectedId(el.id);
                };
                img.src = re.target.result;
            };
            reader.readAsDataURL(f);
        };
        input.click();
        setActiveTool('select');
    };

    // --- Drag / Resize / Pan logic ---
    useEffect(() => {
        const onMove = (e: MouseEvent) => {
            if (isPanning) {
                const dx = e.clientX - dragStart.x;
                const dy = e.clientY - dragStart.y;
                setPan({ x: initialPan.x + dx, y: initialPan.y + dy });
                return;
            }

            if (!selectedId) return;
            const dx = (e.clientX - dragStart.x) / SCALE_FACTOR;
            const dy = (e.clientY - dragStart.y) / SCALE_FACTOR;

            setElements(prev => prev.map(el => {
                if (el.id !== selectedId) return el;
                if (isDragging) return { ...el, x: initRect.x + dx, y: initRect.y + dy };
                if (isResizing === 'se') return { ...el, width: Math.max(10, initRect.w + dx), height: Math.max(10, initRect.h + dy) };
                if (isResizing === 'sw') return { ...el, x: initRect.x + dx, width: Math.max(10, initRect.w - dx), height: Math.max(10, initRect.h + dy) };
                if (isResizing === 'ne') return { ...el, y: initRect.y + dy, width: Math.max(10, initRect.w + dx), height: Math.max(10, initRect.h - dy) };
                if (isResizing === 'nw') return { ...el, x: initRect.x + dx, y: initRect.y + dy, width: Math.max(10, initRect.w - dx), height: Math.max(10, initRect.h - dy) };
                return el;
            }));
        };
        const onUp = () => {
            setIsDragging(false);
            setIsResizing(null);
            setIsPanning(false);
        };
        if (isDragging || isResizing || isPanning) {
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', onUp);
        }
        return () => {
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseup', onUp);
        };
    }, [isDragging, isResizing, isPanning, selectedId, dragStart, initRect, initialPan, SCALE_FACTOR]);

    const startDrag = (e: React.MouseEvent, el: EditorElement) => {
        if (editingId === el.id) return;
        e.stopPropagation();
        setSelectedId(el.id);
        setIsDragging(true);
        setDragStart({ x: e.clientX, y: e.clientY });
        setInitRect({ x: el.x, y: el.y, w: el.width, h: el.height });
    };

    const startResize = (e: React.MouseEvent, el: EditorElement, corner: string) => {
        e.stopPropagation();
        setIsResizing(corner);
        setDragStart({ x: e.clientX, y: e.clientY });
        setInitRect({ x: el.x, y: el.y, w: el.width, h: el.height });
    };

    // --- Actions ---
    const handleScan = async () => {
        setIsProcessing(true); setProgressMsg('Analiz ediliyor...');
        await autoScan();
        setIsProcessing(false);
    };

    const handleOCR = async () => {
        setIsProcessing(true); setProgress(0);
        const res = await performOCR(file, ['eng', 'tur'], (p, m) => { setProgress(p); setProgressMsg(m || ''); });
        if (res?.textBlocks?.length) {
            const els = res.textBlocks.map(b => ({
                id: genId(), type: 'text' as const, pageNumber: b.pageNumber,
                x: b.bounds.x, y: b.bounds.y, width: b.bounds.width, height: b.bounds.height,
                rotation: 0, content: b.text, fontFamily: 'Helvetica' as PDFFontFamily,
                fontSize: 12, fontWeight: 'normal' as const, fontStyle: 'normal' as const,
                color: '#000000', alignment: 'left' as TextAlignment,
                lineHeight: 1.1, letterSpacing: 0, opacity: 1, backgroundCover: true,
            }));
            setElements(prev => [...prev, ...els]);
        }
        setIsProcessing(false);
    };

    const handleSave = async () => {
        setIsProcessing(true); setProgress(0);
        const r = await editPDF(file, { elements: elements as any }, (p, m) => { setProgress(p); setProgressMsg(m || ''); });
        if (r.success && r.result && !Array.isArray(r.result)) setResult(r.result);
        setIsProcessing(false);
    };

    const deleteSelected = () => {
        setElements(prev => prev.filter(e => e.id !== selectedId));
        setSelectedId(null);
    };

    const duplicate = () => {
        const el = elements.find(e => e.id === selectedId);
        if (!el) return;
        const newEl = { ...el, id: genId(), x: el.x + 10, y: el.y + 10 };
        setElements(prev => [...prev, newEl]);
        setSelectedId(newEl.id);
    };

    const updateEl = (id: string, patch: Record<string, unknown>) => {
        setElements(prev => prev.map(el => el.id === id ? { ...el, ...patch } as EditorElement : el));
    };

    const selected = elements.find(e => e.id === selectedId);
    const pageElements = elements.filter(e => e.pageNumber === currentPage);

    // --- Thumbnails ---
    const [thumbnails, setThumbnails] = useState<string[]>([]);
    useEffect(() => {
        if (!isLoaded || !pdfDocRef.current) return;
        (async () => {
            const doc = pdfDocRef.current;
            const thumbs: string[] = [];
            for (let i = 1; i <= doc.numPages; i++) {
                const page = await doc.getPage(i);
                const vp = page.getViewport({ scale: 0.15 });
                const can = document.createElement('canvas');
                can.width = vp.width; can.height = vp.height;
                const ctx = can.getContext('2d')!;
                await page.render({ canvasContext: ctx, viewport: vp }).promise;
                thumbs.push(can.toDataURL());
            }
            setThumbnails(thumbs);
        })();
    }, [isLoaded]);

    const TOOL_GROUPS = [
        {
            label: 'ANA',
            tools: [
                { id: 'select', icon: MousePointer2, label: 'Seç' },
                { id: 'hand', icon: Grab, label: 'Taşı' },
            ]
        },
        {
            label: 'DÜZEN',
            tools: [
                { id: 'scan', icon: ScanText, label: 'Tara', action: handleScan },
                { id: 'ocr', icon: Eye, label: 'OCR', action: handleOCR },
            ]
        },
        {
            label: 'EKLE',
            tools: [
                { id: 'text', icon: Type, label: 'Metin' },
                { id: 'image', icon: ImageIcon, label: 'Resim' },
            ]
        },
        {
            label: 'ŞEKİL',
            tools: [
                { id: 'rectangle', icon: Square, label: 'Dörtgen' },
                { id: 'circle', icon: CircleIcon, label: 'Daire' },
                { id: 'line', icon: LineIcon, label: 'Çizgi' },
                { id: 'arrow', icon: ArrowRight, label: 'Ok' },
                { id: 'whiteout', icon: Eraser, label: 'Beyaz' },
            ]
        }
    ];

    return (
        <div className="flex flex-col w-full h-full bg-[#eef1f5] text-neutral-800 font-sans select-none">

            {/* --- PREMIUM RIBBON BAR --- */}
            <div className="bg-white/80 backdrop-blur-md border-b border-neutral-200/50 shadow-sm z-[100] px-4 py-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
                    {/* Brand / Toggle */}
                    <button onClick={() => setShowSidebar(!showSidebar)} className={`p-2 rounded-xl transition-all duration-300 ${showSidebar ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'hover:bg-neutral-100 text-neutral-500'}`}>
                        <PanelLeft className="w-5 h-5" />
                    </button>

                    <div className="h-12 w-px bg-neutral-200 mx-2" />

                    {/* Groups */}
                    {TOOL_GROUPS.map((group, gIdx) => (
                        <div key={group.label} className="flex flex-col items-center gap-1 group">
                            <div className="flex items-center gap-0.5 px-0.5 py-0.5 bg-neutral-100/50 rounded-xl">
                                {group.tools.map(t => (
                                    <button
                                        key={t.id}
                                        onClick={() => {
                                            const tool = t as { id: string; action?: () => void };
                                            if (tool.action) tool.action();
                                            else { setActiveTool(t.id as Tool); setEditingId(null); }
                                        }}
                                        className={`flex flex-col items-center justify-center min-w-[54px] h-[54px] rounded-lg transition-all ${activeTool === t.id
                                                ? 'bg-white text-blue-600 shadow-sm scale-100'
                                                : 'hover:bg-white/80 text-neutral-500 hover:text-neutral-900'
                                            }`}
                                        title={t.label}
                                    >
                                        <t.icon className={`w-5 h-5 ${activeTool === t.id ? 'text-blue-600' : ''}`} />
                                        <span className="text-[10px] mt-1 font-bold">{t.label}</span>
                                    </button>
                                ))}
                            </div>
                            <span className="text-[9px] font-black text-neutral-400 uppercase tracking-[0.2em]">{group.label}</span>
                        </div>
                    ))}

                    <div className="h-12 w-px bg-neutral-200 mx-2" />

                    {/* Appearance */}
                    <div className="flex flex-col items-center gap-1">
                        <div className="flex items-center gap-3 h-[54px]">
                            <label className="relative cursor-pointer group hover:scale-105 transition-transform">
                                <div className="w-9 h-9 rounded-full border-2 border-white shadow-lg overflow-hidden ring-1 ring-neutral-200" style={{ backgroundColor: activeColor }} />
                                <input type="color" value={activeColor} onChange={e => setActiveColor(e.target.value)} className="absolute inset-0 opacity-0 cursor-pointer" />
                            </label>

                            <div className="flex items-center bg-neutral-100/50 rounded-xl p-1 gap-1">
                                <button onClick={() => setScale(s => Math.max(0.1, s - 0.1))} className="p-2 hover:bg-white rounded-lg transition-all"><ZoomOut className="w-4 h-4 text-neutral-500" /></button>
                                <span className="text-xs font-black min-w-[44px] text-center text-blue-600">{Math.round(scale * 100)}%</span>
                                <button onClick={() => setScale(s => Math.min(8, s + 0.1))} className="p-2 hover:bg-white rounded-lg transition-all"><ZoomIn className="w-4 h-4 text-neutral-500" /></button>
                            </div>
                        </div>
                        <span className="text-[9px] font-black text-neutral-400 uppercase tracking-[0.2em]">GÖRÜNÜM</span>
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-3">
                    <button onClick={handleSave} className="flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white text-sm font-black shadow-xl shadow-blue-200 hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">
                        <Save className="w-4 h-4" /> Kaydet
                    </button>
                    <button onClick={onClear} className="p-2.5 rounded-2xl hover:bg-red-50 text-red-500 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
                {/* --- SIDEBAR --- */}
                {showSidebar && (
                    <div className="w-64 bg-white/50 backdrop-blur-sm border-r border-neutral-200/50 flex flex-col shrink-0 animate-in slide-in-from-left duration-300">
                        <div className="p-4 border-b border-neutral-200/30 flex items-center justify-between">
                            <span className="text-[10px] font-black text-neutral-400 tracking-[0.2em]">SAYFALAR</span>
                            <span className="bg-neutral-100 text-neutral-500 text-[10px] font-bold px-2 py-0.5 rounded-full">{totalPages}</span>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
                            {thumbnails.map((src, i) => (
                                <div
                                    key={i}
                                    onClick={() => setCurrentPage(i + 1)}
                                    className={`relative cursor-pointer group transition-all duration-300 ${currentPage === i + 1
                                            ? 'scale-105'
                                            : 'opacity-70 hover:opacity-100'
                                        }`}
                                >
                                    <div className={`rounded-xl overflow-hidden border-2 transition-all shadow-sm ${currentPage === i + 1 ? 'border-blue-600 shadow-xl shadow-blue-100' : 'border-transparent hover:border-neutral-300'
                                        }`}>
                                        <img src={src} className="w-full h-auto block" />
                                    </div>
                                    <span className={`absolute -top-2 -left-2 w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shadow-md border ${currentPage === i + 1 ? 'bg-blue-600 text-white border-blue-500' : 'bg-white text-neutral-500 border-neutral-200'
                                        }`}>
                                        {i + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- CANVAS AREA --- */}
                <div className="flex-1 relative flex flex-col overflow-hidden">
                    {/* Zoom / Page nav overlay */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-neutral-900/90 backdrop-blur-md text-white px-4 py-2.5 rounded-3xl shadow-2xl z-40 border border-white/10">
                        <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                        <span className="text-xs font-black px-2 tabular-nums">{currentPage} / {totalPages}</span>
                        <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} className="p-2 hover:bg-white/10 rounded-full transition-colors"><ChevronRight className="w-4 h-4" /></button>
                    </div>

                    <div
                        ref={scrollAreaRef}
                        className="flex-1 overflow-auto p-20 flex justify-center items-start scrollbar-thin"
                        style={{ cursor: TOOL_CURSORS[activeTool] }}
                        onClick={() => { setSelectedId(null); setEditingId(null); }}
                    >
                        <div
                            className="relative shadow-[0_40px_100px_rgba(0,0,0,0.2)] bg-white transform-gpu"
                            style={{
                                width: pageSize.width,
                                height: pageSize.height,
                                transform: `translate(${pan.x}px, ${pan.y}px)`,
                            }}
                            onMouseDown={handleCanvasMouseDown}
                            onMouseUp={handleCanvasMouseUp}
                        >
                            <canvas ref={canvasRef} className="block absolute inset-0 pointer-events-none" />

                            {/* Elements */}
                            {pageElements.map(el => {
                                const sx = el.x * SCALE_FACTOR;
                                const sy = el.y * SCALE_FACTOR;
                                const sw = el.width * SCALE_FACTOR;
                                const sh = el.height * SCALE_FACTOR;
                                const isSelected = selectedId === el.id;
                                const isEditing = editingId === el.id;

                                return (
                                    <div
                                        key={el.id}
                                        style={{
                                            position: 'absolute', left: sx, top: sy, width: sw, height: sh,
                                            transform: `rotate(${el.rotation}deg)`,
                                            outline: isSelected ? '2.5px solid #2563eb' : 'none',
                                            outlineOffset: '2px',
                                            zIndex: isSelected ? 10 : 1,
                                            cursor: activeTool === 'select' ? (isDragging && isSelected ? 'grabbing' : 'grab') : (activeTool === 'hand' ? 'grab' : 'crosshair'),
                                        }}
                                        className="group/el"
                                        onMouseDown={e => {
                                            // Click always selects IF in select mode or clicking existing element
                                            if (activeTool !== 'hand') {
                                                e.stopPropagation();
                                                startDrag(e, el);
                                            }
                                        }}
                                        onClick={e => e.stopPropagation()}
                                        onDoubleClick={e => {
                                            if (el.type === 'text') {
                                                e.stopPropagation();
                                                setSelectedId(el.id);
                                                setEditingId(el.id);
                                                if ((el as TextElement).color === 'transparent') {
                                                    updateEl(el.id, { color: '#000000', backgroundCover: true });
                                                }
                                            }
                                        }}
                                    >
                                        {/* Hover border */}
                                        {!isSelected && (
                                            <div className="absolute inset-0 border border-blue-400 opacity-0 group-hover/el:opacity-40 transition-opacity pointer-events-none" />
                                        )}

                                        {/* Content */}
                                        {el.type === 'text' && (() => {
                                            const t = el as TextElement;
                                            const isManuallyWhiteout = t.backgroundCover;
                                            if (isEditing) return (
                                                <textarea
                                                    autoFocus
                                                    className="w-full h-full resize-none outline-none border-none bg-white p-0.5"
                                                    style={{
                                                        fontFamily: t.fontFamily,
                                                        fontSize: t.fontSize * SCALE_FACTOR,
                                                        fontWeight: t.fontWeight,
                                                        fontStyle: t.fontStyle,
                                                        color: t.color === 'transparent' ? '#000000' : t.color,
                                                        textAlign: t.alignment as any,
                                                        lineHeight: t.lineHeight,
                                                    }}
                                                    value={t.content ?? ''}
                                                    onChange={ev => updateEl(el.id, { content: ev.target.value })}
                                                    onBlur={() => setEditingId(null)}
                                                    onClick={ev => ev.stopPropagation()}
                                                    onMouseDown={ev => ev.stopPropagation()}
                                                />
                                            );
                                            return (
                                                <div
                                                    className="w-full h-full overflow-hidden"
                                                    style={{
                                                        fontFamily: t.fontFamily,
                                                        fontSize: t.fontSize * SCALE_FACTOR,
                                                        fontWeight: t.fontWeight,
                                                        fontStyle: t.fontStyle,
                                                        color: isSelected && t.color === 'transparent' ? '#2563eb66' : t.color,
                                                        textAlign: t.alignment as any,
                                                        lineHeight: t.lineHeight,
                                                        opacity: (t.color === 'transparent' && !isManuallyWhiteout && !isSelected) ? 0 : t.opacity,
                                                        whiteSpace: 'pre-wrap',
                                                        backgroundColor: isManuallyWhiteout ? '#ffffff' : 'transparent', // SOLID WHITE
                                                    }}
                                                >
                                                    {t.content || (isSelected ? '\u00a0' : '')}
                                                </div>
                                            );
                                        })()}

                                        {el.type === 'shape' && (() => {
                                            const s = el as ShapeElement;
                                            if (s.shapeType === 'circle') return <div className="w-full h-full rounded-full" style={{ backgroundColor: s.fillColor, border: `${s.strokeWidth}px solid ${s.strokeColor}`, opacity: s.opacity }} />;
                                            if (s.shapeType === 'line') return <svg className="w-full h-full overflow-visible"><line x1="0" y1={sh / 2} x2={sw} y2={sh / 2} stroke={s.strokeColor} strokeWidth={s.strokeWidth} opacity={s.opacity} /></svg>;
                                            if (s.shapeType === 'arrow') return <svg className="w-full h-full overflow-visible"><defs><marker id={`ah-${el.id}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill={s.strokeColor} /></marker></defs><line x1="0" y1={sh / 2} x2={sw} y2={sh / 2} stroke={s.strokeColor} strokeWidth={s.strokeWidth} opacity={s.opacity} markerEnd={`url(#ah-${el.id})`} /></svg>;
                                            return <div className="w-full h-full" style={{ backgroundColor: s.fillColor, border: `${s.strokeWidth}px solid ${s.strokeColor}`, opacity: s.opacity }} />;
                                        })()}

                                        {el.type === 'image' && <img src={(el as ImageElement).imageData} className="w-full h-full object-cover" style={{ opacity: (el as ImageElement).opacity }} draggable={false} />}

                                        {/* Handles */}
                                        {isSelected && !isEditing && ['nw', 'ne', 'sw', 'se'].map(corner => (
                                            <div
                                                key={corner}
                                                onMouseDown={e => startResize(e, el, corner)}
                                                className="absolute w-4 h-4 bg-white border-2 border-blue-600 rounded-full z-20 shadow-xl cursor-pointer hover:scale-125 transition-transform"
                                                style={{
                                                    top: corner.startsWith('n') ? -8 : 'auto', bottom: corner.startsWith('s') ? -8 : 'auto',
                                                    left: corner.endsWith('w') ? -8 : 'auto', right: corner.endsWith('e') ? -8 : 'auto',
                                                }}
                                            />
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* --- PROPERTIES PANEL --- */}
                    {selectedId && selected && !isDrawing && (
                        <div
                            className="absolute right-8 top-8 w-72 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border border-white overflow-hidden z-[110] animate-in fade-in zoom-in duration-300"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="bg-neutral-900/5 px-5 py-4 flex items-center justify-between border-b border-neutral-100">
                                <span className="text-[10px] font-black tracking-widest text-neutral-500">ÖZELLİKLER</span>
                                <div className="flex gap-1">
                                    <button onClick={duplicate} className="p-1.5 rounded-lg hover:bg-white text-neutral-400 hover:text-blue-600 transition-all"><Copy className="w-3.5 h-3.5" /></button>
                                    <button onClick={deleteSelected} className="p-1.5 rounded-lg hover:bg-red-50 text-neutral-400 hover:text-red-500 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                                </div>
                            </div>

                            <div className="p-5 space-y-6 max-h-[65vh] overflow-y-auto no-scrollbar">
                                {/* Transform */}
                                <div className="grid grid-cols-2 gap-4">
                                    {['X', 'Y', 'w', 'h'].map(k => (
                                        <div key={k} className="space-y-1.5">
                                            <span className="text-[9px] font-black text-neutral-400 uppercase">{k === 'w' ? 'Genişlik' : k === 'h' ? 'Yükseklik' : k}</span>
                                            <input type="number" className="w-full bg-neutral-100/50 border-none rounded-xl px-3 py-2 text-xs font-bold focus:ring-2 focus:ring-blue-500/20"
                                                value={Math.round((selected as unknown as Record<string, number>)[k === 'w' ? 'width' : k === 'h' ? 'height' : k.toLowerCase()])}
                                                onChange={e => updateEl(selectedId, { [k === 'w' ? 'width' : k === 'h' ? 'height' : k.toLowerCase()]: parseFloat(e.target.value) } as any)}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Element Specific */}
                                {selected.type === 'text' && (() => {
                                    const t = selected as TextElement;
                                    return (
                                        <div className="space-y-5">
                                            <div className="space-y-1.5">
                                                <span className="text-[9px] font-black text-neutral-400 uppercase">İÇERİK</span>
                                                <textarea
                                                    className="w-full bg-neutral-100/50 border-none rounded-xl px-3 py-2.5 text-xs font-medium focus:ring-2 focus:ring-blue-500/20 min-h-[90px] shadow-inner"
                                                    value={t.content ?? ''}
                                                    onChange={e => {
                                                        updateEl(selectedId, { content: e.target.value });
                                                        if (t.color === 'transparent') updateEl(selectedId, { color: '#000000', backgroundCover: true });
                                                    }}
                                                />
                                            </div>

                                            <div className="flex gap-2">
                                                <button onClick={() => updateEl(selectedId, { fontWeight: t.fontWeight === 'bold' ? 'normal' : 'bold' })} className={`flex-1 py-2 rounded-xl transition-all ${t.fontWeight === 'bold' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-neutral-100 text-neutral-600'}`}><Bold className="w-4 h-4 mx-auto" /></button>
                                                <button onClick={() => updateEl(selectedId, { fontStyle: t.fontStyle === 'italic' ? 'normal' : 'italic' })} className={`flex-1 py-2 rounded-xl transition-all ${t.fontStyle === 'italic' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-neutral-100 text-neutral-600'}`}><Italic className="w-4 h-4 mx-auto" /></button>
                                            </div>

                                            <label className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-2xl cursor-pointer group hover:bg-blue-50 transition-colors">
                                                <input type="checkbox" checked={!!t.backgroundCover} onChange={e => updateEl(selectedId, { backgroundCover: e.target.checked })} className="w-4 h-4 rounded-md border-blue-200 text-blue-600 focus:ring-blue-500" />
                                                <span className="text-xs font-bold text-blue-800/70 group-hover:text-blue-800">Arka Planı Kapat</span>
                                            </label>

                                            <div className="space-y-2">
                                                <span className="text-[9px] font-black text-neutral-400 uppercase">RENK</span>
                                                <div className="grid grid-cols-7 gap-2">
                                                    {STANDARD_COLORS.map(c => (
                                                        <button key={c.value} onClick={() => { updateEl(selectedId, { color: c.value }); if (t.color === 'transparent') updateEl(selectedId, { backgroundCover: true }); }}
                                                            className={`aspect-square rounded-lg ring-2 ring-offset-2 transition-all hover:scale-110 ${t.color === c.value ? 'ring-blue-500' : 'ring-transparent shadow-sm'}`}
                                                            style={{ backgroundColor: c.value }} />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })()}

                                {/* Shape / Image options (Simplified for brevity but full functionality) */}
                                {selected.type !== 'text' && (
                                    <div className="space-y-4">
                                        <div className="space-y-1.5 text-xs">
                                            <div className="flex justify-between font-bold text-neutral-400 uppercase text-[9px]"><span>Opaklık</span><span>%{Math.round((selected as any).opacity * 100)}</span></div>
                                            <input type="range" min="0" max="1" step="0.05" value={(selected as any).opacity} onChange={e => updateEl(selectedId, { opacity: parseFloat(e.target.value) })} className="w-full accent-blue-600" />
                                        </div>
                                        {(selected as any).fillColor && (
                                            <div className="space-y-1.5">
                                                <span className="text-[9px] font-black text-neutral-400 uppercase">RENK</span>
                                                <div className="relative h-10 w-full rounded-xl border-2 border-white shadow-sm overflow-hidden" style={{ backgroundColor: (selected as any).fillColor }}>
                                                    <input type="color" value={(selected as any).fillColor} onChange={e => updateEl(selectedId, { fillColor: e.target.value })} className="absolute inset-0 opacity-0 cursor-pointer w-full" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* --- OVERLAYS --- */}
            {isProcessing && (
                <div className="fixed inset-0 z-[1000000] flex items-center justify-center bg-neutral-900/60 backdrop-blur-xl">
                    <div className="bg-white rounded-[3rem] shadow-2xl p-12 w-[400px] border border-white/20 animate-in fade-in zoom-in duration-500">
                        <ProcessingProgress status="processing" progress={progress} message={progressMsg} />
                    </div>
                </div>
            )}

            {result && (
                <div className="fixed inset-0 z-[1000000] flex items-center justify-center bg-black/70 backdrop-blur-2xl p-4">
                    <div className="bg-white rounded-[3.5rem] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] p-12 max-w-sm w-full text-center border border-neutral-100 animate-in slide-in-from-bottom duration-700">
                        <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-8 shadow-inner">
                            <Check className="w-12 h-12 text-green-500" />
                        </div>
                        <h3 className="text-3xl font-black mb-4 tracking-tighter">İşlem Tamam!</h3>
                        <p className="text-neutral-500 mb-10 font-bold leading-relaxed">PDF belgeniz başarıyla hazırlandı.</p>
                        <div className="space-y-4">
                            <DownloadButton file={result} filename={`Ready_${file.name}`} className="w-full h-16 rounded-[2rem] text-xl font-black shadow-2xl shadow-blue-500/40" />
                            <button onClick={() => setResult(null)} className="w-full py-4 text-neutral-400 font-black hover:text-black transition-colors">Düzenlemeye Geri Dön</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdvancedPDFEditor;
