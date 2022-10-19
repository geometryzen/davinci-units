import { isDefined } from '../checks/isDefined';
import dotVectorCartesianE3 from './dotVectorCartesianE3';
import VectorE3 from './VectorE3';

export default function dotVectorE3(a: VectorE3, b: VectorE3): number {
    if (isDefined(a) && isDefined(b)) {
        return dotVectorCartesianE3(a.x, a.y, a.z, b.x, b.y, b.z)
    }
    else {
        return void 0
    }
}
