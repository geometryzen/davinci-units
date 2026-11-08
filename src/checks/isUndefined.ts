export function isUndefined<T>(arg: T | undefined): arg is T {
    return typeof arg === "undefined";
}
