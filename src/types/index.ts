import type { Validator } from '../runtime/Validator';

export type FieldValue = string | number | boolean | null | Date | FieldValue[];

export type RuleReturn = false | true | null;

export type ReturnedFn = (value: FieldValue) => RuleReturn;

export type MinArgs = [string | number | Date];

export type Field = string;

export type MaxArgs = [string | number | Date];

export type MinMaxArgs = [...MinArgs, ...MaxArgs];

export type LengthArgs = [number];

export type FieldAndValueArgs = [Field, FieldValue];

export type NoArgs = [];

export type Args = any[]; //MinArgs | MaxArgs | MinMaxArgs | NoArgs | LengthArgs | FieldAndValueArgs;

export type Rule<T extends Args> = (...args: T) => ReturnedFn;

export type Modifier = (value: any) => any

// some utility types for working with tuples
export type Cons<H, T extends readonly any[]> =
    ((head: H, ...tail: T) => void) extends ((...cons: infer R) => void) ? R : never;

export type Push<T extends readonly any[], V>
    = T extends any ? Cons<void, T> extends infer U ?
    { [K in keyof U]: K extends keyof T ? T[K] : V } : never : never;

export type ValidatorRule<F> =
    F extends ((...args: infer PrevArgs) => unknown)
    ? (...args: PrevArgs) => Validator
    : never;

export type ValidationResult = (fieldName?: Field) => (value: any) => boolean | string;