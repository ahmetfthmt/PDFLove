import { create } from 'zustand';
import { UploadedFile } from '@/types/pdf';

interface FileStore {
    // For multi-file tools (merge, organize, etc.)
    files: UploadedFile[];
    setFiles: (files: UploadedFile[]) => void;
    addFiles: (newFiles: UploadedFile[]) => void;
    removeFile: (id: string) => void;
    clearFiles: () => void;

    // For single-file tools (split, compress, etc.)
    primaryFile: File | null;
    setPrimaryFile: (file: File | null) => void;
}

export const useFileStore = create<FileStore>((set) => ({
    files: [],
    setFiles: (files) => set({ files }),
    addFiles: (newFiles) => set((state) => ({ files: [...state.files, ...newFiles] })),
    removeFile: (id) => set((state) => ({ files: state.files.filter((f) => f.id !== id) })),
    clearFiles: () => set({ files: [] }),

    primaryFile: null,
    setPrimaryFile: (file) => set({ primaryFile: file }),
}));
