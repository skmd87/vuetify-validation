import { describe, it, expect } from 'vitest'
import youtube from './youtube'

describe('youtube rule', () => {

    it('should return false for invalid video ID', () => {
        const rule = youtube()
        const result = rule('invalidID')
        expect(result).toBe(false)
    })

    it('should return true for valid YouTube embed link', () => {
        const rule = youtube()
        const result = rule('https://www.youtube.com/embed/dQw4w9WgXcQ')
        expect(result).toBe(true)
    })

    it('should return false for invalid YouTube embed link', () => {
        const rule = youtube()
        const result = rule('https://www.youtube.com/embed/invalidID')
        expect(result).toBe(false)
    })

    it('should return true for valid YouTube video URL', () => {
        const rule = youtube()
        const result = rule('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        expect(result).toBe(true)
    })

    it('should return false for invalid YouTube video URL', () => {
        const rule = youtube()
        const result = rule('https://www.youtube.com/watch?v=invalidID')
        expect(result).toBe(false)
    })

    it('should return null for null value', () => {
        const rule = youtube()
        const result = rule(null)
        expect(result).toBe(null)
    })

    it('should return false for non-string value', () => {
        const rule = youtube()
        const result = rule(123)
        expect(result).toBe(false)
    })
})