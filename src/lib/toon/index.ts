/**
 * TOON (Token-Oriented Object Notation) Module
 * 
 * A compact serialization format for uniform object arrays
 * that eliminates redundant key names, reducing size and token count.
 * 
 * Implements TOON v3.0 specification with Strict Mode compliance
 * Reference: https://github.com/toon-format/spec
 * 
 * @example
 * ```typescript
 * import { encode, decode, compareFormats } from '@/lib/toon';
 * 
 * // Encode array of objects to TOON
 * const data = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];
 * const result = encode(data);
 * console.log(result.output);
 * // Output:
 * // [2]{id,name}:
 * //   1,Alice
 * //   2,Bob
 * 
 * // Decode back to JSON
 * const decoded = decode(result.output);
 * 
 * // Compare JSON vs TOON
 * const comparison = compareFormats(data);
 * console.log(`Saved ${comparison.byteSavingsPercent}% bytes`);
 * ```
 */

// Types
export * from './types';

// Encoder
export {
  encode,
  encodeArray,
  encodeObject,
  encodeWithKey,
  extractSchema,
  calculateSavings,
} from './encoder';

// Decoder
export {
  decode,
  decodeArray,
  decodeObject,
  isValidToon,
  validate,
  ToonParseError,
} from './decoder';

// Re-import types for local use
import type { ToonEncodeResult, ToonComparisonResult } from './types';
import { encode, encodeArray } from './encoder';
import { decode, validate } from './decoder';

/**
 * Compare JSON vs TOON encoding for a dataset
 * Returns detailed comparison metrics
 */
export function compareFormats<T extends Record<string, unknown>>(
  data: T[],
  key?: string
): ToonComparisonResult {
  const jsonString = JSON.stringify(data);
  const toonResult = key ? encodeArray(data, key) : encodeArray(data);

  const jsonBytes = new TextEncoder().encode(jsonString).length;
  const toonBytes = toonResult.byteLength;

  // Token counts
  const jsonTokens = estimateJsonTokens(jsonString);
  const toonTokens = toonResult.tokenCount;

  const byteSavings = jsonBytes - toonBytes;
  const tokenSavings = jsonTokens - toonTokens;
  const byteSavingsPercent = jsonBytes > 0 ? (byteSavings / jsonBytes) * 100 : 0;
  const tokenSavingsPercent = jsonTokens > 0 ? (tokenSavings / jsonTokens) * 100 : 0;

  return {
    jsonString,
    toonResult,
    jsonBytes,
    toonBytes,
    jsonTokens,
    toonTokens,
    byteSavings,
    tokenSavings,
    byteSavingsPercent,
    tokenSavingsPercent,
  };
}

/**
 * Estimate token count for JSON string
 */
function estimateJsonTokens(jsonString: string): number {
  let count = 0;
  let inString = false;
  let currentToken = '';
  let i = 0;

  while (i < jsonString.length) {
    const char = jsonString[i];
    const prevChar = i > 0 ? jsonString[i - 1] : '';

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
    } else if (char === ':' || char === ',') {
      if (currentToken.trim()) {
        count++;
        currentToken = '';
      }
      count++;
    } else if (!/\s/.test(char)) {
      currentToken += char;
    }

    i++;
  }

  if (currentToken.trim()) count++;

  return count;
}

/**
 * Create a mock dataset for testing TOON format
 */
export function createMockDataset(options?: {
  count?: number;
  fields?: string[];
  seed?: number;
}): Record<string, unknown>[] {
  const count = options?.count ?? 10;
  const fields = options?.fields ?? ['id', 'name', 'status', 'score', 'active'];
  const seed = options?.seed ?? Date.now();

  // Simple seeded random for reproducibility
  const random = (max: number) => {
    const x = Math.sin(seed + count) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  };

  const names = [
    'Alice', 'Bob', 'Charlie', 'Diana', 'Eve',
    'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
    'Kate', 'Leo', 'Mia', 'Noah', 'Olivia'
  ];

  const statuses = ['pending', 'active', 'completed', 'archived'];

  const data: Record<string, unknown>[] = [];

  for (let i = 0; i < count; i++) {
    const item: Record<string, unknown> = {};
    
    for (const field of fields) {
      switch (field) {
        case 'id':
          item[field] = i + 1;
          break;
        case 'name':
          item[field] = names[random(names.length)];
          break;
        case 'status':
          item[field] = statuses[random(statuses.length)];
          break;
        case 'score':
          item[field] = Math.round((random(100) / 100) * 1000) / 10;
          break;
        case 'active':
          item[field] = random(2) === 1;
          break;
        case 'createdAt':
          item[field] = new Date(2025, random(12), random(28) + 1).toISOString().split('T')[0];
          break;
        case 'count':
          item[field] = random(1000);
          break;
        default:
          item[field] = `value_${random(100)}`;
      }
    }

    data.push(item);
  }

  return data;
}

/**
 * Validate TOON round-trip integrity
 * Encodes data, decodes it, and compares with original
 */
export function validateRoundTrip<T extends Record<string, unknown>>(
  data: T[]
): {
  success: boolean;
  original: T[];
  decoded: T[];
  errors: string[];
} {
  const errors: string[] = [];

  try {
    const encoded = encodeArray(data);
    const decodedResult = decode<T>(encoded.output);
    const decoded = Array.isArray(decodedResult.data) ? decodedResult.data as T[] : [];

    // Compare lengths
    if (data.length !== decoded.length) {
      errors.push(`Length mismatch: ${data.length} vs ${decoded.length}`);
    }

    // Compare contents
    for (let i = 0; i < Math.min(data.length, decoded.length); i++) {
      const originalItem = data[i];
      const decodedItem = decoded[i] as Record<string, unknown>;

      const originalKeys = Object.keys(originalItem);
      const decodedKeys = Object.keys(decodedItem);

      if (originalKeys.length !== decodedKeys.length) {
        errors.push(`Item ${i}: key count mismatch`);
      }

      for (const key of originalKeys) {
        if (originalItem[key] !== decodedItem[key]) {
          errors.push(`Item ${i}.${key}: ${originalItem[key]} !== ${decodedItem[key]}`);
        }
      }
    }

    return {
      success: errors.length === 0,
      original: data,
      decoded,
      errors,
    };
  } catch (e) {
    errors.push(e instanceof Error ? e.message : String(e));
    return {
      success: false,
      original: data,
      decoded: [],
      errors,
    };
  }
}
