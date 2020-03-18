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
                                        expect(Function.prototype.apply.call(noop)).toBe(noop);
                                    });
                        
                                test(
                                    "- `Function.prototype.bind()`",
                                    () =>
                                    {
                                        const binded = Function.prototype.bind.call(noop) as INoop;
                                        expect(binded(noop)).toBe(noop);
                                    });
                        
                                test(
                                    "- `Function.prototype.call()`",
                                    () =>
                                    {
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

                describe(
                    "getPrototypeOf(target)",
                    () =>
                    {
                        describe(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                test(
                                    "- `Object.getPrototypeOf()`",
                                    () =>
                                    {
                                        expect(Object.getPrototypeOf(noop)).toBe(noop);
                                    });

                                test(
                                    "- `Reflect.getPrototypeOf()`",
                                    () =>
                                    {
                                        expect(Reflect.getPrototypeOf(noop)).toBe(noop);
                                    });

                                test(
                                    "- `__proto__`",
                                    () =>
                                    {
                                        expect(noop.__proto__).toBe(noop);
                                    });

                                test(
                                    "- `Object.prototype.isPrototypeOf()`",
                                    () =>
                                    {
                                        expect(Object.prototype.isPrototypeOf.call(noop, noop)).toBe(true);
                                    });

                                test(
                                    "- `instanceof`",
                                    () =>
                                    {
                                        expect(noop instanceof noop).toBe(true);
                                    });
                            });
                    });

                describe(
                    "setPrototypeOf(target, prototype)",
                    () =>
                    {
                        describe(
                            "Case: Returns `true`",
                            () =>
                            {
                                test(
                                    "- `Object.setPrototypeOf()`",
                                    () =>
                                    {
                                        expect(
                                            () =>
                                            {
                                                expect(Object.setPrototypeOf(noop, null)).toBe(noop);
                                                expect(Object.setPrototypeOf(noop, {})).toBe(noop);
                                                expect(Object.setPrototypeOf(noop, noop)).toBe(noop);
                                            })
                                            .not.toThrow();
                                    });

                                test(
                                    "- `Reflect.setPrototypeOf()`",
                                    () =>
                                    {
                                        expect(Reflect.setPrototypeOf(noop, null)).toBe(true);
                                        expect(Reflect.setPrototypeOf(noop, {})).toBe(true);
                                        expect(Reflect.setPrototypeOf(noop, noop)).toBe(true);
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
