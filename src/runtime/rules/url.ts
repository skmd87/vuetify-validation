import type { FieldValue, Rule } from '~/src/types';

/**
 * Validates if a value is a valid URL.
 * @returns A validation function that returns `true` if the value is a valid URL, `false` otherwise.
 */
const url: Rule<[]> = () => {
    return (v: FieldValue) => {

        if (v === null) return null;

        if (typeof v === 'string') {
            try {
                const url = new URL(v);

                if (!url.protocol || !url.hostname) {
                    return false;
                }
                //make sure hostname has ltd except for localhost
                if (url.hostname && url.hostname !== 'localhost') {
                    const parts = url.hostname.split('.');
                    if (parts.length < 2) {
                        return false;
                    }
                }                
                return true;
            } catch (e) {
                return false;
            }
        }

        return false;
    };
};

export default url;
