import type { Modifier } from "~/src/types";

/**
 * Trims whitespace from a string value.
 * 
 * @param value - The string value to trim.
 * @returns The trimmed string value.
 */
const trim: Modifier = (value) => {
    return value?.trim ? value.trim() : value;
}

export default trim;