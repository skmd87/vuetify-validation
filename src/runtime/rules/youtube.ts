import type { FieldValue, Rule } from '~/src/types';

/**
 * Validates if the input value is a valid YouTube video URL.
 * 
 * @returns A validation function that returns `true` if the value is a valid YouTube video URL, `false` otherwise.
 */
const youtube: Rule<[]> = () => {
    return (v: FieldValue) => {
        if (v === null) return null;

        if (typeof v === 'string') {
            const url = v.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
            const id = undefined !== url[2] ? url[2].split(/[^0-9a-z_-]/i)[0] : "";
            return id.length === 11
        }

        return false;
    };
}

export default youtube;