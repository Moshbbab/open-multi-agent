/**
 * The published package version, used as the default tracer
 * instrumentationVersion. A guard test asserts it matches package.json, so
 * bumping the package without bumping this constant fails CI.
 */
export const PACKAGE_VERSION = '1.10.0'
