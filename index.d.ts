export as namespace NoopPackage;

declare var noop: noop.INoop;

declare namespace noop
{
    export interface INoop extends Record<string | number | symbol, INoop>, Record<IOmittedKeys, INoop>
    {
        default: INoop;
        (...args: unknown[]): INoop;
        new(...args: unknown[]): INoop;
    }

    type IOmittedKeys = "apply" | "arguments" | "bind" | "call" | "caller" | "length" | "name" | "prototype" | "toString";

    export {};
}

export = noop;
