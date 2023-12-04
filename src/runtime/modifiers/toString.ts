import type { Modifier } from "~/src/types";

/**
 * Converts a value to a string using String() if possible, else returns the same value.
 * 
 * @param value - The value to convert.
 * @returns The converted value as a string, or the same value if conversion is not possible.
 */
const toString: Modifier = (value) => {
    if (typeof value === "string") {
        return value;
    }

    try {
        return String(value);
    } catch {
        console.warn("toString modifier could not convert value to string. value:", value, "type:", typeof value, "constructor:", value?.constructor?.name ?? "N/A");
        return value;
    }
}

export default toString;
