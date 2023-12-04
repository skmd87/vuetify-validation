import { describe, it, expect } from 'vitest'
import numeric from './numeric'

describe('numeric rule', () => {
    it('returns null if value is null', () => {
        const rule = numeric()
        const result = rule(null)
        expect(result).toBeNull()
    })

    it('returns true if value is a number', () => {
        const rule = numeric()
        const result = rule(123)
        expect(result).toBe(true)
    })

    it('returns false if value is not a number', () => {
        const rule = numeric()
        const result = rule('abc')
        expect(result).toBe(false)
    })

    it('returns false if value is NaN', () => {
        const rule = numeric()
        const result = rule(NaN)
        expect(result).toBe(false)
    })
})