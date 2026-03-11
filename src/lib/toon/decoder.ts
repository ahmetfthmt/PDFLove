/**
 * TOON Decoder - TOON to JSON conversion
 * 
 * Implements the TOON v3.0 format parser with Strict Mode compliance
 * Reference: https://github.com/toon-format/spec
 */

import type { ToonOptions, ToonDecodeResult } from './types';

/**
 * Default options for TOON decoding
 */
const DEFAULT_OPTIONS: Required<ToonOptions> = {
  delimiter: ',',
  strictMode: true,
  keySeparator: ':',
  indent: 2,
};

/**
 * TOON Parse Error for strict mode violations
 */
export class ToonParseError extends Error {
  constructor(
    message: string,
    public line?: number,
    public column?: number
  ) {
    super(message);
    this.name = 'ToonParseError';
  }
}

/**
 * Unescape a TOON string per spec §7.1
 * Only \\, \", \n, \r, \t are valid escapes
 */
function unescapeString(str: string): string {
  let result = '';
  let i = 0;

  while (i < str.length) {
    const char = str[i];

    if (char === '\\' && i + 1 < str.length) {
      const nextChar = str[i + 1];
      switch (nextChar) {
        case '\\':
          result += '\\';
          break;
        case '"':
          result += '"';
          break;
        case 'n':
          result += '\n';
          break;
        case 'r':
          result += '\r';
          break;
        case 't':
          result += '\t';
          break;
        default:
          // Invalid escape - in strict mode, this should error
          // For now, keep the backslash and char
          result += char + nextChar;
      }
      i += 2;
    } else {
      result += char;
      i++;
    }
  }

  return result;
}

/**
 * Parse a primitive value per spec §4
 */
function parsePrimitive(token: string, strictMode: boolean): string | number | boolean | null {
  const trimmed = token.trim();

  if (trimmed === 'null') return null;
  if (trimmed === 'true') return true;
  if (trimmed === 'false') return false;

  // Quoted string
  if (trimmed.startsWith('"') && trimmed.endsWith('"') && trimmed.length >= 2) {
    return unescapeString(trimmed.slice(1, -1));
  }

  // Number detection per §4
  // Must accept decimal and exponent forms
  // Must treat forbidden leading zeros as strings
  if (/^-?\d+(\.\d+)?(e[+-]?\d+)?$/i.test(trimmed)) {
    // Check for forbidden leading zeros (e.g., "05", "0001", "-05")
    // Exception: "0", "0.5", "0e1" are valid
    const intPart = trimmed.replace(/^-/, '').split(/[.eE]/)[0];
    if (intPart.length > 1 && intPart.startsWith('0')) {
      // Forbidden leading zero - treat as string
      return trimmed;
    }

    const num = Number(trimmed);
    if (Number.isFinite(num)) {
      return num;
    }
  }

  // Unquoted string
  return unescapeString(trimmed);
}

/**
 * Detect delimiter from header bracket
 * Per §6: HTAB = tab, "|" = pipe, absent = comma
 */
function detectDelimiter(bracketContent: string): string {
  if (bracketContent.endsWith('\t')) return '\t';
  if (bracketContent.endsWith('|')) return '|';
  return ',';
}

/**
 * Parse a TOON tabular array header
 * Format: key[N<delim?>]{f1<delim>f2}:
 * or: [N<delim?>]{f1<delim>f2}: (root array)
 */
function parseHeader(
  line: string
): {
  key: string | null;
  length: number;
  delimiter: string;
  fields: string[];
} | null {
  // Match header pattern
  const match = line.match(/^(?:(\w+)\s*)?\[(\d+)([\t|])?\](?:\{([^}]*)\})?:$/);

  if (!match) return null;

  const [, key, lengthStr, delimSymbol, fieldsStr] = match;
  const length = parseInt(lengthStr, 10);
  const delimiter = delimSymbol || ',';

  let fields: string[] = [];
  if (fieldsStr) {
    fields = splitByDelimiter(fieldsStr, delimiter).map(f => {
      const trimmed = f.trim();
      // Unquote field names if needed
      if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
        return unescapeString(trimmed.slice(1, -1));
      }
      return trimmed;
    });
  }

  return { key: key || null, length, delimiter, fields };
}

