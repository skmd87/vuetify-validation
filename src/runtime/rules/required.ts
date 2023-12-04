import type { Rule, FieldValue } from '~/src/types';

/**
 * Checks if a field value is required.
 * @returns A validation function that checks if the field value is empty or not.
 */
const required: Rule<[]> = () => {

    return (v: FieldValue) => {
        if (Array.isArray(v)) {
            return !!v.length
        } else {
            return !!v
        }
    }
}

export default required;