/**
 * Determine whether the current environment provided support for this package to run or not.
 * 
 * These APIs have to be available for this package to run:
 * 
 * - `Proxy`
 * - `Reflect`
 * 
 * @returns Return `true` when the library is running in a supported environment, otherwise, return
 *          `false`.
 */
export function isPackageSupported(): boolean;
