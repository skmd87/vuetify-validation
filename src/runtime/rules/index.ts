//import and re-export all files in this folder

import alphaNumeric from './alphaNumeric';
import alpha from './alpha';
import between from './between';
import email from './email';
import equal from './equal';
import integer from './integer';
import max from './max';
import maxLength from './maxLength';
import min from './min';
import minLength from './minLength';
import numeric from './numeric';
import required from './required';
import regex from './regex';
import url from './url';
import youtube from './youtube';
// import type { Rule } from '~/src/types';



const rules = {
    alphaNumeric,
    alpha,
    between,
    email,
    equal,
    integer,
    max,
    maxLength,
    min,
    minLength,
    numeric,
    required,
    regex,
    url,
    youtube
};


export default rules;

//also export each rule individually
export {
    alphaNumeric,
    alpha,
    between,
    email,
    equal,
    integer,
    max,
    maxLength,
    min,
    minLength,
    numeric,
    required,
    regex,
    url,
    youtube
};






