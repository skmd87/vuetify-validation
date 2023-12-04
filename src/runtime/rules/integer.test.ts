import { describe, it, expect } from 'vitest'
import integer from './integer'

describe('integer rule', () => {
  it('returns true when value is an integer', () => {
    const rule = integer()
    const result = rule(123)
    expect(result).toBe(true)
  })

  it('returns false when value is not an integer', () => {
    const rule = integer()
    const result = rule(123.45)
    expect(result).toBe(false)
  })

  it('returns false when value is null', () => {
    const rule = integer()
    const result = rule(null)
    expect(result).toBe(null)
  })

  it('returns false when value is not a number', () => {
    const rule = integer()
    const result = rule('123')
    expect(result).toBe(false)
  })
})