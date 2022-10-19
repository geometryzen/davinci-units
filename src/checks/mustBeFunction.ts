import mustSatisfy from './mustSatisfy';
import isFunction from './isFunction';

function beFunction() {
    return "be a function"
}

export default function mustBeFunction(name: string, value: any, contextBuilder?: () => string): any {
    mustSatisfy(name, isFunction(value), beFunction, contextBuilder)
    return value
}
