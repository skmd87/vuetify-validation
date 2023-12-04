import type { Rule, LengthArgs, FieldValue } from '../../types/index';

const maxLength: Rule<LengthArgs> = (length) => {
    return (v: FieldValue) => {   
       
        return v?.length > length 
    };
}

export default maxLength