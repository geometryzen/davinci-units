import { SpinorCoords } from "./SpinorCoords";

export default function (R: SpinorCoords, S: SpinorCoords): number {
    return -R.yz * S.zx + R.zx * S.yz + R.xy * S.a + R.a * S.xy;
}
