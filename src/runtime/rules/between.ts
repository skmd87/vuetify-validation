import type { Rule, MinMaxArgs, FieldValue } from '../../types/index';

/**
 * Checks if a value is between a minimum and maximum value. It can validate numbers and dates.
 * @param min The minimum value.
 * @param max The maximum value.
 * @returns A function that takes a value and returns true if it is between the minimum and maximum values, or null if the value is null.
 */
const between: Rule<MinMaxArgs> = (min, max) => {
    return (v: FieldValue) => {
        if (v === null) return null

        if (v instanceof Date) {
            if (min instanceof Date && max instanceof Date) {
                return v.getTime() > min.getTime() && v.getTime() < max.getTime()
            } else {
                console.warn('between rule: min and max must be Date objects');
            }
        } else if (typeof v === 'number') {
            if (typeof min === 'number' && typeof max === 'number') {
                return v > min && v < max
            } else {
                console.warn('between rule: min and max must be numbers');
            }
        }

        return false
    }

};

export default between;