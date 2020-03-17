"use strict";

/// <reference types="node" />

const { isPackageSupported } = require("./utilities/is-package-supported");

if (!isPackageSupported())
{
    throw new Error();
}

const noop = new Proxy(
    function noop() {},
    {
        getPrototypeOf() { return noop; },
        setPrototypeOf() { return true; },

        isExtensible() { return true; },
        preventExtensions() { return false; },

        getOwnPropertyDescriptor(target, key)
        {
            const descriptor = Reflect.getOwnPropertyDescriptor(target, key);
            return (typeof descriptor === "undefined") ? descriptor : Object.assign({}, descriptor, { value: noop });
        },

        defineProperty() { return true; },
        deleteProperty() { return true; },

        has() { return true; },
        get() { return noop; },
        set() { return true; },

        ownKeys(target) { return Reflect.ownKeys(target); },

        apply() { return noop; },
        construct() { return noop; },
    });

module.exports = noop;
