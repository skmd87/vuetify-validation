import type { FieldValue, Rule } from '~/src/types';

/**
 * Validates a field value against a regular expression.
 * @param regex The regular expression to match against.
 * @returns A validation function that checks if the field value matches the regular expression.
 */
const regex: Rule<[RegExp]> = (regex) => {
    return (v: FieldValue) => {

        if (v === null) return null

        if (typeof v === 'string') {
            const regexp = new RegExp(regex);
            return regexp.test(v)
        }

        return true
    };
}

export default regex;