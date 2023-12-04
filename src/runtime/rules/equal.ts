import type { FieldValue, Rule } from '../../types/index';

/**
 * Checks if the field value is equal to a given value. it can check for numbers, strings, dates and arrays.
 * @param v2 The value to compare against.
 * @returns A validation function that checks if the field value is equal to the given value.
 */
const equal: Rule<[any]> = (v2) => {
    return (v: FieldValue) => {
        if (v === null) return null

        if (typeof v !== typeof v2) {
            console.warn('equal rule: v2 must be of the same type as v');
            return false
        }

        if (['string', 'number'].includes(typeof v)) {
            return v === v2
        } else if (v instanceof Date) {
            if (!(v2 instanceof Date)) {
                console.warn('equal rule: v2 must be a Date object');
                return false
            }
            return v.getTime() === v2.getTime()
        } else if (Array.isArray(v)) {
            if (!Array.isArray(v2)) {
                console.warn('equal rule: v2 must be an array');
                return false
            }

            if (v.length !== v2.length) {
                return false
            }

            for (let i = 0; i < v.length; i++) {
                if (v[i] !== v2[i]) {
                    return false
                }
            }

            return true;

        }

        return false
    };
}

export default equal