'use client';

import React, { useState, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { FileUploader } from '../FileUploader';
import { AdvancedPDFEditor } from './AdvancedPDFEditor';

export interface EditPDFToolProps {
  className?: string;
}

/**
 * EditPDFTool Component
 *
 * Wraps AdvancedPDFEditor in a full-screen container once a file is loaded.
 * Shows the file uploader in normal page flow when no file is selected.
 */
export function EditPDFTool({ className = '' }: EditPDFToolProps) {
  const tTools = useTranslations('tools.editPdf');

  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFilesSelected = useCallback((files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setError(null);
    }
  }, []);

  const handleUploadError = useCallback((errorMessage: string) => {
    setError(errorMessage);
  }, []);

  const handleClear = useCallback(() => {
    setFile(null);
    setError(null);
  }, []);

  // ── File loaded → full-screen editor ──
  if (file) {
    return (
      <div className="fixed inset-0 z-[100000] bg-white overflow-hidden">
        <AdvancedPDFEditor file={file} onClear={handleClear} />
      </div>
    );
  }

  // ── No file → normal upload UI ──
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      <FileUploader
        accept={['application/pdf', '.pdf']}
        multiple={false}
        maxFiles={1}
        onFilesSelected={handleFilesSelected}
        onError={handleUploadError}
        label={tTools('uploadLabel')}
        description={tTools('uploadDescription')}
      />
      {error && (
        <div className="p-4 rounded-[var(--radius-md)] bg-red-50 border border-red-200 text-red-700" role="alert">
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}

export default EditPDFTool;
