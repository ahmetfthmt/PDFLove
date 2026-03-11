/**
 * TOON Format Tests
 * 
 * Comprehensive tests for TOON encoder/decoder with spec compliance
 */

import { describe, it, expect } from 'vitest';
import {
  encode,
  encodeArray,
  decode,
  decodeArray,
  compareFormats,
  createMockDataset,
  validateRoundTrip,
  isValidToon,
  validate,
  ToonParseError,
} from '@/lib/toon';

describe('TOON Encoder', () => {
  describe('encodeArray', () => {
    it('should encode empty array', () => {
      const result = encodeArray([]);
      expect(result.output).toBe('[0]:');
      expect(result.byteLength).toBe(4);
    });

    it('should encode array with key', () => {
      const result = encodeArray([{ id: 1 }], 'users');
      expect(result.output).toContain('users[1]');
      expect(result.output).toContain('id');
    });

    it('should encode uniform primitive array to tabular format', () => {
      const data = [
        { id: 1, name: 'Alice', active: true },
        { id: 2, name: 'Bob', active: false },
      ];
      
      const result = encodeArray(data);
      
      // Should contain header with length and field names
      expect(result.output).toMatch(/^\[2\]\{id,name,active\}:$/m);
      
      // Should contain data rows
      expect(result.output).toContain('1,Alice,true');
      expect(result.output).toContain('2,Bob,false');
    });

    it('should handle null values', () => {
      const data = [
        { id: 1, name: null },
        { id: 2, name: 'Bob' },
      ];
      
      const result = encodeArray(data);
      expect(result.output).toContain('1,null');
    });

    it('should handle numeric values correctly', () => {
      const data = [
        { id: 1, score: 95.5, count: 0 },
      ];
      
      const result = encodeArray(data);
      expect(result.output).toContain('1,95.5,0');
    });

    it('should quote strings that need quoting', () => {
      const data = [
        { id: 1, url: 'https://example.com?a=1&b=2' },
      ];
      
      const result = encodeArray(data);
      expect(result.output).toContain('"https://example.com?a=1&b=2"');
    });

    it('should quote strings starting with hyphen', () => {
      const data = [
        { id: 1, value: '-negative' },
      ];
      
      const result = encodeArray(data);
      expect(result.output).toContain('"-negative"');
    });

    it('should handle boolean values', () => {
      const data = [
        { id: 1, active: true, enabled: false },
      ];
      
      const result = encodeArray(data);
      expect(result.output).toContain('true');
      expect(result.output).toContain('false');
    });
  });

  describe('encode (smart encoder)', () => {
    it('should encode arrays', () => {
      const result = encode([{ id: 1 }]);
      expect(result.output).toContain('[1]');
    });

    it('should encode primitives', () => {
      expect(encode('hello').output).toBe('hello');
      expect(encode(42).output).toBe('42');
      expect(encode(true).output).toBe('true');
      expect(encode(null).output).toBe('null');
    });
  });
});

describe('TOON Decoder', () => {
  describe('decodeArray', () => {
    it('should decode empty array', () => {
      const result = decodeArray('[0]:');
      expect(result.data).toEqual([]);
    });

    it('should decode tabular array', () => {
      const input = `[2]{id,name,active}:
  1,Alice,true
  2,Bob,false`;
      
      const result = decodeArray(input);
      
      expect(result.data).toHaveLength(2);
      expect(result.data[0]).toEqual({
        id: 1,
        name: 'Alice',
        active: true,
      });
      expect(result.data[1]).toEqual({
        id: 2,
        name: 'Bob',
        active: false,
      });
    });

    it('should decode with string key', () => {
      const input = `users[1]{id,name}:
  1,Alice`;
      
      const result = decodeArray(input);
      expect(result.data).toHaveLength(1);
      expect(result.data[0]).toEqual({ id: 1, name: 'Alice' });
    });

    it('should handle null values', () => {
      const input = `[1]{id,value}:
  1,null`;
      
      const result = decodeArray(input);
      expect(result.data[0].value).toBeNull();
    });

    it('should handle quoted strings', () => {
      const input = `[1]{id,url}:
  1,"https://example.com?a=1:b=2"`;
      
      const result = decodeArray(input);
      expect(result.data[0].url).toBe('https://example.com?a=1:b=2');
    });

    it('should throw on row count mismatch in strict mode', () => {
      const input = `[3]{id}:
  1
  2`;
      
      expect(() => decodeArray(input, { strictMode: true })).toThrow(ToonParseError);
    });

    it('should throw on field count mismatch in strict mode', () => {
      const input = `[1]{id,name}:
  1`;
      
      expect(() => decodeArray(input, { strictMode: true })).toThrow(ToonParseError);
    });
  });

  describe('decode (smart decoder)', () => {
    it('should auto-detect array format', () => {
      const input = `[2]{id}:
  1
  2`;
      
      const result = decode(input);
      expect(Array.isArray(result.data)).toBe(true);
    });

    it('should decode primitive', () => {
      expect(decode('hello').data).toBe('hello');
      expect(decode('42').data).toBe(42);
      expect(decode('true').data).toBe(true);
    });
  });
});

