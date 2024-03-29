import mustSatisfy from './mustSatisfy';
import isObject from './isObject';

function beObject() {
    return "be an `object`";
}

export default function mustBeObject<T>(name: string, value: T, contextBuilder?: () => string): T {
    mustSatisfy(name, isObject(value), beObject, contextBuilder);
    return value;
}
