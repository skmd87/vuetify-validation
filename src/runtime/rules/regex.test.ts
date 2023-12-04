import { describe, it, expect } from 'vitest'
import regex from './regex'

describe('regex rule', () => {
    it('returns null if value is null', () => {
        const rule = regex(/^[0-9]+$/)
        const result = rule(null)
        expect(result).toBeNull()
    })

    it('returns true if value is a string that matches the regex', () => {
        const rule = regex(/^[0-9]+$/)
        const result = rule('12345')
        expect(result).toBe(true)
    })

    it('returns false if value is a string that does not match the regex', () => {
        const rule = regex(/^[0-9]+$/)
        const result = rule('abc')
        expect(result).toBe(false)
    })

    it('returns true if value is not a string', () => {
        const rule = regex(/^[0-9]+$/)
        const result = rule(123)
        expect(result).toBe(true)
    })
})