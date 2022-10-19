import { isDefined } from './isDefined';
import mustSatisfy from './mustSatisfy';

function beDefined() {
    return "not be 'undefined'"
}

export default function mustBeDefined(name: string, value: any, contextBuilder?: () => string): any {
    mustSatisfy(name, isDefined(value), beDefined, contextBuilder);
    return value;
}
