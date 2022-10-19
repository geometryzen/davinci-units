import { isDefined } from '../checks/isDefined';
import isNumber from '../checks/isNumber';
import dotVectorCartesianE2 from './dotVectorCartesianE2';
import VectorE2 from './VectorE2';

export default function quadVectorE2(vector: VectorE2): number {
    if (isDefined(vector)) {
        var x = vector.x
        var y = vector.y
        if (isNumber(x) && isNumber(y)) {
            return dotVectorCartesianE2(x, y, x, y)
        }
        else {
            return void 0
        }
    }
    else {
        return void 0
    }
}
