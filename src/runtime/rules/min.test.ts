import { describe, it, expect } from 'vitest'
import min from './min'

describe('min rule', () => {
    it('returns true for number greater than min', () => {
        const rule = min(5)
        expect(rule(10)).toBe(true)
    })

    it('returns false for number less than or equal to min', () => {
        const rule = min(5)
        expect(rule(3)).toBe(false)
        expect(rule(5)).toBe(false)
    })

    it('returns true for string with length greater than min', () => {
        const rule = min(5)
        expect(rule('hello world')).toBe(true)
    })

    it('returns false for strings', () => {
        const rule = min(5)
        expect(rule('hi')).toBe(false)
        expect(rule('hello')).toBe(false)
    })

    it('returns null for invalid date format', () => {
        const rule = min('2022-01-01')
        expect(rule('212-158-2024')).toBe(false)
    })

    it('returns true for date greater than min', () => {
        const rule = min('2022-01-01')
        expect(rule(new Date('2022-02-01'))).toBe(true)
    })

    it('returns false for date less than or equal to min', () => {
        const rule = min('2022-01-01')
        expect(rule(new Date('2021-12-01'))).toBe(false)
        expect(rule(new Date('2022-01-01'))).toBe(false)
    })

    it('returns true for array with length greater than min', () => {
        const rule = min(3)
        expect(rule([1, 2, 3, 4])).toBe(true)
    })

    it('returns false for array with length less than or equal to min', () => {
        const rule = min(3)
        expect(rule([1, 2])).toBe(false)
        expect(rule([1, 2, 3])).toBe(false)
    })

    it('returns null for null value', () => {
        const rule = min(5)
        expect(rule(null)).toBe(null)
    })
})