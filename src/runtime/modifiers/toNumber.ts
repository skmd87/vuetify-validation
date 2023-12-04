import type { Modifier } from "~/src/types";

/**
 * Converts a value to a number.
 * 
 * @param value - The value to be converted.
 * @returns The converted number value, or `false` if conversion fails.
 */
const toNumber: Modifier = (value) => {

    if (typeof value === 'number') {
        return value;
    }

    if (typeof value === 'string') {
        const number = Number(value);
        if (!isNaN(number)) {
            return number;
        }
    }
    console.warn('toNumber modifier could not convert value to number. value:', value, 'type:', typeof value, 'constructor:', value?.constructor?.name ?? 'N/A');
    return value;
}

export default toNumber;