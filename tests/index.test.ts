"use strict";

import noop, { INoop } from "src/index";

describe(
    "noop",
    () =>
    {
        describe(
            "Proxy Handlers",
            () =>
            {
                describe(
                    "apply(target, thisArg[, args])",
                    () =>
                    {
                        describe(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                test(
                                    "- `proxy(...args)`",
                                    () =>
                                    {
                                        expect(noop()).toBe(noop);
                                    });
                        
                                test(
                                    "- `Function.prototype.apply()`",
                                    () =>
                                    {
                                        expect(noop.apply()).toBe(noop);
                                        expect(Function.prototype.apply.call(noop)).toBe(noop);
                                    });
                        
                                test(
                                    "- `Function.prototype.bind()`",
                                    () =>
                                    {
                                        const binded1 = noop.bind();
                                        expect(binded1()).toBe(noop);
                
                                        const binded2 = Function.prototype.bind.call(noop) as INoop;
                                        expect(binded2(noop)).toBe(noop);
                                    });
                        
                                test(
                                    "- `Function.prototype.call()`",
                                    () =>
                                    {
                                        expect(noop.call()).toBe(noop);
                                        expect(Function.prototype.call.call(noop)).toBe(noop);
                                    });
                
                                test(
                                    "- `Reflect.apply()`",
                                    () =>
                                    {
                                        expect(Reflect.apply(noop as unknown as Function, undefined, [])).toBe(noop);
                                    });
                            });
                    });

                describe(
                    "construct(target, args[, newTarget])",
                    () =>
                    {
                        describe(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                test(
                                    "- `new Proxy(...args)`",
                                    () =>
                                    {
                                        expect(new noop()).toBe(noop);
                                    });

                                test(
                                    "- `Reflect.construct()`",
                                    () =>
                                    {
                                        expect(Reflect.construct(noop as unknown as Function, [])).toBe(noop);
                                    });
                            });
                    });
            });
    });

test(
    "Case: Unsupported environment",
    async () =>
    {
        expect.assertions(2);

        jest.resetModules()
            .setMock(
                "src/utilities/is-package-supported",
                {
                    isPackageSupported() { return false; },
                });

        try
        {
            await import("src/index");
        }
        catch (error)
        {
            expect(error).toBeInstanceOf(Error);
            expect((error as Error).message).toBe("This package was not supported in the current environment.");
        }
    });
