/**
 * TOON Encoder - JSON to TOON conversion
 * 
 * Implements the TOON v3.0 format specification with Strict Mode compliance
 * Reference: https://github.com/toon-format/spec
 * 
 * TOON advantages over JSON:
 * - No repeated key names in arrays of uniform objects
 * - Compact delimiter-based syntax with explicit length declarations
 * - Reduced token count for repetitive data structures
 * - Built-in validation through length checks
 */

import type { ToonOptions, ToonEncodeResult, ToonSchema } from './types';

/**
 * Default options for TOON encoding
 */
const DEFAULT_OPTIONS: Required<ToonOptions> = {
  delimiter: ',',
  strictMode: true,
  keySeparator: ':',
  indent: 2,
};

/**
 * Check if all objects in array have the same keys and primitive-only values
 * This determines if tabular format can be used
 */
function isUniformPrimitiveArray<T extends Record<string, unknown>>(
  data: T[]
): { isUniform: boolean; keys: string[] } {
  if (!data || data.length === 0) {
    return { isUniform: false, keys: [] };
  }

  const first = data[0];
  if (typeof first !== 'object' || first === null || Array.isArray(first)) {
    return { isUniform: false, keys: [] };
  }

  const keys = Object.keys(first);
  const keySet = new Set(keys);

  // Check all objects have same keys and primitive values only
  for (const item of data) {
    if (typeof item !== 'object' || item === null || Array.isArray(item)) {
      return { isUniform: false, keys: [] };
    }

    const itemKeys = Object.keys(item);
    if (itemKeys.length !== keys.length || !itemKeys.every(k => keySet.has(k))) {
      return { isUniform: false, keys: [] };
    }

    // Check all values are primitives
    for (const value of Object.values(item)) {
      if (
        value !== null &&
        typeof value !== 'string' &&
        typeof value !== 'number' &&
        typeof value !== 'boolean'
      ) {
        return { isUniform: false, keys: [] };
      }
    }
  }

  return { isUniform: true, keys };
}

/**
 * Extract schema from an array of uniform objects
 * Returns the keys and their types from the first object
 */
export function extractSchema<T extends Record<string, unknown>>(
  data: T[]
): ToonSchema | null {
  if (!data || data.length === 0) return null;

  const first = data[0];
  if (typeof first !== 'object' || first === null || Array.isArray(first)) {
    return null;
  }

  const keys = Object.keys(first);
  const types: (string | null)[] = keys.map(key => {
    const value = first[key];
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
  });

  return { keys, types };
}

/**
 * Check if a string needs quoting per TOON spec §7.2
 */
