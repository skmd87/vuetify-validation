import { describe, it, expect } from 'vitest';
import toDate from './toDate';

describe('toDate modifier', () => {
    it('should return a Date object when given a string', () => {
        const result = toDate('2022-01-01');
        expect(result).toBeInstanceOf(Date);
        expect(result.getFullYear()).toBe(2022);
        expect(result.getMonth()).toBe(0);
        expect(result.getDate()).toBe(1);
    });

    it('should return the same value when given a non-string value', () => {
        const result = toDate(123);
        expect(result).toBe(123);
    });

    it('should return the same value when given a Date object', () => {
        const date = new Date('2022-01-01');
        const result = toDate(date);
        expect(result).toBe(date);
    });

    it('should return the same value when given null', () => {
        const result = toDate(null);
        expect(result).toBe(null);
    });

    it('should return the same value when given undefined', () => {
        const result = toDate(undefined);
        expect(result).toBe(undefined);
    });

    it('should return value if given an invalid date string', () => {
        const result = toDate('invalid date');
        expect(result).toBe(result);
    });

});