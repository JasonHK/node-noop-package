"use strict";

import RollupPluginCommonJS from "@rollup/plugin-commonjs";
import RollupPluginNodeResolve from "@rollup/plugin-node-resolve";
import Path from "path";
import { RollupOptions } from "rollup";
import RollupPluginCleanup from "rollup-plugin-cleanup";
import { terser as RollupPluginTerser } from "rollup-plugin-terser";

namespace DIRECTORIES
{
    export const ROOT = Path.resolve(__dirname, "../");

    export const CONFIGS = Path.resolve(ROOT, "./configs");
    export const DISTRIBUTE = Path.resolve(ROOT, "./dist");
    export const LIBRARY = Path.resolve(ROOT, "./lib");
    export const SOURCE = Path.resolve(ROOT, "./src");
}

namespace OPTIONS
{
    export namespace COMMON
    {
        export const INPUT = Path.resolve(DIRECTORIES.SOURCE, "./index.js");
    }

    export namespace LIBRARY
    {
        export namespace OUTPUT
        {
            export const FILE = "index";
        }
    }

    export namespace DISTRIBUTE
    {
        export namespace OUTPUT
        {
            export const FILE = "noop-package";
            export const NAME = "NoopPackage";

            export namespace AMD
            {
                export const ID = "@jasonhk/noop-package";
            }
        }
    }
}

export default [
    {
        input: OPTIONS.COMMON.INPUT,
        output: [
            {
                file: Path.resolve(DIRECTORIES.LIBRARY, `./${ OPTIONS.LIBRARY.OUTPUT.FILE }.js`),
                format: "commonjs",
            },
        ],
        external: [
            "es5-ext/global",
        ],
        plugins: [
            RollupPluginCommonJS(),
            RollupPluginCleanup(
                {
                    maxEmptyLines: 1,
                }),
        ],
    },
    {
        input: Path.resolve(DIRECTORIES.SOURCE, "./index.js"),
        output: [
            {
                file: Path.resolve(DIRECTORIES.DISTRIBUTE, `./${ OPTIONS.DISTRIBUTE.OUTPUT.FILE }.js`),
                format: "umd",
                name: OPTIONS.DISTRIBUTE.OUTPUT.NAME,
                amd: { id: OPTIONS.DISTRIBUTE.OUTPUT.AMD.ID },
                sourcemap: true,
            },
            {
                file: Path.resolve(DIRECTORIES.DISTRIBUTE, `./${ OPTIONS.DISTRIBUTE.OUTPUT.FILE }.min.js`),
                format: "umd",
                name: OPTIONS.DISTRIBUTE.OUTPUT.NAME,
                amd: { id: OPTIONS.DISTRIBUTE.OUTPUT.AMD.ID },
                sourcemap: true,
                plugins: [
                    RollupPluginTerser(),
                ],
            },
        ],
        plugins: [
            RollupPluginNodeResolve(),
            RollupPluginCommonJS(),
            RollupPluginCleanup(
                {
                    maxEmptyLines: 1,
                }),
        ],
    },
] as RollupOptions[];
