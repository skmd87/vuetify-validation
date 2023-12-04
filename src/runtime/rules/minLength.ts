import type { LengthArgs, Rule } from '../../types/index';

/**
 * Rule that checks if a string has a minimum length.
 * @param length The minimum length required.
 * @returns A validation function that returns true if the string length is less than the specified minimum length, false otherwise.
 */
const minLength: Rule<LengthArgs> = (length) => {
    return (v) => {

        if (v === null) return null

        if (typeof v !== 'string') {
            console.warn('minLength rule expects a string')
            return false
        }

        return v.length > length
    };
}

export default minLength