import { describe, it, expect } from 'vitest'
import alpha from './alpha'

describe('alpha rule', () => {
    it('should return true for valid alphabetic strings', () => {
        const validStrings = [
            'abc',
            'ABC',
            'αβγ',
            'АБВ',
            'ԱԲԳ',
            'אבג',
            'أبجدهوز'

        ]

        validStrings.forEach((str) => {
            const rule = alpha()
            const result = rule(str)
            expect(result).toBe(true)
        })
    })

    it('should return false for invalid alphabetic strings', () => {
        const invalidStrings = [
            '123',
            'abc123',
            'ABC123',
            'αβγ123',
            'АБВ123',
            'ԱԲԳ123',
            'אבג123',
            'abc@',
            'ABC@',
            'αβγ@',
            'АБВ@',
            'ԱԲԳ@',
            'אבג@',
            'أبجدهوز@',
        ]

        invalidStrings.forEach((str) => {
            const rule = alpha()
            const result = rule(str)
            expect(result).toBe(false)
        })
    })

    it('should return null for null values', () => {
        const rule = alpha()
        const result = rule(null)
        expect(result).toBe(null)
    })

    it('should return false for non-string values', () => {
        const nonStringValues = [
            123,
            true,
            [],
        ]

        nonStringValues.forEach((value) => {
            const rule = alpha()
            const result = rule(value)
            expect(result).toBe(false)
        })
    })
})