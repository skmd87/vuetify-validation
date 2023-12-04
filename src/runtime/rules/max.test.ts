import { describe, it, expect } from 'vitest';
import max from './max';
import type { FieldValue } from '~/src/types';

describe('max rule', () => {
    it('returns true when value is less than max number', () => {
        const rule = max(10);
        const result = rule(5);
        expect(result).toBe(true);
    });

    it('returns false when value is equal to max number', () => {
        const rule = max(10);
        const result = rule(10);
        expect(result).toBe(false);
    });

    it('returns false when value is greater than max number', () => {
        const rule = max(10);
        const result = rule(15);
        expect(result).toBe(false);
    });

    it('returns false for strings', () => {
        const rule = max(5);
        const result = rule('hello');
        expect(result).toBe(false);
    });

    it('returns false when string length is equal to max length', () => {
        const rule = max(5);
        const result = rule('world');
        expect(result).toBe(false);
    });

    it('returns false when string length is greater than max length', () => {
        const rule = max(5);
        const result = rule('helloworld');
        expect(result).toBe(false);
    });

    it('returns true when array length is less than max length', () => {
        const rule = max(3);
        const result = rule([1, 2]);
        expect(result).toBe(true);
    });

    it('returns false when array length is equal to max length', () => {
        const rule = max(3);
        const result = rule([1, 2, 3]);
        expect(result).toBe(false);
    });

    it('returns false when array length is greater than max length', () => {
        const rule = max(3);
        const result = rule([1, 2, 3, 4]);
        expect(result).toBe(false);
    });

    it('returns true when date is before max date', () => {
        const date = new Date('2022-01-01');
        const rule = max(new Date('2022-01-02'));
        const result = rule(date);
        expect(result).toBe(true);
    });

    it('returns false when date is equal to max date', () => {
        const date = new Date('2022-01-01');
        const rule = max(new Date('2022-01-01'));
        const result = rule(date);
        expect(result).toBe(false);
    });

    it('returns false when date is after max date', () => {
        const date = new Date('2022-01-02');
        const rule = max(new Date('2022-01-01'));
        const result = rule(date);
        expect(result).toBe(false);
    });

    it('returns null when value is null', () => {
        const rule = max(10);
        const result = rule(null);
        expect(result).toBe(null);
    });

    it('returns null when value is not a number, string, date, or array', () => {
        const rule = max(10);
        const result = rule({ foo: 'bar' } as unknown as FieldValue);
        expect(result).toBe(null);
    });
});