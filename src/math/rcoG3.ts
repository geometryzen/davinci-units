import { gcompE3 as get } from "./compG3Get";
import { compG3Set as set } from "./compG3Set";
import { G3 } from "./G3";
import { GeometricE3 } from "./GeometricE3";
import { rcoE3 } from "./rcoE3";
import { Unit } from "./Unit";

export function rcoG3(a: GeometricE3, b: GeometricE3, uom: Unit): G3 {
    const a0 = get(a, 0);
    const a1 = get(a, 1);
    const a2 = get(a, 2);
    const a3 = get(a, 3);
    const a4 = get(a, 4);
    const a5 = get(a, 5);
    const a6 = get(a, 6);
    const a7 = get(a, 7);

    const b0 = get(b, 0);
    const b1 = get(b, 1);
    const b2 = get(b, 2);
    const b3 = get(b, 3);
    const b4 = get(b, 4);
    const b5 = get(b, 5);
    const b6 = get(b, 6);
    const b7 = get(b, 7);

    const xs: [number, number, number, number, number, number, number, number] = [0, 0, 0, 0, 0, 0, 0, 0];

    set(xs, 0, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0));
    set(xs, 1, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1));
    set(xs, 2, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2));
    set(xs, 3, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3));
    set(xs, 4, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4));
    set(xs, 5, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5));
    set(xs, 6, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6));
    set(xs, 7, rcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7));

    return new G3(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7], uom);
}
