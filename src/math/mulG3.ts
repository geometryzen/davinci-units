import { GeometricCoords } from "./GeometricCoords";
import { gcompE3 as get } from "./compG3Get";
import { mulE3 } from "./mulE3";

export function mulG3(a: GeometricCoords, b: GeometricCoords, out: number[]): void {
    const a0 = a.a;
    const a1 = a.x;
    const a2 = a.y;
    const a3 = a.z;
    const a4 = a.xy;
    const a5 = a.yz;
    const a6 = a.zx;
    const a7 = a.b;

    const b0 = get(b, 0);
    const b1 = get(b, 1);
    const b2 = get(b, 2);
    const b3 = get(b, 3);
    const b4 = get(b, 4);
    const b5 = get(b, 5);
    const b6 = get(b, 6);
    const b7 = get(b, 7);

    out[0] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0);
    out[1] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1);
    out[2] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2);
    out[3] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3);
    out[4] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4);
    out[5] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5);
    out[6] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6);
    out[7] = mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7);
}
