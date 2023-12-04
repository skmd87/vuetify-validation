import { describe, it, expect } from 'vitest'
import required from './required'
import type { FieldValue } from '~/src/types'

describe('required rule', () => {
    it('should return true for non-empty array', () => {
        const rule = required()
        const result = rule([1, 2, 3])
        expect(result).toBe(true)
    })

    it('should return false for empty array', () => {
        const rule = required()
        const result = rule([])
        expect(result).toBe(false)
    })

    it('should return true for non-empty string', () => {
        const rule = required()
        const result = rule('hello')
        expect(result).toBe(true)
    })

    it('should return false for empty string', () => {
        const rule = required()
        const result = rule('')
        expect(result).toBe(false)
    })

    it('should return true for non-zero number', () => {
        const rule = required()
        const result = rule(42)
        expect(result).toBe(true)
    })

    it('should return false for zero', () => {
        const rule = required()
        const result = rule(0)
        expect(result).toBe(false)
    })

    it('should return true for non-null object', () => {
        const rule = required()
        const result = rule({ name: 'John' } as unknown as FieldValue)
        expect(result).toBe(true)
    })

    it('should return false for null', () => {
        const rule = required()
        const result = rule(null)
        expect(result).toBe(false)
    })

    it('should return true for true boolean', () => {
        const rule = required()
        const result = rule(true)
        expect(result).toBe(true)
    })

    it('should return false for false boolean', () => {
        const rule = required()
        const result = rule(false)
        expect(result).toBe(false)
    })
})