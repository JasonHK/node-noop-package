"use strict";

afterEach(
    () =>
    {
        jest.resetModules();
    });

describe(
    "isPackageSupported(): boolean",
    () =>
    {
        test(
            "Case: Supported environment",
            async () =>
            {
                jest.setMock("es5-ext/global", { Proxy, Reflect });

                const { isPackageSupported } = await import("src/utilities/is-package-supported");
                expect(isPackageSupported()).toBe(true);
            });

        test(
            "Case: Unsupported environment",
            async () =>
            {
                jest.setMock("es5-ext/global", {});

                const { isPackageSupported } = await import("src/utilities/is-package-supported");
                expect(isPackageSupported()).toBe(false);
            });
    });
