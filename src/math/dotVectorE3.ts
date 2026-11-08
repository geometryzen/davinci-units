import { isDefined } from "../checks/isDefined";
import dotVectorCartesianE3 from "./dotVectorCartesianE3";
import { VectorCoords } from "./VectorCoords";

export default function dotVectorE3(a: VectorCoords, b: VectorCoords): number {
    if (isDefined(a) && isDefined(b)) {
        return dotVectorCartesianE3(a.x, a.y, a.z, b.x, b.y, b.z);
    } else {
        return void 0;
    }
}