/**
 * Split by delimiter, respecting quotes and escapes
 */
function splitByDelimiter(input: string, delimiter: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuote = false;
  let escapeNext = false;

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (escapeNext) {
      current += char;
      escapeNext = false;
      continue;
    }

    if (char === '\\') {
      current += char;
      escapeNext = true;
      continue;
    }

    if (char === '"') {
      current += char;
      inQuote = !inQuote;
      continue;
    }

    if (!inQuote && char === delimiter) {
      result.push(current);
      current = '';
      continue;
    }

    current += char;
  }

  if (current || result.length > 0) {
    result.push(current);
  }

  return result;
}

/**
 * Decode a TOON tabular array to an array of objects
 * Per spec §9.3
 */
export function decodeArray<T = Record<string, unknown>>(
  input: string,
  options?: ToonOptions
): ToonDecodeResult<T[]> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const lines = input.split('\n').map(l => l.trimEnd()).filter(l => l.trim() !== '');

  if (lines.length === 0) {
    return { data: [], tokenCount: 0, byteLength: 0 };
  }

  // Parse header
  const header = parseHeader(lines[0]);

  if (!header) {
    // Try legacy format (key1:key2:... followed by rows)
    if (lines.length >= 2 && lines[0].includes(':')) {
      return decodeLegacyFormat(input, opts) as ToonDecodeResult<T[]>;
    }

    if (opts.strictMode) {
      throw new ToonParseError('Invalid TOON header format', 1);
    }
    return { data: [], tokenCount: 0, byteLength: 0 };
  }

  const { length, delimiter, fields } = header;
  const result: Record<string, unknown>[] = [];

  // Validate row count in strict mode
  const expectedRows = length;
  const actualRows = lines.length - 1; // Exclude header

  if (opts.strictMode && actualRows !== expectedRows) {
    throw new ToonParseError(
      `Row count mismatch: expected ${expectedRows}, got ${actualRows}`,
      1
    );
  }

  // Parse rows
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    // Remove leading indentation
    const rowLine = line.trimStart();
    const values = splitByDelimiter(rowLine, delimiter);

    // Validate field count in strict mode
    if (opts.strictMode && values.length !== fields.length) {
      throw new ToonParseError(
        `Field count mismatch in row ${i}: expected ${fields.length}, got ${values.length}`,
        i + 1
      );
    }

    const obj: Record<string, unknown> = {};
    fields.forEach((field, index) => {
      if (index < values.length) {
        obj[field] = parsePrimitive(values[index], opts.strictMode);
      }
    });

    result.push(obj);
  }

  const byteLength = new TextEncoder().encode(input).length;
  const tokenCount = countTokens(input);

  return { data: result as T[], tokenCount, byteLength };
}

/**
 * Decode legacy TOON format (key1:key2:... header)
 */
function decodeLegacyFormat<T>(
  input: string,
  opts: Required<ToonOptions>
): ToonDecodeResult<T[]> {
  const lines = input.split('\n').filter(line => line.trim());

  if (lines.length < 2) {
    return { data: [], tokenCount: 0, byteLength: 0 };
  }

  // First line is the header (keys separated by keySeparator)
  const keys = lines[0].split(opts.keySeparator).map(k => k.trim());
  const result: Record<string, unknown>[] = [];

  // Remaining lines are data
  for (let i = 1; i < lines.length; i++) {
    const values = splitByDelimiter(lines[i], opts.delimiter);
    const obj: Record<string, unknown> = {};

    keys.forEach((key, index) => {
      if (index < values.length) {
        obj[key] = parsePrimitive(values[index], opts.strictMode);
      }
    });

    result.push(obj);
  }

  const byteLength = new TextEncoder().encode(input).length;
  const tokenCount = countTokens(input);

  return { data: result as T[], tokenCount, byteLength };
}

