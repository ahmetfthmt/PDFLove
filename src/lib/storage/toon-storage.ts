/**
 * TOON Storage Adapter
 * 
 * Provides localStorage persistence using TOON format for compact storage.
 * Particularly efficient for arrays of uniform objects like:
 * - Recent files list
 * - User preferences history
 * - Operation logs
 * - Cache entries
 */

import type { ToonStorageAdapter, ToonStorageConfig } from '@/lib/toon/types';
import { encodeArray, decode } from '@/lib/toon';

/**
 * Default storage configuration
 */
const DEFAULT_CONFIG: Required<ToonStorageConfig> = {
  prefix: 'toon_',
  maxItems: 1000,
  compress: false,
  backend: 'localStorage',
};

/**
 * Create a TOON storage adapter for localStorage
 */
export function createToonStorage(
  config?: ToonStorageConfig
): ToonStorageAdapter {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const prefix = cfg.prefix;

  const getStorage = (): Storage | null => {
    if (typeof window === 'undefined') return null;
    
    switch (cfg.backend) {
      case 'localStorage':
        return window.localStorage;
      case 'sessionStorage':
        return window.sessionStorage;
      default:
        return window.localStorage;
    }
  };

  return {
    setItem<T extends Record<string, unknown>>(key: string, data: T[]): void {
      const storage = getStorage();
      if (!storage) return;

      const fullKey = `${prefix}${key}`;
      const limitedData = data.slice(0, cfg.maxItems);
      
      const result = encodeArray(limitedData, key);
      storage.setItem(fullKey, result.output);
    },

    getItem<T extends Record<string, unknown>>(key: string): T[] | null {
      const storage = getStorage();
      if (!storage) return null;

      const fullKey = `${prefix}${key}`;
      const stored = storage.getItem(fullKey);
      
      if (!stored) return null;

      try {
        const { data } = decode<T>(stored);
        return Array.isArray(data) ? data : null;
      } catch {
        // If TOON parsing fails, try JSON fallback
        try {
          const parsed = JSON.parse(stored);
          return Array.isArray(parsed) ? parsed : null;
        } catch {
          return null;
        }
      }
    },

    removeItem(key: string): void {
      const storage = getStorage();
      if (!storage) return;

      const fullKey = `${prefix}${key}`;
      storage.removeItem(fullKey);
    },

    getStats(): { usedBytes: number; itemCount: number } {
      const storage = getStorage();
      if (!storage) return { usedBytes: 0, itemCount: 0 };

      let usedBytes = 0;
      let itemCount = 0;

      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        if (key?.startsWith(prefix)) {
          const value = storage.getItem(key);
          if (value) {
            usedBytes += new TextEncoder().encode(value).length;
            itemCount++;
          }
        }
      }

      return { usedBytes, itemCount };
    },
  };
}

/**
 * Pre-configured TOON storage instance
 */
export const toonStorage = createToonStorage({ prefix: 'pdfcraft_toon_' });

/**
 * Extended TOON storage with additional utilities
 */
export interface ExtendedToonStorage extends ToonStorageAdapter {
  /** Get all keys in storage */
  getKeys: () => string[];
  /** Clear all TOON storage */
  clear: () => void;
  /** Get storage size info */
  getSizeInfo: () => {
    usedBytes: number;
    itemCount: number;
    percentUsed: number;
  };
  /** Migrate from JSON to TOON format */
  migrateFromJson: (jsonKey: string, toonKey: string) => boolean;
}

/**
 * Create an extended TOON storage adapter
 */
export function createExtendedToonStorage(
  config?: ToonStorageConfig
): ExtendedToonStorage {
  const baseStorage = createToonStorage(config);
  const cfg = { ...DEFAULT_CONFIG, ...config };

  const getStorage = (): Storage | null => {
    if (typeof window === 'undefined') return null;
    return cfg.backend === 'sessionStorage' 
      ? window.sessionStorage 
      : window.localStorage;
  };

  return {
    ...baseStorage,

    getKeys(): string[] {
      const storage = getStorage();
      if (!storage) return [];

      const keys: string[] = [];
      for (let i = 0; i < storage.length; i++) {
        const key = storage.key(i);
        if (key?.startsWith(cfg.prefix)) {
          keys.push(key.slice(cfg.prefix.length));
        }
      }
      return keys;
    },

    clear(): void {
      const storage = getStorage();
      if (!storage) return;

      const keys = this.getKeys();
      for (const key of keys) {
        this.removeItem(key);
      }
    },

    getSizeInfo() {
      const stats = this.getStats();
      
      // localStorage typically has 5-10MB limit
      const estimatedLimit = 5 * 1024 * 1024; // 5MB
      const percentUsed = (stats.usedBytes / estimatedLimit) * 100;

      return {
        ...stats,
        percentUsed: Math.min(percentUsed, 100),
      };
    },

    migrateFromJson(jsonKey: string, toonKey: string): boolean {
      const storage = getStorage();
      if (!storage) return false;

      try {
        const jsonValue = storage.getItem(jsonKey);
        if (!jsonValue) return false;

        const data = JSON.parse(jsonValue);
        if (!Array.isArray(data)) return false;

        this.setItem(toonKey, data);
        return true;
      } catch {
        return false;
      }
    },
  };
}

/**
 * Pre-configured extended TOON storage instance
 */
export const extendedToonStorage = createExtendedToonStorage({ 
  prefix: 'pdfcraft_toon_' 
});