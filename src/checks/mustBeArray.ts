import mustSatisfy from './mustSatisfy'
import isArray from './isArray'

function beAnArray() {
    return "be an array"
}

export default function <T>(name: string, value: T[], contextBuilder?: () => string): T[] {
    mustSatisfy(name, isArray(value), beAnArray, contextBuilder)
    return value
}