/**
 * Decode a TOON object (key: value format)
 */
export function decodeObject<T = Record<string, unknown>>(
  input: string,
  options?: ToonOptions
): ToonDecodeResult<T> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const lines = input.split('\n').filter(line => line.trim());

  const result: Record<string, unknown> = {};

  for (const line of lines) {
    // Find key-value separator
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) {
      if (opts.strictMode) {
        throw new ToonParseError('Missing colon in key-value line');
      }
      continue;
    }

    let key = line.slice(0, colonIndex).trim();
    const valueStr = line.slice(colonIndex + 1).trim();

    // Unquote key if needed
    if (key.startsWith('"') && key.endsWith('"')) {
      key = unescapeString(key.slice(1, -1));
    }

    // Check if it's an inline array: key[N]: v1,v2,...
    const arrayMatch = line.match(/^(?:"?(\w+)"?\s*)?\[(\d+)?[\t|]?\]:\s*(.*)$/);
    if (arrayMatch) {
      const [, arrayKey, , valuesStr] = arrayMatch;
      if (arrayKey && valuesStr) {
        const delimiter = line.includes('\t') ? '\t' : line.includes('|') ? '|' : ',';
        const values = splitByDelimiter(valuesStr, delimiter);
        result[arrayKey] = values.map(v => parsePrimitive(v, opts.strictMode));
        continue;
      }
    }

    // Parse primitive value
    result[key] = parsePrimitive(valueStr, opts.strictMode);
  }

  const byteLength = new TextEncoder().encode(input).length;
  const tokenCount = countTokens(input);

  return { data: result as T, tokenCount, byteLength };
}

/**
 * Smart decoder that automatically detects format
 */
export function decode<T>(
  input: string,
  options?: ToonOptions
): ToonDecodeResult<T> {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const trimmedInput = input.trim();

  if (!trimmedInput) {
    return { data: {} as T, tokenCount: 0, byteLength: 0 };
  }

  // Check for tabular array format (has header with brackets)
  if (/^\w*\[\d+[\t|]?\](?:\{[^}]*\})?:/.test(trimmedInput)) {
    return decodeArray(input, options) as ToonDecodeResult<T>;
  }

  // Check for legacy format (first line has keySeparator but no brackets)
  const firstLine = trimmedInput.split('\n')[0];
  if (
    firstLine.includes(':') &&
    !firstLine.includes('[') &&
    !firstLine.includes('{') &&
    !trimmedInput.slice(trimmedInput.indexOf('\n') + 1).includes(':')
  ) {
    return decodeLegacyFormat(input, opts) as ToonDecodeResult<T>;
  }

  // Single primitive
  if (!trimmedInput.includes('\n') && !trimmedInput.includes(':')) {
    const value = parsePrimitive(trimmedInput, opts.strictMode);
    return { data: value as T, tokenCount: countTokens(trimmedInput), byteLength: trimmedInput.length };
  }

  // Object format
  return decodeObject(input, options) as ToonDecodeResult<T>;
}

/**
 * Count tokens in a string
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
      inString = true;
      currentToken = '';
      i++;
      continue;
    }

    if (char === '"' && prevChar !== '\\' && inString) {
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

    if (char === '{' || char === '}' || char === '[' || char === ']') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
      count++;
    } else if (char === ':') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
      count++;
    } else if (char === ',' || char === '\t' || char === '|') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
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
 * Check if a string is valid TOON format
 */
export function isValidToon(input: string): boolean {
  try {
    decode(input);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate a TOON document in strict mode
 */
export function validate(input: string): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  try {
    decode(input, { strictMode: true });
  } catch (e) {
    if (e instanceof ToonParseError) {
      errors.push(e.message);
    } else {
      errors.push(String(e));
    }
  }

  return { valid: errors.length === 0, errors };
}