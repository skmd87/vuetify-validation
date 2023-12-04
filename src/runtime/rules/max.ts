import type { FieldValue, MaxArgs, Rule } from '../../types/index';

/**
 * Validates if the value is less than the specified maximum value.
 * 
 * @param max - The maximum value to compare against.
 * @returns A validation function that returns `true` if the value is less than the maximum value, `false` otherwise.
 */
const max: Rule<MaxArgs> = (max) => {
    return (v: FieldValue) => {

        if (v === null) return null;

        if (typeof v === 'number') {
            return v < Number(max);
        }

        if (typeof v === 'string') {
            return v.length < Number(max);
        }

        // if Date
        if (v instanceof Date) {
            try {
                max = new Date(max);
            } catch (e) {
                console.warn('max rule expects a Date or a string in a format compatible with new Date()');
                return false;
            }
            return v.getTime() < max.getTime();
        }

        // if array
        if (Array.isArray(v)) {
            return v.length < Number(max);
        }

        return null;
    };
};

export default max;
