import { describe, it, expect } from 'vitest'
import email from './email'

describe('email', () => {
    it('should return true for valid email addresses', () => {
        expect(email()('test@example.com')).toBe(true)
        expect(email()('john.doe@gmail.com')).toBe(true)
        expect(email()('jane_doe123@yahoo.co.uk')).toBe(true)
        expect(email()('jane_doe123+gmailtype@yahoo.co.uk')).toBe(true)
    })

    it('should return false for invalid email addresses', () => {
        expect(email()('test@example')).toBe(false)
        expect(email()('john.doe@gmail')).toBe(false)
        expect(email()('jane_doe123@yahoo')).toBe(false)
        expect(email()('invalid-email')).toBe(false)
    })

    it('should return false for non-string values', () => {
        expect(email()(123)).toBe(false)
        expect(email()(true)).toBe(false)
    })

    it('should return null for null values', () => {
        expect(email()(null)).toBe(null)
    })
})