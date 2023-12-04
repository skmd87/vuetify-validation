import type { NuxtApp } from 'nuxt/app';
import type { Rule, Modifier, ValidatorRule, FieldValue, Field, ValidationResult } from '../types';
import type { ModuleOptions } from '../module'
import rules, { integer } from './rules';
import modifiers from './modifiers';


type Stack = {
    type: 'rule' | 'modifier';
    handler: Rule<any[]> | Modifier;
    args?: Record<string, any>;
}

type ValidatorModifier = () => Validator;

export class Validator {
    #stack: Stack[] = [];
    #nuxtInstance: NuxtApp | null = null;
    #config: ModuleOptions | null = null;
    currentLocale: string | null = null;
    constructor(nuxtInstance: NuxtApp, config: ModuleOptions) {
        this.#nuxtInstance = nuxtInstance;
        this.#config = config;
        this.currentLocale = config.defaultLocale ?? null;
    }


    #addStack(type: Stack['type'], handler: Stack['handler'], args?: Stack['args']) {
        this.#stack.push({ type, handler, args });
    }

    // rules
    alpha: ValidatorRule<typeof rules.alpha> = () => {
        this.#addStack('rule', rules.alpha);
        return this;
    }

    alphaNumeric: ValidatorRule<typeof rules.alphaNumeric> = () => {
        this.#addStack('rule', rules.alphaNumeric);
        return this;
    }

    between: ValidatorRule<typeof rules.between> = (min, max) => {
        this.#addStack('rule', rules.between, { min, max });
        return this;
    }

    email: ValidatorRule<typeof rules.email> = () => {
        this.#addStack('rule', rules.email);
        return this;
    }

    equal: ValidatorRule<typeof rules.equal> = (v2) => {
        this.#addStack('rule', rules.equal, { v2 });
        return this;
    }

    integer: ValidatorRule<typeof integer> = () => {
        this.#addStack('rule', integer);
        return this;
    }

    max: ValidatorRule<typeof rules.max> = (max) => {
        this.#addStack('rule', rules.max, { max });
        return this;
    }

    maxLength: ValidatorRule<typeof rules.maxLength> = (length) => {
        this.#addStack('rule', rules.maxLength, { length });
        return this;
    }

    min: ValidatorRule<typeof rules.min> = (min) => {
        this.#addStack('rule', rules.min, { min });
        return this;
    }

    minLength: ValidatorRule<typeof rules.minLength> = (length) => {
        this.#addStack('rule', rules.minLength, { length });
        return this;
    }

    numeric: ValidatorRule<typeof rules.numeric> = () => {
        this.#addStack('rule', rules.numeric);
        return this;
    }

    regex: ValidatorRule<typeof rules.regex> = (regex) => {
        this.#addStack('rule', rules.regex, { regex });
        return this;
    }

    required: ValidatorRule<typeof rules.required> = () => {
        this.#addStack('rule', rules.required);
        return this;
    }

    url: ValidatorRule<typeof rules.url> = () => {
        this.#addStack('rule', rules.url);
        return this;
    }

    youtube: ValidatorRule<typeof rules.youtube> = () => {
        this.#addStack('rule', rules.youtube);
        return this;
    }


    //modifiers

    toDate: ValidatorModifier = () => {
        this.#addStack('modifier', modifiers.toDate);
        return this;
    }

    toString: ValidatorModifier = () => {
        this.#addStack('modifier', modifiers.toString);
        return this;
    }

    trim: ValidatorModifier = () => {
        this.#addStack('modifier', modifiers.trim);
        return this;
    }

    toNumber: ValidatorModifier = () => {
        this.#addStack('modifier', modifiers.toNumber);
        return this;
    }

    //locale

    #getMessages() {
        const msgs = this.#config?.messages;

        if (!msgs) {
            throw new Error('messages are not defined.');
        }

        const locale = this.#getLocale();

        if (!msgs[locale]) {
            throw new Error(`messages for ${locale} are not defined.`);
        }

        return msgs[locale];
    }

    #getLocale() {
        // if i18n enabled, get the i18n locale,else get currentLocale 
        //@ts-ignore
        return this.#isI18nEnabled() ? this.#i18n()?.locale.value : this.currentLocale;
    }

    #getRuleMessage(rule: string, field: string, args: Stack['args']) {
        //@ts-ignore
        const messages = this.#getMessages()
        console.log("🚀 ~ file: Validator.ts:168 ~ Validator ~ #getRuleMessage ~ messages:", messages)
        let message = messages?.[rule] ?? ''
        message = message.replace(/\{field\}/g, field);
        console.log("🚀 ~ file: Validator.ts:170 ~ Validator ~ #getRuleMessage ~ message:", message)

        if (args) {
            const argsKeys = Object.keys(args ?? {});

            argsKeys.forEach((key) => {
                const value = args[key];

                message = message.replace(RegExp('{' + key + '}', 'g'), value);
            });
        }
        return message;
    }

    #isI18nEnabled() {
        return !!(this.#nuxtInstance && this.#nuxtInstance.$i18n)
    }
    #i18n() {
        return this.#nuxtInstance?.$i18n;
    }


    validate: ValidationResult = (field: Field = '') => {
        //loop through the stack and execute each rule, once we get a false, we stop and return the error msg
        return (value: FieldValue) => {
            let result = true;
            let error = null;
            if (value === undefined || "") {
                //normalize empty values to null
                value = null;
            }
            for (let i = 0; i < this.#stack.length; i++) {

                const { handler, args, type } = this.#stack[i];

                if (type === 'modifier') {
                    value = handler(value);
                    continue;
                }

                result = handler(args)(value);

                if (result === false) {
                    error = this.#getRuleMessage(handler.name, field, args);
                    break;
                }
                /*else if (result === null) {
                    console.log('soft error', handler.name)
    
                    error = handler.name;
                    break;
                }*/
            }

            if (result === false) {
                return error ?? false;
            }

            return true
        }
    }

}