function needsQuoting(value: string, activeDelimiter: string): boolean {
  // Empty string
  if (value === '') return true;

  // Leading or trailing whitespace
  if (value !== value.trim()) return true;

  // Reserved literals
  if (value === 'true' || value === 'false' || value === 'null') return true;

  // Numeric-like
  if (/^-?\d+(\.\d+)?(e[+-]?\d+)?$/i.test(value)) return true;
  if (/^0\d+$/.test(value)) return true; // Leading zeros

  // Contains structural characters
  if (/:|"|\\/.test(value)) return true;
  if (/[\[\]{}]/.test(value)) return true;

  // Control characters
  if (/[\n\r\t]/.test(value)) return true;

  // Contains active delimiter
  if (value.includes(activeDelimiter)) return true;

  // Starts with hyphen
  if (value === '-' || value.startsWith('-')) return true;

  return false;
}

/**
 * Escape special characters in a string per TOON spec §7.1
 */
function escapeString(str: string): string {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t');
}

/**
 * Encode a primitive value to TOON format
 */
function encodePrimitive(value: unknown, activeDelimiter: string): string {
  if (value === null) {
    return 'null';
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  if (typeof value === 'number') {
    // Canonical number form per §2
    // No exponent notation, no leading zeros, no trailing zeros
    if (!Number.isFinite(value)) {
      return 'null'; // NaN, Infinity -> null per §3
    }
    if (Object.is(value, -0)) {
      return '0'; // -0 -> 0 per §2
    }
    if (Number.isInteger(value)) {
      return value.toString();
    }
    // Normalize floating point - remove trailing zeros
    return value.toString().replace(/(\.\d*?)0+$/, '$1').replace(/\.$/, '');
  }

  if (typeof value === 'string') {
    const escaped = escapeString(value);
    if (needsQuoting(value, activeDelimiter)) {
      return `"${escaped}"`;
    }
    return escaped;
  }

  // Fallback for non-primitives (should not happen in tabular context)
  return String(value);
}

/**
 * Check if a key needs quoting per TOON spec §7.3
 */
function keyNeedsQuoting(key: string): boolean {
  // Keys can be unquoted only if they match ^[A-Za-z_][A-Za-z0-9_.]*$
  return !/^[A-Za-z_][A-Za-z0-9_.]*$/.test(key);
}

/**
 * Encode a key (field name) per TOON spec
 */
function encodeKey(key: string): string {
  if (keyNeedsQuoting(key)) {
    return `"${escapeString(key)}"`;
  }
  return key;
}

/**
 * Get delimiter symbol for header
 * Per §6: absent = comma, HTAB = tab, "|" = pipe
 */
function getDelimiterSymbol(delimiter: string): string {
  if (delimiter === '\t') return '\t';
  if (delimiter === '|') return '|';
  return ''; // comma is default, no symbol needed
}

/**
 * Encode an array of uniform objects to TOON tabular format
 * 
 * Format per spec §9.3:
 * key[N<delim?>]{f1<delim>f2}:
 *   value1,value2,...
 *   value1,value2,...
 * 
 * @example
 * ```
 * users[2]{id,name,role}:
 *   1,Alice,admin
 *   2,Bob,user
 * ```
 */
export function encodeArray<T extends Record<string, unknown>>(
  data: T[],
  key?: string,
  options?: ToonOptions
): ToonEncodeResult {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  if (!data || data.length === 0) {
    // Empty array per §9.1: key[0<delim?>]:
    const header = key ? `${key}[0${getDelimiterSymbol(opts.delimiter)}]:` : '[0]:';
    const byteLength = new TextEncoder().encode(header).length;
    const tokenCount = countTokens(header);
    return { output: header, byteLength, tokenCount };
  }

  const { isUniform, keys } = isUniformPrimitiveArray(data);

  if (!isUniform) {
    // Non-uniform arrays would need expanded list format per §9.4
    // For now, fall back to JSON-like encoding
    const output = JSON.stringify(data);
    const byteLength = new TextEncoder().encode(output).length;
    const tokenCount = countTokens(output);
    return { output, byteLength, tokenCount };
  }

  // Build TOON tabular format
  const lines: string[] = [];
  const delimSymbol = getDelimiterSymbol(opts.delimiter);

  // Header: key[N<delim?>]{f1<delim>f2}:
  const encodedKeys = keys.map(k => encodeKey(k)).join(opts.delimiter);
  const keyPrefix = key ? `${key}` : '';
  const header = `${keyPrefix}[${data.length}${delimSymbol}]{${encodedKeys}}:`;
  lines.push(header);

  // Data rows: one per object at depth +1
  const indentStr = ' '.repeat(opts.indent);
  for (const item of data) {
    const values = keys.map(k => encodePrimitive(item[k], opts.delimiter));
    lines.push(indentStr + values.join(opts.delimiter));
  }

  const output = lines.join('\n');
  const byteLength = new TextEncoder().encode(output).length;
  const tokenCount = countTokens(output);

  return { output, byteLength, tokenCount };
}

/**
 * Encode a single object to TOON format
 */
export function encodeObject<T extends Record<string, unknown>>(
  data: T,
  options?: ToonOptions
): ToonEncodeResult {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  if (!data || typeof data !== 'object') {
    return { output: '', byteLength: 0, tokenCount: 0 };
  }

  const entries = Object.entries(data);
  if (entries.length === 0) {
    return { output: '', byteLength: 0, tokenCount: 0 };
  }

  const lines: string[] = [];

  for (const [key, value] of entries) {
    const encodedKey = encodeKey(key);

    if (value === null) {
      lines.push(`${encodedKey}: null`);
    } else if (typeof value === 'boolean' || typeof value === 'number') {
      lines.push(`${encodedKey}: ${encodePrimitive(value, opts.delimiter)}`);
    } else if (typeof value === 'string') {
      const encoded = encodePrimitive(value, opts.delimiter);
      lines.push(`${encodedKey}: ${encoded}`);
    } else if (Array.isArray(value)) {
      // Check if it's a uniform primitive array for inline encoding
      if (value.length > 0 && value.every(v => 
        v === null || typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean'
      )) {
        const arrayValues = value.map(v => encodePrimitive(v, opts.delimiter));
        const delimSymbol = getDelimiterSymbol(opts.delimiter);
        lines.push(`${encodedKey}[${value.length}${delimSymbol}]: ${arrayValues.join(opts.delimiter)}`);
      } else {
        // Complex array - use JSON fallback
        lines.push(`${encodedKey}: ${JSON.stringify(value)}`);
      }
    } else if (typeof value === 'object') {
      // Nested object - would need recursive encoding
      lines.push(`${encodedKey}: ${JSON.stringify(value)}`);
    }
  }

  const output = lines.join('\n');
  const byteLength = new TextEncoder().encode(output).length;
  const tokenCount = countTokens(output);

  return { output, byteLength, tokenCount };
}

/**
 * Smart encoder that automatically chooses the best format
 */
export function encode<T>(
  data: T,
  options?: ToonOptions
): ToonEncodeResult {
  if (Array.isArray(data)) {
    return encodeArray(data as Record<string, unknown>[], undefined, options);
  }
  if (typeof data === 'object' && data !== null) {
    return encodeObject(data as Record<string, unknown>, options);
  }
  // Primitive
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const output = encodePrimitive(data, opts.delimiter);
  const byteLength = new TextEncoder().encode(output).length;
  const tokenCount = countTokens(output);
  return { output, byteLength, tokenCount };
}

/**
 * Count tokens in TOON string
 * Uses a more accurate token estimation based on structure
 */
function countTokens(input: string): number {
  if (!input) return 0;

  let count = 0;
  let inString = false;
  let currentToken = '';
  let i = 0;

  while (i < input.length) {
    const char = input[i];
    const prevChar = i > 0 ? input[i - 1] : '';

    if (char === '"' && prevChar !== '\\' && !inString) {
      // Start of quoted string
      inString = true;
      currentToken = '';
      i++;
      continue;
    }

    if (char === '"' && prevChar !== '\\' && inString) {
      // End of quoted string - count as single token
      count++;
      inString = false;
      currentToken = '';
      i++;
      continue;
    }

    if (inString) {
      currentToken += char;
      i++;
      continue;
    }

    // Not in string
    // Check for structural tokens
    if (char === '{' || char === '}' || char === '[' || char === ']') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
      count++; // The bracket itself
    } else if (char === ':') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
      count++; // The colon
    } else if (char === ',' || char === '\t' || char === '|') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
      // Delimiter doesn't count as separate token
    } else if (char === '\n') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
    } else if (!/\s/.test(char)) {
      currentToken += char;
    }

    i++;
  }

  if (currentToken.trim()) count++;

  return count;
}

