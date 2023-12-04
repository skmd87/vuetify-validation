import { describe, it, expect } from 'vitest'
import alphaNumeric from './alphaNumeric'

describe('alphaNumeric', () => {
    it('should return true for alphanumeric strings', () => {
        expect(alphaNumeric()('abc123')).toBe(true)
        expect(alphaNumeric()('123abc')).toBe(true)
        expect(alphaNumeric()('abc123xyz')).toBe(true)
        expect(alphaNumeric()('أبجدهوز123xyz')).toBe(true)
    })

    it('should return false for non-alphanumeric strings', () => {
        expect(alphaNumeric()('abc@123')).toBe(false)
        expect(alphaNumeric()('123!abc')).toBe(false)
        expect(alphaNumeric()('abc#123')).toBe(false)
        expect(alphaNumeric()('أبجدهوز#123')).toBe(false)
    })

    it('should return false for non-string values', () => {
        expect(alphaNumeric()(123)).toBe(false)
        expect(alphaNumeric()(true)).toBe(false)
    })

    it('should return null for null values', () => {
        expect(alphaNumeric()(null)).toBe(null)
    })
})