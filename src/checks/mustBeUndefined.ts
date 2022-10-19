import { isUndefined } from './isUndefined';
import mustSatisfy from './mustSatisfy';

function beUndefined() {
    return "be 'undefined'"
}

export default function (name: string, value: any, contextBuilder?: () => string): any {
    mustSatisfy(name, isUndefined(value), beUndefined, contextBuilder);
    return value;
}
