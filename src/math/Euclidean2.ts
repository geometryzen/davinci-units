import { G3 } from "./Euclidean3";
import { Unit } from "./Unit";

export class G2 {
    #inner: G3;
    constructor(a: number, x: number, y: number, b: number, uom: Unit = Unit.ONE) {
        this.#inner = new G3(a, x, y, 0, b, 0, 0, 0, uom);
    }
    get a(): number {
        return this.#inner.a;
    }
    get x(): number {
        return this.#inner.x;
    }
    get y(): number {
        return this.#inner.y;
    }
    get b(): number {
        return this.#inner.xy;
    }
    get uom(): Unit {
        return this.#inner.uom;
    }
}