/**
 * Calculate savings between JSON and TOON
 */
export function calculateSavings(
  jsonData: string,
  toonResult: ToonEncodeResult
): {
  jsonBytes: number;
  toonBytes: number;
  jsonTokens: number;
  toonTokens: number;
  byteSavings: number;
  tokenSavings: number;
  byteSavingsPercent: number;
  tokenSavingsPercent: number;
} {
  const jsonBytes = new TextEncoder().encode(jsonData).length;
  const jsonTokens = countTokens(jsonData);

  const byteSavings = jsonBytes - toonResult.byteLength;
  const tokenSavings = jsonTokens - toonResult.tokenCount;
  const byteSavingsPercent = jsonBytes > 0 ? (byteSavings / jsonBytes) * 100 : 0;
  const tokenSavingsPercent = jsonTokens > 0 ? (tokenSavings / jsonTokens) * 100 : 0;

  return {
    jsonBytes,
    toonBytes: toonResult.byteLength,
    jsonTokens,
    toonTokens: toonResult.tokenCount,
    byteSavings,
    tokenSavings,
    byteSavingsPercent,
    tokenSavingsPercent,
  };
}

/**
 * Encode data with a key (for storage contexts)
 */
export function encodeWithKey<T extends Record<string, unknown>>(
  key: string,
  data: T[],
  options?: ToonOptions
): ToonEncodeResult {
  return encodeArray(data, key, options);
}