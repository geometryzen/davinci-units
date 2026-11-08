import { SpinorCoords } from "./SpinorCoords";

export default function (R: SpinorCoords, S: SpinorCoords): number {
    return R.yz * S.xy + R.zx * S.a - R.xy * S.yz + R.a * S.zx;
}
