import mustSatisfy from './mustSatisfy';
import isGE from './isGE';

export default function(name: string, value: number, limit: number, contextBuilder?: () => string): number {
    mustSatisfy(name, isGE(value, limit), () => { return `be greater than or equal to ${limit}` }, contextBuilder);
    return value;
}
