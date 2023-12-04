import { describe, it, expect } from 'vitest';
import toString from './toString';

describe('toString modifier', () => {
  it('should return the same string value', () => {
    const value = 'hello';
    const result = toString(value);
    expect(result).toBe(value);
  });

  it('should convert number to string', () => {
    const value = 42;
    const result = toString(value);
    expect(result).toBe('42');
  });

  it('should convert boolean to string', () => {
    const value = true;
    const result = toString(value);
    expect(result).toBe('true');
  });

  it('should convert object to string', () => {
    const value = { name: 'John' };
    const result = toString(value);
    expect(result).toBe('[object Object]');
  });

  it('should convert null to string', () => {
    const value = null;
    const result = toString(value);
    expect(result).toBe('null');
  });

  it('should convert undefined to string', () => {
    const value = undefined;
    const result = toString(value);
    expect(result).toBe('undefined');
  });

  it('should handle error and return original value', () => {
    const value = { toString: null };
    const result = toString(value);
    expect(result).toBe(value);
  });
});