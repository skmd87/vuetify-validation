import { describe, it, expect } from 'vitest'
import equal from './equal'

describe('equal rule', () => {
  it('returns true when values are equal', () => {
    const rule = equal('test')
    const result = rule('test')
    expect(result).toBe(true)
  })

  it('returns false when values are not equal', () => {
    const rule = equal('test')
    const result = rule('other')
    expect(result).toBe(false)
  })

  it('returns false when types are different', () => {
    const rule = equal(123)
    const result = rule('123')
    expect(result).toBe(false)
  })

  it('returns false when comparing arrays with different lengths', () => {
    const rule = equal([1, 2, 3])
    const result = rule([1, 2])
    expect(result).toBe(false)
  })

  it('returns false when comparing arrays with different values', () => {
    const rule = equal([1, 2, 3])
    const result = rule([1, 2, 4])
    expect(result).toBe(false)
  })

  it('returns true when comparing arrays with the same values', () => {
    const rule = equal([1, 2, 3])
    const result = rule([1, 2, 3])
    expect(result).toBe(true)
  })

  it('returns false when comparing dates with different values', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-01-02')
    const rule = equal(date1)
    const result = rule(date2)
    expect(result).toBe(false)
  })

  it('returns true when comparing dates with the same values', () => {
    const date1 = new Date('2022-01-01')
    const date2 = new Date('2022-01-01')
    const rule = equal(date1)
    const result = rule(date2)
    expect(result).toBe(true)
  })
})