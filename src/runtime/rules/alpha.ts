import type { Rule, NoArgs, FieldValue } from '../../types/index';
/**
 * Checks if the value contains only alphabetic characters.
 * 
 * @param v The value to be validated.
 * @returns Returns `true` if the value contains only alphabetic characters, `false` otherwise.
 */
const alpha: Rule<NoArgs> = () => {
	return (v: FieldValue) => {

		if (v === null) return null

		if (typeof v === 'string') {
			const regex = /^[\p{L}]+$/u;
			return regex.test(v)
		}

		return false

	};
}
export default alpha;