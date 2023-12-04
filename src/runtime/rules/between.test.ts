import { describe, it, expect } from 'vitest'
import between from './between'

describe('between', () => {
    it('should return true for values within the range', () => {
        expect(between(1, 10)(5)).toBe(true)
        expect(between(new Date(2022, 0, 1), new Date(2022, 11, 31))(new Date(2022, 5, 15))).toBe(true)
    })

    it('should return false for values outside the range', () => {
        expect(between(1, 10)(15)).toBe(false)
        expect(between(new Date(2022, 0, 1), new Date(2022, 11, 31))(new Date(2023, 5, 15))).toBe(false)
    })

    it('should return null for null values', () => {
        expect(between(1, 10)(null)).toBe(null)
    })

    it('should return false for non-numeric values', () => {
        expect(between(1, 10)('abc')).toBe(false)
        expect(between(1, 10)(true)).toBe(false)
        expect(between(1, 10)([])).toBe(false)
    })
})