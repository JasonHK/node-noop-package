"use strict";

import noop, { INoop } from "src/index";

import { PROPERTY_KEYS } from "./_property-keys";

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
                                expect(Object.setPrototypeOf(noop, null)).toBe(noop);
                                expect(Object.setPrototypeOf(noop, {})).toBe(noop);
                                expect(Object.setPrototypeOf(noop, noop)).toBe(noop);

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

                describe(
                    "getOwnPropertyDescriptor(target, key)",
                    () =>
                    {
                        test(
                            "Case: Returns the modified descriptor",
                            () =>
                            {
                                // `Object.getOwnPropertyDescriptor()`
                                for (const key of Reflect.ownKeys(noop))
                                {
                                    const descriptor = Object.getOwnPropertyDescriptor(noop, key);

                                    expect(descriptor).toBeObject()
                                    expect(descriptor.value).toBe(noop);
                                }

                                // `Reflect.getOwnPropertyDescriptor()`
                                for (const key of Reflect.ownKeys(noop))
                                {
                                    const descriptor = Reflect.getOwnPropertyDescriptor(noop, key);

                                    expect(descriptor).toBeObject();
                                    expect(descriptor.value).toBe(noop);
                                }
                            });
                        
                        test(
                            "Case: Returns `undefined`",
                            () =>
                            {
                                // `Object.getOwnPropertyDescriptor()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    const descriptor = Object.getOwnPropertyDescriptor(noop, key);
                                    expect(descriptor).toBeUndefined();
                                }

                                // `Reflect.getOwnPropertyDescriptor()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    const descriptor = Reflect.getOwnPropertyDescriptor(noop, key);
                                    expect(descriptor).toBeUndefined();
                                }
                            });
                    });

                describe(
                    "defineProperty(target, key, descriptor)",
                    () =>
                    {
                        test(
                            "Case: Returns `true`",
                            () =>
                            {
                                // `Object.defineProperty()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Object.defineProperty(noop, key, { value: key }))
                                        .toBe(noop);
                                }

                                // `Reflect.defineProperty()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Reflect.defineProperty(noop, key, { value: key }))
                                        .toBeTrue();
                                }
                            });
                    });

                describe(
                    "deleteProperty(target, key)",
                    () =>
                    {
                        test(
                            "Case: Returns `true`",
                            () =>
                            {
                                // Property deletion: `delete proxy.key` and `delete proxy[key]`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(delete noop[key as string | number]).toBeTrue();
                                }

                                // `Reflect.deleteProperty()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Reflect.deleteProperty(noop, key)).toBeTrue();
                                }
                            });
                    });

                describe(
                    "has(target, key)",
                    () =>
                    {
                        test(
                            "Case: Returns `true`",
                            () =>
                            {
                                // Property query: `key in proxy`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(key in noop).toBeTrue();
                                }

                                // Inherited property query: `key in Object.create(proxy)`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(key in Object.create(noop)).toBeTrue();
                                }

                                // `with` check: `with (proxy) { (key); }`
                                // Not tested due to `with` statement was forbidden in strict mode.

                                // `Reflect.has()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Reflect.has(noop, key)).toBeTrue();
                                }
                            });
                    });

                describe(
                    "get(target, key, receiver)",
                    () =>
                    {
                        test(
                            "Case: Returns the proxy itself",
                            () =>
                            {
                                // Property access: `proxy.key` and `proxy[key]`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(noop[key as string | number]).toBe(noop);
                                }

                                // Inherited property access: `Object.create(proxy).key` and `Object.create(proxy)[key]`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Object.create(noop)[key as string | number]).toBe(noop);
                                }

                                // `Reflect.get()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Reflect.get(noop, key)).toBe(noop);
                                }
                            });
                    });

                describe(
                    "set(target, property, value, receiver)",
                    () =>
                    {
                        test(
                            "Case: Returns `true`",
                            () =>
                            {
                                // Property assignment: `proxy.key = value` and `proxy[key] = value`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(noop[key as string | number] = key as unknown as INoop).toBe(key);
                                }

                                // Inherited property assignment: `Object.create(proxy).key = value` and
                                // `Object.create(proxy)[key] = value`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Object.create(noop)[key as string | number] = key).toBe(key);
                                }

                                // `Reflect.set()`
                                for (const key of PROPERTY_KEYS)
                                {
                                    expect(Reflect.set(noop, key, key)).toBeTrue();
                                }
                            });
                    });

                describe(
                    "ownKeys(target)",
                    () =>
                    {
                        test(
                            "Case: Returns an `Array` of keys",
                            () =>
                            {
                                // `Object.getOwnPropertyNames()`
                                expect(Object.getOwnPropertyNames(noop))
                                    .toIncludeAllMembers(["length", "name", "prototype"]);

                                // `Object.getOwnPropertySymbols()`
                                expect(Object.getOwnPropertySymbols(noop)).toBeEmpty();

                                // `Object.keys()`
                                expect(Object.keys(noop)).toBeEmpty();

                                // `Reflect.ownKeys()`
                                expect(Reflect.ownKeys(noop))
                                    .toIncludeAllMembers(["length", "name", "prototype"]);
                            });
                    });

                describe(
                    "apply(target, thisArg, args)",
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
                    "construct(target, args, newTarget)",
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
