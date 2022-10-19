import { isDefined } from '../checks/isDefined';
import VectorE2 from './VectorE2';

export default function dotVectorE2(a: VectorE2, b: VectorE2): number {
    if (isDefined(a) && isDefined(b)) {
        return a.x * b.x + a.y * b.y
    }
    else {
        return void 0
    }
}
