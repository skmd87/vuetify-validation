import type { FieldValue, MinArgs, Rule } from '../../types/index';

const min: Rule<MinArgs> = (min) => {
    return (v: FieldValue) => {
        console.log("🚀 ~ file: min.ts:5 ~ return ~ v:", v, min, Number(min))

        if (v === null) return null

        if (typeof v === 'number') {
            return v > Number(min)
        }

        if (typeof v === 'string') {
            return v.length > Number(min)
        }

        // if Date
        if (v instanceof Date) {
            try {
                min = new Date(min)
            } catch (e) {
                console.warn('min rule expects a Date or a string in the format of compatible with new Date()')
                return false
            }
            return v.getTime() > min.getTime()
        }

        // if array
        if (Array.isArray(v)) {
            return v.length > Number(min)
        }

        return null


    };
}

export default min;