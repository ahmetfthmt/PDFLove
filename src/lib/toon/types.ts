/**
 * TOON (Token-Oriented Object Notation) Type Definitions
 * 
 * Implements the TOON v3.0 format specification with Strict Mode compliance
 * Reference: https://github.com/toon-format/spec
 */

export interface ToonOptions {
  /** Delimiter character (default: ',') */
  delimiter?: string;
  /** Enable strict mode (default: true) */
  strictMode?: boolean;
  /** Custom key separator (default: ':') */
  keySeparator?: string;
  /** Indent size for pretty printing (default: 2) */
  indent?: number;
}

export interface ToonEncodeResult {
  /** Encoded TOON string */
  output: string;
  /** Byte length of the output */
  byteLength: number;
  /** Estimated token count */
  tokenCount: number;
}

export interface ToonDecodeResult<T> {
  /** Decoded data */
  data: T;
  /** Token count in the input */
  tokenCount: number;
  /** Byte length of the input */
  byteLength: number;
}

export interface ToonSchema {
  /** Field names extracted from the first object */
  keys: string[];
  /** Types of each field (from typeof operator) */
  types: (string | null)[];
}

/**
 * Result of comparing JSON vs TOON encoding
 */
export interface ToonComparisonResult {
  /** JSON string representation */
  jsonString: string;
  /** TOON encoded result */
  toonResult: ToonEncodeResult;
  /** Byte size of JSON */
  jsonBytes: number;
  /** Byte size of TOON */
  toonBytes: number;
  /** Token count in JSON */
  jsonTokens: number;
  /** Token count in TOON */
  toonTokens: number;
  /** Bytes saved by using TOON */
  byteSavings: number;
  /** Tokens saved by using TOON */
  tokenSavings: number;
  /** Percentage of bytes saved */
  byteSavingsPercent: number;
  /** Percentage of tokens saved */
  tokenSavingsPercent: number;
}

/**
 * Token types in TOON format (for lexer/tokenizer)
 */
export enum ToonTokenType {
  OBJECT_START = 'OBJECT_START',
  OBJECT_END = 'OBJECT_END',
  ARRAY_START = 'ARRAY_START',
  ARRAY_END = 'ARRAY_END',
  KEY = 'KEY',
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  BOOLEAN = 'BOOLEAN',
  NULL = 'NULL',
  DELIMITER = 'DELIMITER',
  REFERENCE = 'REFERENCE',
  EOF = 'EOF',
}

export interface ToonToken {
  type: ToonTokenType;
  value: string | number | boolean | null;
  line: number;
  column: number;
}

/**
 * Storage adapter interface for TOON persistence
 */
export interface ToonStorageAdapter {
  /** Store data in TOON format */
  setItem<T extends Record<string, unknown>>(key: string, data: T[]): void;
  /** Retrieve and decode TOON data */
  getItem<T extends Record<string, unknown>>(key: string): T[] | null;
  /** Remove stored data */
  removeItem(key: string): void;
  /** Get storage statistics */
  getStats(): { usedBytes: number; itemCount: number };
}

/**
 * Configuration for TOON storage
 */
export interface ToonStorageConfig {
  /** Storage key prefix */
  prefix?: string;
  /** Maximum items to store */
  maxItems?: number;
  /** Enable compression for large datasets */
  compress?: boolean;
  /** Storage backend ('localStorage' | 'sessionStorage' | 'indexedDB') */
  backend?: 'localStorage' | 'sessionStorage' | 'indexedDB';
}