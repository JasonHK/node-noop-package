declare var noop: noop.INoop;

declare namespace noop
{
    interface INoop extends Record<string | number | symbol, INoop>
    {
        default: INoop;
        (...args: unknown[]): INoop;
        new(...args: unknown[]): INoop;
    }
}

export = noop;
