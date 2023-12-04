import type { FieldValue, NoArgs, Rule } from '../../types/index';

/**
 * Checks if a value is an integer.
 * @returns A validation function that returns true if the value is an integer, false otherwise.
 */
const integer: Rule<NoArgs> = () => {
    return (v: FieldValue) => {

        if (v === null) return null

        if (typeof v === 'number') {
            return Number.isInteger(v)
        }

        return false
    };
}

export default integer