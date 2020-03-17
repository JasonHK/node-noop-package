"use strict";

/// <reference types="node" />

const context = require("es5-ext/global");

/**
 * Determine whether the current environment provided support for this package to run or not.
 * 
 * These APIs have to be available for this package to run:
 * 
 * - `Proxy`
 * - `Reflect`
 * 
 * @returns {boolean} Return `true` when the library is running in a supported environment,
 *                    otherwise, return `false`.
 */
function isPackageSupported()
{
    return (
        (
            ("Proxy" in context) &&
            (typeof context.Proxy === "function")
        ) && (
            ("Reflect" in context) &&
            (
                (
                    (typeof context.Reflect === "object") &&
                    (context.Reflect !== null)
                ) && (
                    (
                        ("getOwnPropertyDescriptor" in context.Reflect) &&
                        (typeof context.Reflect.getOwnPropertyDescriptor === "function")
                    ) && (
                        ("ownKeys" in context.Reflect) &&
                        (typeof context.Reflect.ownKeys === "function")
                    )
                )
            )
        )
    );
}

module.exports = { isPackageSupported };
