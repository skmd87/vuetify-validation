import type { Modifier } from "~/src/types";

/**
 * Converts a value to a date.
 * 
 * @param value - The value to convert.
 * @returns The converted date value, or `false` if the value is an invalid date string.
 */
const toDate: Modifier = (value) => {
    if (typeof value === 'string') {
        const date = new Date(value);
        if (!isNaN(date.getTime())) {
            return date;
        }
    }
    console.warn('toDate modifier expects a string');
    return value;
}

export default toDate;
