import { isDefined } from "../checks/isDefined";
import isNumber from "../checks/isNumber";
import dotVectorCartesianE3 from "./dotVectorCartesianE3";
import { VectorCoords } from "./VectorCoords";

export default function quadVectorE3(vector: VectorCoords): number {
    if (isDefined(vector)) {
        const x = vector.x;
        const y = vector.y;
        const z = vector.z;
        if (isNumber(x) && isNumber(y) && isNumber(z)) {
            return dotVectorCartesianE3(x, y, z, x, y, z);
        } else {
            return void 0;
        }
    } else {
        return void 0;
    }
}
