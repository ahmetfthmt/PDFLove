/**
 * PyMuPDF Loader
 * Dynamically loads PyMuPDF WASM module using ES module import
 */

import * as conversion from './operations/conversion';
import * as optimization from './operations/optimization';
import * as security from './operations/security';
import * as ocg from './operations/ocg';

// Singleton instance
let pymupdfInstance: any = null;
let loadingPromise: Promise<any> | null = null;

function resolvePublicAssetPath(assetPath: string): string {
  if (typeof window === 'undefined') return assetPath;

  const normalizedAssetPath = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  const scripts = Array.from(document.querySelectorAll('script[src]')) as HTMLScriptElement[];
  const nextScript = scripts.find((script) => script.src.includes('/_next/'));

  if (!nextScript) return normalizedAssetPath;

  try {
    const scriptUrl = new URL(nextScript.src);
    const nextIndex = scriptUrl.pathname.indexOf('/_next/');
    if (nextIndex <= 0) return normalizedAssetPath;

    const basePath = scriptUrl.pathname.slice(0, nextIndex).replace(/\/$/, '');
    return `${basePath}${normalizedAssetPath}`;
  } catch {
    return normalizedAssetPath;
  }
}

/**
 * Load PyMuPDF using Pyodide directly
 */
export async function loadPyMuPDF(): Promise<any> {
  if (pymupdfInstance) {
    return pymupdfInstance;
  }

  if (loadingPromise) {
    return loadingPromise;
  }

  loadingPromise = (async () => {
    try {
      const basePath = new URL(
        resolvePublicAssetPath('/pymupdf-wasm/'),
        window.location.origin
      ).toString();

      // Dynamically import Pyodide as ES module
      const pyodideModule = await import(/* webpackIgnore: true */ `${basePath}pyodide.js`);
      const loadPyodide = pyodideModule.loadPyodide;

      // Initialize Pyodide
      const pyodide = await loadPyodide({
        indexURL: basePath,
        fullStdLib: false
      });

      // Helper function to load local wheels
      const loadWheel = async (url: string) => {
        await pyodide.loadPackage(url);
      };

      // Mock missing non-critical dependencies
      pyodide.runPython(`
import sys
from types import ModuleType

# Mock tqdm (used for progress bars)
tqdm_mod = ModuleType("tqdm")
def tqdm(iterable=None, *args, **kwargs):
    return iterable if iterable else []
tqdm_mod.tqdm = tqdm
sys.modules["tqdm"] = tqdm_mod

# Mock fire (CLI tool, not needed for library usage)
fire_mod = ModuleType("fire")
sys.modules["fire"] = fire_mod
      `);

      // Install dependencies in order
      await loadWheel(`${basePath}numpy-2.2.5-cp313-cp313-pyodide_2025_0_wasm32.whl`);
      await loadWheel(`${basePath}typing_extensions-4.12.2-py3-none-any.whl`);
      await loadWheel(`${basePath}packaging-24.1-py3-none-any.whl`);
      await loadWheel(`${basePath}fonttools-4.56.0-py3-none-any.whl`);
      await loadWheel(`${basePath}lxml-5.4.0-cp313-cp313-pyodide_2025_0_wasm32.whl`);
      await loadWheel(`${basePath}pymupdf-1.26.3-cp313-none-pyodide_2025_0_wasm32.whl`);

      // Import pymupdf
      await pyodide.runPythonAsync('import pymupdf');

      // Create the wrapper object
      pymupdfInstance = {
        pyodide,
        // Conversion
        pdfToDocx: (file: File) => conversion.pdfToDocx(pyodide, file),
        htmlToPdf: (html: string, options: any) => conversion.htmlToPdf(pyodide, html, options),

        // Optimization
        compress: (file: File, options: any) => optimization.compress(pyodide, file, options),
        photonCompress: (file: File, options: any) => optimization.photonCompress(pyodide, file, options),
        deskewPdf: (file: File, options: any) => optimization.deskewPdf(pyodide, file, options),
        fontToOutline: (file: File, options: any) => optimization.fontToOutline(pyodide, file, options),

        // Security
        pdfToPdfa: (file: File, options: any) => security.pdfToPdfa(pyodide, file, options),

        // OCG (Layers)
        getOCGLayers: (file: File) => ocg.getOCGLayers(pyodide, file),
        toggleOCGLayer: (file: File, options: any) => ocg.toggleOCGLayer(pyodide, file, options),
        addOCGLayer: (file: File, options: any) => ocg.addOCGLayer(pyodide, file, options),
        deleteOCGLayer: (file: File, options: any) => ocg.deleteOCGLayer(pyodide, file, options),
        renameOCGLayer: (file: File, options: any) => ocg.renameOCGLayer(pyodide, file, options),
      };

      return pymupdfInstance;
    } catch (error) {
      loadingPromise = null;
      throw error;
    }
  })();

  return loadingPromise;
}

/**
 * Reset the loader (for testing)
 */
export function resetPyMuPDF(): void {
  pymupdfInstance = null;
  loadingPromise = null;
}
