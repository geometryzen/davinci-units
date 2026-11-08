import { SpinorCoords } from "./SpinorCoords";

export default function (R: SpinorCoords, S: SpinorCoords): number {
    return R.yz * S.a - R.zx * S.xy + R.xy * S.zx + R.a * S.yz;
}
