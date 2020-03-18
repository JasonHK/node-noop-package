"use strict";

export const PROPERTY_KEYS: Array<string | number | symbol> = [
    "",
    "key",
    0,
    Number.MIN_SAFE_INTEGER,
    Number.MAX_SAFE_INTEGER,
    Symbol(),
    Symbol(""),
    Symbol("key"),
    Symbol(0),
    Symbol(Number.MIN_SAFE_INTEGER),
    Symbol(Number.MAX_SAFE_INTEGER),
];
