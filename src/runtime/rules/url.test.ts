import { describe, it, expect } from 'vitest';
import url from './url';
import type { FieldValue } from '~/src/types';

describe('url rule', () => {
    it('should return true for valid URLs', () => {
        const rule = url();
        const validUrls = [
            'https://www.example.com',
            'http://example.com',
            'https://subdomain.example.com',
            'http://www.example.com/path',
            'https://www.example.com/path?query=string',
            'https://www.example.com#fragment',
            'https://www.example.com/path?query=string#fragment',
            'https://www.example.com:8080',
            'https://www.example.com:8080/path',
            'https://www.example.com:8080/path?query=string',
            'https://www.example.com:8080#fragment',
            'https://localhost'
        ];

        validUrls.forEach((url) => {
            const result = rule(url);
            expect(result).toBe(true);
        });
    });

    it('should return false for invalid URLs', () => {
        const rule = url();
        const invalidUrls = [
            'example.com',
            'www.example.com',
            'http://example',
           
        ];

        invalidUrls.forEach((url) => {
            const result = rule(url);
            expect(result).toBe(false);
        });
    });

    it('should return null for null value', () => {
        const rule = url();
        const result = rule(null);
        expect(result).toBe(null);
    });

    it('should return false for non-string values', () => {
        const rule = url();
        const nonStringValues: FieldValue[] = [42, true, false, []];

        nonStringValues.forEach((value) => {
            const result = rule(value);
            expect(result).toBe(false);
        });
    });
});