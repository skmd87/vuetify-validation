import type { Rule, NoArgs } from '../../types/index';

/**
 * Checks if a value is alphanumeric.
 * @returns A validation function that returns true if the value is alphanumeric, false otherwise.
 */
const alphaNumeric: Rule<NoArgs> = () => {
    return (v) => {
        if (v === null) return null

        if (typeof v === 'string') {
            const regex = /^[\p{L}\p{N}]+$/u;
            return regex.test(v)
        }

        return false
    }
}

export default alphaNumeric