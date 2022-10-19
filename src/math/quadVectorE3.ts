import { isDefined } from '../checks/isDefined';
import isNumber from '../checks/isNumber';
import dotVectorCartesianE3 from './dotVectorCartesianE3';
import VectorE3 from './VectorE3';

export default function quadVectorE3(vector: VectorE3): number {
    if (isDefined(vector)) {
        const x = vector.x
        const y = vector.y
        const z = vector.z
        if (isNumber(x) && isNumber(y) && isNumber(z)) {
            return dotVectorCartesianE3(x, y, z, x, y, z)
        }
        else {
            return void 0
        }
    }
    else {
        return void 0
    }
}
