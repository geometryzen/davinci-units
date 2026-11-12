import { G3 } from './Euclidean3'
import { Unit } from './Unit'
export class G2 {
    #inner: G3
    constructor(a: number, x: number, y: number, b: number, uom: Unit=Unit.ONE) {
        this.#inner = new G3(a, x, y, 0, b, 0, 0, 0, uom)
    }
    get a() {
        return this.#inner.a
    }
    get x() {
        return this.#inner.x
    }
    get y() {
        return this.#inner.y
    }
    get b() {
        return this.#inner.xy
    }
}