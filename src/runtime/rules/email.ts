import type { Rule, NoArgs, FieldValue } from '../../types/index';
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
/**
 * Validates if a value is a valid email address.
 * @returns A validation function that checks if the value is a valid email address.
 */
const email: Rule<NoArgs> = () => {
    return (v: FieldValue) => {

        if (v === null) return null

        if (typeof v === 'string') {
            return emailRegex.test(v)
        }

        return false

    };
}

export default email