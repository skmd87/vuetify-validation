import { describe, it, expect } from 'vitest'
import minLength from './minLength'

describe('minLength rule', () => {
    it('returns null if value is null', () => {
        const rule = minLength(5)
        const result = rule(null)
        expect(result).toBeNull()
    })

    it('returns false if value is not a string', () => {
        const rule = minLength(5)
        const result = rule(123)
        expect(result).toBe(false)
    })

    it('returns true if value length is greater than the specified length', () => {
        const rule = minLength(5)
        const result = rule('hello world')
        expect(result).toBe(true)
    })

    it('returns false if value length is less than or equal to the specified length', () => {
        const rule = minLength(5)
        const result = rule('hello')
        expect(result).toBe(false)
    })
})