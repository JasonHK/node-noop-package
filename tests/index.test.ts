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
                    "getPrototypeOf(target)",
                    () =>
                    {
                        test(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                // `Object.getPrototypeOf()`
                                expect(Object.getPrototypeOf(noop)).toBe(noop);

                                // `Reflect.getPrototypeOf()`
                                expect(Reflect.getPrototypeOf(noop)).toBe(noop);

                                // `__proto__`
                                expect(noop.__proto__).toBe(noop);

                                // `Object.prototype.isPrototypeOf()`
                                expect(Object.prototype.isPrototypeOf.call(noop, noop)).toBeTrue();

                                // `instanceof`
                                expect(noop instanceof noop).toBeTrue();
                            });
                    });

                describe(
                    "setPrototypeOf(target, prototype)",
                    () =>
                    {
                        test(
                            "Case: Returns `true`",
                            () =>
                            {
                                // `Object.setPrototypeOf()`
                                expect(
                                    () =>
                                    {
                                        expect(Object.setPrototypeOf(noop, null)).toBe(noop);
                                        expect(Object.setPrototypeOf(noop, {})).toBe(noop);
                                        expect(Object.setPrototypeOf(noop, noop)).toBe(noop);
                                    })
                                    .not.toThrow();

                                // `Reflect.setPrototypeOf()`
                                expect(Reflect.setPrototypeOf(noop, null)).toBeTrue();
                                expect(Reflect.setPrototypeOf(noop, {})).toBeTrue();
                                expect(Reflect.setPrototypeOf(noop, noop)).toBeTrue();
                            });
                    });

                describe(
                    "isExtensible(target)",
                    () =>
                    {
                        test(
                            "Case: Returns `true`",
                            () =>
                            {
                                // `Object.isExtensible()`
                                expect(Object.isExtensible(noop)).toBeTrue();

                                // `Reflect.isExtensible()`
                                expect(Reflect.isExtensible(noop)).toBeTrue();
                            });
                    });

                describe(
                    "preventExtensions(target)",
                    () =>
                    {
                        test(
                            "Case: Returns `false`",
                            () =>
                            {
                                // `Object.preventExtensions()`
                                expect(() => { Object.preventExtensions(noop); })
                                    .toThrow(TypeError);

                                // `Reflect.preventExtensions()`
                                expect(Reflect.preventExtensions(noop)).toBeFalse();
                            });
                    });

                        test(
                                    "- `Reflect.isExtensible()`",
                            () =>
                            {
                                        expect(Reflect.isExtensible(noop)).toBe(true);
                                    });
                            });
                    });

                describe(
                    "apply(target, thisArg[, args])",
                    () =>
                    {
                        test(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                // `proxy(...args)`
                                expect(noop()).toBe(noop);
                        
                                // `Function.prototype.apply()`
                                expect(Function.prototype.apply.call(noop)).toBe(noop);
                        
                                // `Function.prototype.bind()`
                                const binded = Function.prototype.bind.call(noop) as INoop;
                                expect(binded(noop)).toBe(noop);
                        
                                // `Function.prototype.call()`
                                expect(Function.prototype.call.call(noop)).toBe(noop);
                
                                // `Reflect.apply()`
                                expect(Reflect.apply(noop as unknown as Function, undefined, [])).toBe(noop);
                            });
                    });

                describe(
                    "construct(target, args[, newTarget])",
                    () =>
                    {
                        test(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                // `new Proxy(...args)`
                                expect(new noop()).toBe(noop);

                                // `Reflect.construct()`
                                expect(Reflect.construct(noop as unknown as Function, [])).toBe(noop);
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
