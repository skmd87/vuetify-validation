import { describe, it, expect } from 'vitest';
import toNumber from './toNumber';

describe('toNumber modifier', () => {
  it('should return the same number if the input is already a number', () => {
    const value = 42;
    const result = toNumber(value);
    expect(result).toBe(value);
  });

  it('should convert a valid string representation of a number to a number', () => {
    const value = '42';
    const result = toNumber(value);
    expect(result).toBe(42);
  });

  it('should return false if the input string is not a valid number', () => {
    const value = 'abc';
    const result = toNumber(value);
    expect(result).toBe(value);
  });

  it('should return the input value if it is neither a number nor a string', () => {
    const value = { name: 'John' };
    const result = toNumber(value);
    expect(result).toBe(value);
  });
});