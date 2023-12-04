import { describe, it, expect } from 'vitest';
import trim from './trim';

describe('trim modifier', () => {
  it('should trim leading and trailing whitespace from a string', () => {
    const value = '  hello  ';
    const result = trim(value);
    expect(result).toBe('hello');
  });

  it('should return the same value if it does not have a trim method', () => {
    const value = 42;
    const result = trim(value);
    expect(result).toBe(42);
  });

  it('should return null if the value is null', () => {
    const value = null;
    const result = trim(value);
    expect(result).toBeNull();
  });

  it('should return undefined if the value is undefined', () => {
    const value = undefined;
    const result = trim(value);
    expect(result).toBeUndefined();
  });
});