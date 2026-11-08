import { SpinorCoords } from "./SpinorCoords";

export default function (R: SpinorCoords, S: SpinorCoords): number {
    return -R.yz * S.yz - R.zx * S.zx - R.xy * S.xy + R.a * S.a;
}
