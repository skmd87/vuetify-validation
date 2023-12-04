import type { FieldValue, NoArgs, Rule } from '~/src/types';

/**
 * Validates if a value is numeric.
 * 
 * @returns A validation function that checks if the value is numeric.
 */
const numeric: Rule<NoArgs> = () => {
    return (v: FieldValue) => {
        if (v === null) return null
        
        if (typeof v === 'number') {
            return !isNaN(v)
        }

        return false
    };
}

export default numeric