describe('Round-Trip Validation', () => {
  it('should round-trip simple data', () => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    
    const result = validateRoundTrip(data);
    expect(result.success).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should round-trip with various types', () => {
    const data = [
      { id: 1, name: 'Test', score: 95.5, active: true, extra: null },
    ];
    
    const result = validateRoundTrip(data);
    expect(result.success).toBe(true);
  });

  it('should round-trip mock dataset', () => {
    const data = createMockDataset({ count: 20, seed: 42 });
    const result = validateRoundTrip(data);
    expect(result.success).toBe(true);
  });
});

describe('Format Comparison', () => {
  it('should show savings for uniform data', () => {
    const data = createMockDataset({ count: 50, seed: 123 });
    const comparison = compareFormats(data);
    
    // TOON should be smaller for uniform data
    expect(comparison.toonBytes).toBeLessThan(comparison.jsonBytes);
    expect(comparison.byteSavings).toBeGreaterThan(0);
    expect(comparison.byteSavingsPercent).toBeGreaterThan(0);
  });

  it('should calculate token savings', () => {
    const data = [
      { id: 1, name: 'Alice', role: 'admin', active: true },
      { id: 2, name: 'Bob', role: 'user', active: false },
      { id: 3, name: 'Charlie', role: 'user', active: true },
    ];
    
    const comparison = compareFormats(data);
    
    expect(comparison.jsonTokens).toBeGreaterThan(0);
    expect(comparison.toonTokens).toBeGreaterThan(0);
    expect(comparison.tokenSavings).toBeGreaterThan(0);
  });

  it('should provide accurate byte counts', () => {
    const data = [{ id: 1, name: 'Test' }];
    const comparison = compareFormats(data);
    
    // Verify byte counts match actual encoding
    expect(comparison.jsonBytes).toBe(
      new TextEncoder().encode(JSON.stringify(data)).length
    );
    expect(comparison.toonBytes).toBe(
      new TextEncoder().encode(comparison.toonResult.output).length
    );
  });
});

describe('Validation', () => {
  it('should validate correct TOON', () => {
    const input = `[2]{id,name}:
  1,Alice
  2,Bob`;
    
    expect(isValidToon(input)).toBe(true);
    
    const result = validate(input);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it('should detect invalid TOON', () => {
    // Missing closing brace and colon - this is still valid as a primitive string
    // The decoder treats it as an unquoted string
    
    // Mismatched row count in strict mode should fail
    const result = validate(`[3]{id}:
  1
  2`);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe('Mock Dataset Generator', () => {
  it('should generate specified number of items', () => {
    const data = createMockDataset({ count: 25 });
    expect(data).toHaveLength(25);
  });

  it('should generate with specified fields', () => {
    const data = createMockDataset({ 
      count: 5, 
      fields: ['id', 'custom'] 
    });
    
    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('custom');
    expect(Object.keys(data[0])).toHaveLength(2);
  });

  it('should be reproducible with same seed', () => {
    const data1 = createMockDataset({ count: 10, seed: 42 });
    const data2 = createMockDataset({ count: 10, seed: 42 });
    
    expect(data1).toEqual(data2);
  });
});

describe('Performance Benchmarks', () => {
  it('should handle large datasets efficiently', () => {
    const data = createMockDataset({ count: 1000 });
    
    const startEncode = performance.now();
    const encoded = encodeArray(data);
    const encodeTime = performance.now() - startEncode;
    
    const startDecode = performance.now();
    const decoded = decodeArray(encoded.output);
    const decodeTime = performance.now() - startDecode;
    
    // Should complete within reasonable time
    expect(encodeTime).toBeLessThan(100); // 100ms
    expect(decodeTime).toBeLessThan(50); // 50ms
    
    // Data should match
    expect(decoded.data.length).toBe(data.length);
  });

  it('should show significant savings for large datasets', () => {
    const data = createMockDataset({ count: 100 });
    const comparison = compareFormats(data);
    
    // Should save at least 30% for uniform tabular data
    expect(comparison.byteSavingsPercent).toBeGreaterThan(30);
    
    console.log('\n📊 TOON vs JSON Comparison (100 items):');
    console.log(`  JSON: ${comparison.jsonBytes} bytes, ${comparison.jsonTokens} tokens`);
    console.log(`  TOON: ${comparison.toonBytes} bytes, ${comparison.toonTokens} tokens`);
    console.log(`  Savings: ${comparison.byteSavingsPercent.toFixed(1)}% bytes, ${comparison.tokenSavingsPercent.toFixed(1)}% tokens`);
  });
});