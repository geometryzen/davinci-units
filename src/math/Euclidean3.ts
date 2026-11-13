import notImplemented from "../i18n/notImplemented";
import notSupported from "../i18n/notSupported";
import BASIS_LABELS_G3_GEOMETRIC from "./BASIS_LABELS_G3_GEOMETRIC";
import BASIS_LABELS_G3_HAMILTON from "./BASIS_LABELS_G3_HAMILTON";
import BASIS_LABELS_G3_STANDARD from "./BASIS_LABELS_G3_STANDARD";
import BASIS_LABELS_G3_STANDARD_HTML from "./BASIS_LABELS_G3_STANDARD_HTML";
import b2 from "./bezier2";
import b3 from "./bezier3";
import { gcompE3 as get } from "./compG3Get";
import { compG3Set as set } from "./compG3Set";
import { extE3 } from "./extE3";
import { gauss } from "./gauss";
import { GeometricCoords } from "./GeometricCoords";
import { GeometricMeasure } from "./GeometricMeasure";
import { GeometricNumber } from "./GeometricNumber";
import { GeometricOperators } from "./GeometricOperators";
import { lcoE3 } from "./lcoE3";
import { mulE3 } from "./mulE3";
import { mulG3 } from "./mulG3";
import quadSpinorE3 from "./quadSpinorE3";
import { rcoE3 } from "./rcoE3";
import { SpinorCoords } from "./SpinorCoords";
import squaredNormG3 from "./squaredNormG3";
import { stringFromCoordinates } from "./stringFromCoordinates";
import { TrigMethods } from "./TrigMethods";
import { Unit } from "./Unit";
import { VectorCoords } from "./VectorCoords";

const COORD_SCALAR = 0;
const COORD_X = 1;
const COORD_Y = 2;
const COORD_Z = 3;
const COORD_XY = 4;
const COORD_YZ = 5;
const COORD_ZX = 6;
const COORD_PSEUDO = 7;

function extG3(a: GeometricCoords, b: GeometricCoords, uom: Unit): G3 {
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

    set(xs, 0, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0));
    set(xs, 1, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1));
    set(xs, 2, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2));
    set(xs, 3, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3));
    set(xs, 4, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4));
    set(xs, 5, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5));
    set(xs, 6, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6));
    set(xs, 7, extE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7));

    return new G3(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7], uom);
}

export function lcoG3(a: GeometricCoords, b: GeometricCoords, uom: Unit): G3 {
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

    set(xs, 0, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0));
    set(xs, 1, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 1));
    set(xs, 2, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 2));
    set(xs, 3, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 3));
    set(xs, 4, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 4));
    set(xs, 5, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 5));
    set(xs, 6, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 6));
    set(xs, 7, lcoE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 7));

    return new G3(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7], uom);
}

export function rcoG3(a: GeometricCoords, b: GeometricCoords, uom: Unit): G3 {
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

export function scpG3(a: GeometricCoords, b: GeometricCoords, uom: Unit): G3 {
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

    set(xs, 0, mulE3(a0, a1, a2, a3, a4, a5, a6, a7, b0, b1, b2, b3, b4, b5, b6, b7, 0));
    set(xs, 1, 0);
    set(xs, 2, 0);
    set(xs, 3, 0);
    set(xs, 4, 0);
    set(xs, 5, 0);
    set(xs, 6, 0);
    set(xs, 7, 0);

    return new G3(xs[0], xs[1], xs[2], xs[3], xs[4], xs[5], xs[6], xs[7], uom);
}

/**
 * <p>
 * Represents a multivector for a 3-dimensional vector space with a Euclidean metric.
 * </p>
 * <p>
 * Immutable, making it easy to reason about values.
 * </p>
 * <p>
 * Supports units of measure.
 * </p>
 */
export class G3 implements GeometricMeasure<G3>, GeometricCoords, GeometricNumber<G3, G3, SpinorCoords, VectorCoords, G3, number, Unit>, GeometricOperators<G3, Unit>, TrigMethods<G3> {
    static get BASIS_LABELS_GEOMETRIC(): string[][] {
        return BASIS_LABELS_G3_GEOMETRIC;
    }
    static get BASIS_LABELS_HAMILTON(): string[][] {
        return BASIS_LABELS_G3_HAMILTON;
    }
    static get BASIS_LABELS_STANDARD(): string[][] {
        return BASIS_LABELS_G3_STANDARD;
    }
    static get BASIS_LABELS_STANDARD_HTML(): string[][] {
        return BASIS_LABELS_G3_STANDARD_HTML;
    }

    /**
     * The current basis labels.
     */
    static BASIS_LABELS: string[][] = BASIS_LABELS_G3_STANDARD;

    public static readonly zero = new G3(0, 0, 0, 0, 0, 0, 0, 0, Unit.ONE);
    public static readonly one = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.ONE);
    public static readonly e1 = new G3(0, 1, 0, 0, 0, 0, 0, 0, Unit.ONE);
    public static readonly e2 = new G3(0, 0, 1, 0, 0, 0, 0, 0, Unit.ONE);
    public static readonly e3 = new G3(0, 0, 0, 1, 0, 0, 0, 0, Unit.ONE);
    public static readonly NaN = new G3(NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, Unit.ONE);

    /**
     * kilogram in S.I. units.
     */
    public static readonly MASS = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.MASS);
    /**
     * @deprecated Use MASS instead.
     */
    public static readonly kilogram = G3.MASS;
    /**
     * meter in S.I. units.
     */
    public static readonly LENGTH = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.LENGTH);
    /**
     * @deprecated Use LENGTH instead.
     */
    public static readonly meter = G3.LENGTH;
    /**
     * second in S.I. units.
     */
    public static readonly TIME = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.TIME);
    /**
     * @deprecated Use TIME instead.
     */
    public static readonly second = G3.TIME;
    /**
     * coulomb in S.I. units.
     */
    public static readonly CHARGE = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.CHARGE);
    /**
     * @deprecated Use CHARGE instead.
     */
    public static readonly coulomb = G3.CHARGE;
    /**
     * ampere in S.I. units.
     */
    public static readonly CURRENT = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.CURRENT);
    /**
     * @deprecated Use CURRENT instead.
     */
    public static readonly ampere = G3.CURRENT;
    /**
     * kelvin in S.I. units.
     */
    public static readonly TEMPERATURE = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.TEMPERATURE);
    /**
     * @deprecated Use TEMPERATUE instead.
     */
    public static readonly kelvin = G3.TEMPERATURE;
    /**
     * mole in S.I. units
     */
    public static readonly AMOUNT = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.AMOUNT);
    /**
     * @deprecated Use AMOUNT instead.
     */
    public static readonly mole = G3.AMOUNT;
    /**
     * candela in S.I. units
     */
    public static readonly INTENSITY = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.INTENSITY);
    /**
     * @deprecated Use INTENSITY instead.
     */
    public static readonly candela = G3.INTENSITY;

    /**
     * The coordinate values are stored in a number array.
     * This should be convenient and efficient for tensor calculations.
     */
    readonly #coords: [number, number, number, number, number, number, number, number] = [0, 0, 0, 0, 0, 0, 0, 0];

    /**
     * @param α The scalar part of the multivector.
     * @param x The vector component of the multivector in the x-direction.
     * @param y The vector component of the multivector in the y-direction.
     * @param z The vector component of the multivector in the z-direction.
     * @param xy The bivector component of the multivector in the xy-plane.
     * @param yz The bivector component of the multivector in the yz-plane.
     * @param zx The bivector component of the multivector in the zx-plane.
     * @param β The pseudoscalar part of the multivector.
     * @param uom The optional unit of measure.
     */
    constructor(
        α: number,
        x: number,
        y: number,
        z: number,
        xy: number,
        yz: number,
        zx: number,
        β: number,
        readonly uom: Unit = Unit.ONE
    ) {
        this.#coords[COORD_SCALAR] = α;
        this.#coords[COORD_X] = x;
        this.#coords[COORD_Y] = y;
        this.#coords[COORD_Z] = z;
        this.#coords[COORD_XY] = xy;
        this.#coords[COORD_YZ] = yz;
        this.#coords[COORD_ZX] = zx;
        this.#coords[COORD_PSEUDO] = β;
        this.uom = uom;
        if (this.uom && this.uom.multiplier !== 1) {
            const multiplier: number = this.uom.multiplier;
            this.#coords[COORD_SCALAR] *= multiplier;
            this.#coords[COORD_X] *= multiplier;
            this.#coords[COORD_Y] *= multiplier;
            this.#coords[COORD_Z] *= multiplier;
            this.#coords[COORD_XY] *= multiplier;
            this.#coords[COORD_YZ] *= multiplier;
            this.#coords[COORD_ZX] *= multiplier;
            this.#coords[COORD_PSEUDO] *= multiplier;
            this.uom = new Unit(1, uom.dimensions, uom.labels);
        }
    }

    /**
     * The scalar part of this multivector.
     */
    get a(): number {
        return this.#coords[COORD_SCALAR];
    }

    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>1</sub></b> basis vector.
     */
    get x(): number {
        return this.#coords[COORD_X];
    }

    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>2</sub></b> basis vector.
     */
    get y(): number {
        return this.#coords[COORD_Y];
    }

    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>3</sub></b> basis vector.
     */
    get z(): number {
        return this.#coords[COORD_Z];
    }

    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub></b> basis bivector.
     */
    get xy(): number {
        return this.#coords[COORD_XY];
    }

    /**
     * The coordinate corresponding to the <b>e<sub>2</sub>e<sub>3</sub></b> basis bivector.
     */
    get yz(): number {
        return this.#coords[COORD_YZ];
    }

    /**
     * The coordinate corresponding to the <b>e<sub>3</sub>e<sub>1</sub></b> basis bivector.
     */
    get zx(): number {
        return this.#coords[COORD_ZX];
    }

    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub>e<sub>3</sub></b> basis trivector.
     * The pseudoscalar coordinate of this multivector.
     */
    get b(): number {
        return this.#coords[COORD_PSEUDO];
    }

    static fromCartesian(α: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, β: number, uom: Unit): G3 {
        return new G3(α, x, y, z, xy, yz, zx, β, uom);
    }

    get coords(): number[] {
        return [this.a, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b];
    }

    coordinate(index: number): number {
        switch (index) {
            case 0:
                return this.a;
            case 1:
                return this.x;
            case 2:
                return this.y;
            case 3:
                return this.z;
            case 4:
                return this.xy;
            case 5:
                return this.yz;
            case 6:
                return this.zx;
            case 7:
                return this.b;
            default:
                throw new Error("index must be in the range [0..7]");
        }
    }

    /**
     * Computes the sum of this multivector and another considered to be the rhs of the binary addition, `+`, operator.
     * This method does not change this multivector.
     */
    add(rhs: G3): G3 {
        if (rhs.isZero) {
            return this;
        } else if (this.isZero) {
            return rhs;
        } else {
            const a = this.a + rhs.a;
            const x = this.x + rhs.x;
            const y = this.y + rhs.y;
            const z = this.z + rhs.z;
            const xy = this.xy + rhs.xy;
            const yz = this.yz + rhs.yz;
            const zx = this.zx + rhs.zx;
            const b = this.b + rhs.b;
            const uom = Unit.compatible(this.uom, rhs.uom);
            return new G3(a, x, y, z, xy, yz, zx, b, uom);
        }
    }

    /**
     * Computes <code>this + Iβ</code>
     */
    addPseudo(β: Unit): G3 {
        return new G3(this.a, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b + β.multiplier, Unit.compatible(this.uom, β));
    }

    /**
     * Computes <code>this + α</code>
     */
    addScalar(α: Unit): G3 {
        return new G3(this.a + α.multiplier, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b, Unit.compatible(this.uom, α));
    }

    /**
     * @returns the arc cosine (or inverse cosine).
     */
    acos(): G3 {
        return new G3(Math.acos(this.a), 0, 0, 0, 0, 0, 0, 0, Unit.ONE);
    }

    __add__(rhs: Unit | G3): G3 {
        if (rhs instanceof G3) {
            return this.add(rhs);
        } else if (rhs instanceof Unit) {
            return this.addScalar(rhs);
        } else {
            return void 0;
        }
    }

    __radd__(lhs: Unit | G3): G3 {
        if (lhs instanceof G3) {
            return lhs.add(this);
        } else if (lhs instanceof Unit) {
            return this.addScalar(lhs);
        } else {
            return void 0;
        }
    }

    adj(): G3 {
        throw new Error(notImplemented("adj").message);
    }

    /**
     * @returns grade(log(this), 2)
     */
    angle(): G3 {
        return this.log().grade(2);
    }

    /**
     * Computes the <e>Clifford conjugate</em> of this multivector.
     * The grade multiplier is -1<sup>x(x+1)/2</sup>
     */
    conj(): G3 {
        return new G3(this.a, -this.x, -this.y, -this.z, -this.xy, -this.yz, -this.zx, +this.b, this.uom);
    }

    /**
     * @param t
     * @param controlBegin
     * @param controlEnd
     * @param endPoint
     */
    cubicBezier(t: number, controlBegin: GeometricCoords, controlEnd: GeometricCoords, endPoint: GeometricCoords): G3 {
        const a = b3(t, this.a, controlBegin.a, controlEnd.a, endPoint.a);
        const x = b3(t, this.x, controlBegin.x, controlEnd.x, endPoint.x);
        const y = b3(t, this.y, controlBegin.y, controlEnd.y, endPoint.y);
        const z = b3(t, this.z, controlBegin.z, controlEnd.z, endPoint.z);
        const b = b3(t, this.b, controlBegin.b, controlEnd.b, endPoint.b);
        return new G3(a, x, y, z, 0, 0, 0, b, this.uom);
    }

    /**
     *
     */
    direction(): G3 {
        return this.div(this.norm());
    }

    /**
     *
     */
    sub(rhs: G3): G3 {
        if (rhs.isZero) {
            return this;
        } else if (this.isZero) {
            return rhs.neg();
        } else {
            const a = this.a - rhs.a;
            const x = this.x - rhs.x;
            const y = this.y - rhs.y;
            const z = this.z - rhs.z;
            const xy = this.xy - rhs.xy;
            const yz = this.yz - rhs.yz;
            const zx = this.zx - rhs.zx;
            const b = this.b - rhs.b;
            const uom = Unit.compatible(this.uom, rhs.uom);
            return new G3(a, x, y, z, xy, yz, zx, b, uom);
        }
    }

    __sub__(rhs: Unit | G3 | undefined): G3 | undefined {
        if (rhs instanceof G3) {
            return this.sub(rhs);
        } else if (rhs instanceof Unit) {
            return this.addScalar(rhs.neg());
        } else {
            return void 0;
        }
    }

    __rsub__(lhs: Unit | G3): G3 {
        if (lhs instanceof G3) {
            return lhs.sub(this);
        } else if (lhs instanceof Unit) {
            return this.neg().addScalar(lhs);
        } else {
            return void 0;
        }
    }

    mul(rhs: G3): G3 {
        const out = new G3(0, 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, rhs.uom));
        mulG3(this, rhs, out.#coords);
        return out;
    }

    __mul__(rhs: G3 | number): G3 {
        if (rhs instanceof G3) {
            return this.mul(rhs);
        } else if (typeof rhs === "number") {
            return this.scale(rhs);
        } else {
            return void 0;
        }
    }

    __rmul__(lhs: G3 | number): G3 {
        if (lhs instanceof G3) {
            return lhs.mul(this);
        } else if (typeof lhs === "number") {
            return this.scale(lhs);
        } else {
            return void 0;
        }
    }

    scale(α: number): G3 {
        return new G3(this.a * α, this.x * α, this.y * α, this.z * α, this.xy * α, this.yz * α, this.zx * α, this.b * α, this.uom);
    }

    div(rhs: G3): G3 {
        return this.mul(rhs.inv());
    }

    divByScalar(α: number): G3 {
        return new G3(this.a / α, this.x / α, this.y / α, this.z / α, this.xy / α, this.yz / α, this.zx / α, this.b / α, this.uom);
    }

    __div__(rhs: G3 | number): G3 {
        if (rhs instanceof G3) {
            return this.div(rhs);
        } else if (typeof rhs === "number") {
            return this.divByScalar(rhs);
        } else {
            return void 0;
        }
    }

    __rdiv__(lhs: G3 | number): G3 {
        if (lhs instanceof G3) {
            return lhs.div(this);
        } else if (typeof lhs === "number") {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).div(this);
        } else {
            return void 0;
        }
    }

    dual(): G3 {
        throw new Error(notImplemented("dual").message);
    }

    scp(rhs: G3): G3 {
        return scpG3(this, rhs, Unit.mul(this.uom, rhs.uom));
    }

    ext(rhs: G3): G3 {
        return extG3(this, rhs, Unit.mul(this.uom, rhs.uom));
    }

    __vbar__(rhs: G3 | number): G3 {
        if (rhs instanceof G3) {
            return this.scp(rhs);
        } else if (typeof rhs === "number") {
            return this.scp(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
        } else {
            return void 0;
        }
    }

    __rvbar__(lhs: G3 | number): G3 {
        if (lhs instanceof G3) {
            return lhs.scp(this);
        } else if (typeof lhs === "number") {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).scp(this);
        } else {
            return void 0;
        }
    }

    __wedge__(rhs: G3 | number): G3 {
        if (rhs instanceof G3) {
            return this.ext(rhs);
        } else if (typeof rhs === "number") {
            return this.scale(rhs);
        } else {
            return void 0;
        }
    }

    __rwedge__(lhs: G3 | number): G3 {
        if (lhs instanceof G3) {
            return lhs.ext(this);
        } else if (typeof lhs === "number") {
            return this.scale(lhs);
        } else {
            return void 0;
        }
    }

    lco(rhs: G3): G3 {
        return lcoG3(this, rhs, Unit.mul(this.uom, rhs.uom));
    }

    __lshift__(rhs: G3 | number): G3 {
        if (rhs instanceof G3) {
            return this.lco(rhs);
        } else if (typeof rhs === "number") {
            return this.lco(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
        } else {
            return void 0;
        }
    }

    __rlshift__(lhs: G3 | number): G3 {
        if (lhs instanceof G3) {
            return lhs.lco(this);
        } else if (typeof lhs === "number") {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).lco(this);
        } else {
            return void 0;
        }
    }

    rco(rhs: G3): G3 {
        return rcoG3(this, rhs, Unit.mul(this.uom, rhs.uom));
    }

    __rshift__(rhs: G3 | number): G3 {
        if (rhs instanceof G3) {
            return this.rco(rhs);
        } else if (typeof rhs === "number") {
            return this.rco(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
        } else {
            return void 0;
        }
    }

    __rrshift__(lhs: G3 | number): G3 {
        if (lhs instanceof G3) {
            return lhs.rco(this);
        } else if (typeof lhs === "number") {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).rco(this);
        } else {
            return void 0;
        }
    }

    pow(exponent: G3): G3 {
        throw new Error(`pow(${exponent})`);
    }

    __bang__(): G3 {
        return this.inv();
    }

    /**
     * Unary plus(+).
     */
    __pos__(): G3 {
        return this;
    }

    /**
     * @returns <code>-1 * this</code>
     */
    neg(): G3 {
        return new G3(-this.a, -this.x, -this.y, -this.z, -this.xy, -this.yz, -this.zx, -this.b, this.uom);
    }

    /**
     * Unary minus (-).
     */
    __neg__(): G3 {
        return this.neg();
    }

    rev(): G3 {
        return new G3(this.a, this.x, this.y, this.z, -this.xy, -this.yz, -this.zx, -this.b, this.uom);
    }

    /**
     * ~ (tilde) produces reversion.
     */
    __tilde__(): G3 {
        return this.rev();
    }

    /**
     * @param grade
     */
    grade(grade: number): G3 {
        switch (grade) {
            case 0:
                return G3.fromCartesian(this.a, 0, 0, 0, 0, 0, 0, 0, this.uom);
            case 1:
                return G3.fromCartesian(0, this.x, this.y, this.z, 0, 0, 0, 0, this.uom);
            case 2:
                return G3.fromCartesian(0, 0, 0, 0, this.xy, this.yz, this.zx, 0, this.uom);
            case 3:
                return G3.fromCartesian(0, 0, 0, 0, 0, 0, 0, this.b, this.uom);
            default:
                return G3.fromCartesian(0, 0, 0, 0, 0, 0, 0, 0, this.uom);
        }
    }

    cross(vector: G3): G3 {
        const x1 = this.x;
        const y1 = this.y;
        const z1 = this.z;
        const x2 = vector.x;
        const y2 = vector.y;
        const z2 = vector.z;
        const x = y1 * z2 - z1 * y2;
        const y = z1 * x2 - x1 * z2;
        const z = x1 * y2 - y1 * x2;
        return new G3(0, x, y, z, 0, 0, 0, 0, Unit.mul(this.uom, vector.uom));
    }

    get isDimensionless(): boolean {
        if (this.uom) {
            return this.uom.isOne();
        } else {
            return true;
        }
    }

    get isDefined(): boolean {
        return !this.isNaN;
    }

    get isNaN(): boolean {
        return isNaN(this.a) || isNaN(this.x) || isNaN(this.y) || isNaN(this.z) || isNaN(this.yz) || isNaN(this.zx) || isNaN(this.xy) || isNaN(this.b);
    }

    get isOne(): boolean {
        return this.a === 1 && this.x === 0 && this.y === 0 && this.z === 0 && this.yz === 0 && this.zx === 0 && this.xy === 0 && this.b === 0;
    }

    get isScalar(): boolean {
        return this.x === 0 && this.y === 0 && this.z === 0 && this.yz === 0 && this.zx === 0 && this.xy === 0 && this.b === 0;
    }

    get isZero(): boolean {
        return this.a === 0 && this.x === 0 && this.y === 0 && this.z === 0 && this.yz === 0 && this.zx === 0 && this.xy === 0 && this.b === 0;
    }

    lerp(target: G3, α: number): G3 {
        throw new Error(notImplemented(`lerp(target=${target}, α=${α})`).message);
    }

    cos(): G3 {
        // TODO: Generalize to full multivector.
        Unit.assertDimensionless(this.uom);
        const cosW = Math.cos(this.a);
        return new G3(cosW, 0, 0, 0, 0, 0, 0, 0, Unit.ONE);
    }

    cosh(): G3 {
        throw new Error(notImplemented("cosh").message);
    }

    distanceTo(point: G3): G3 {
        return this.sub(point).magnitude();
    }

    equals(other: G3): boolean {
        if (this.a === other.a && this.x === other.x && this.y === other.y && this.z === other.z && this.xy === other.xy && this.yz === other.yz && this.zx === other.zx && this.b === other.b) {
            if (this.uom) {
                if (other.uom) {
                    // TODO: We need equals on
                    return true;
                } else {
                    return false;
                }
            } else {
                if (other.uom) {
                    return false;
                } else {
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    exp(): G3 {
        Unit.assertDimensionless(this.uom);
        const bivector = this.grade(2);
        const a = bivector.norm();
        if (!a.isZero) {
            const c = a.cos();
            const s = a.sin();
            const B = bivector.direction();
            return c.add(B.mul(s));
        } else {
            return new G3(1, 0, 0, 0, 0, 0, 0, 0, this.uom);
        }
    }

    /**
     * Computes the <em>inverse</em> of this multivector, if it exists.
     */
    inv(): G3 {
        const α = this.a;
        const x = this.x;
        const y = this.y;
        const z = this.z;
        const xy = this.xy;
        const yz = this.yz;
        const zx = this.zx;
        const β = this.b;

        const A = [
            [α, x, y, z, -xy, -yz, -zx, -β],
            [x, α, xy, -zx, -y, -β, z, -yz],
            [y, -xy, α, yz, x, -z, -β, -zx],
            [z, zx, -yz, α, -β, y, -x, -xy],
            [xy, -y, x, β, α, zx, -yz, z],
            [yz, β, -z, y, -zx, α, xy, x],
            [zx, z, β, -x, yz, -xy, α, y],
            [β, yz, zx, xy, z, x, y, α]
        ];

        const b = [1, 0, 0, 0, 0, 0, 0, 0];

        const X = gauss(A, b);

        const uom = this.uom ? this.uom.inv() : void 0;
        return new G3(X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7], uom);
    }

    /**
     *
     */
    log(): G3 {
        throw new Error(notImplemented("log").message);
    }

    /**
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     */
    magnitude(): G3 {
        return this.norm();
    }

    /**
     * Intentionally undocumented.
     */
    magnitudeSansUnits(): number {
        return Math.sqrt(this.squaredNormSansUnits());
    }

    /**
     * Computes the magnitude of this G3. The magnitude is the square root of the quadrance.
     */
    norm(): G3 {
        return new G3(this.magnitudeSansUnits(), 0, 0, 0, 0, 0, 0, 0, this.uom);
    }

    /**
     * Computes the quadrance of this G3. The quadrance is the square of the magnitude.
     */
    quad(): G3 {
        return this.squaredNorm();
    }

    /**
     * @param t
     * @param controlPoint
     * @param endPoint
     */
    quadraticBezier(t: number, controlPoint: GeometricCoords, endPoint: GeometricCoords): G3 {
        const x = b2(t, this.x, controlPoint.x, endPoint.x);
        const y = b2(t, this.y, controlPoint.y, endPoint.y);
        const z = b2(t, this.z, controlPoint.z, endPoint.z);
        return new G3(0, x, y, z, 0, 0, 0, 0, this.uom);
    }

    squaredNorm(): G3 {
        return new G3(this.squaredNormSansUnits(), 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, this.uom));
    }

    /**
     * Intentionally undocumented
     */
    squaredNormSansUnits(): number {
        return squaredNormG3(this);
    }

    /**
     * @param σ
     */
    stress(σ: VectorCoords): G3 {
        throw new Error(notSupported(`stress(σ=${σ})`).message);
    }

    /**
     * Computes the <em>reflection</em> of this multivector in the plane with normal <code>n</code>.
     * @param n
     */
    reflect(n: G3): G3 {
        return n.mul(this).mul(n).scale(-1);
    }

    rotate(R: SpinorCoords) {
        // FIXME: This only rotates the vector components.
        // The units may be suspect to if rotate is not clearly defined.
        const x = this.x;
        const y = this.y;
        const z = this.z;

        const a = R.xy;
        const b = R.yz;
        const c = R.zx;
        const α = R.a;
        const quadR = quadSpinorE3(R);

        const ix = α * x - c * z + a * y;
        const iy = α * y - a * x + b * z;
        const iz = α * z - b * y + c * x;
        const iα = b * x + c * y + a * z;

        const αOut = quadR * this.a;
        const xOut = ix * α + iα * b + iy * a - iz * c;
        const yOut = iy * α + iα * c + iz * b - ix * a;
        const zOut = iz * α + iα * a + ix * c - iy * b;
        const βOut = quadR * this.b;

        return G3.fromCartesian(αOut, xOut, yOut, zOut, 0, 0, 0, βOut, this.uom);
    }

    sin(): G3 {
        // TODO: Generalize to full multivector.
        Unit.assertDimensionless(this.uom);
        const sinW = Math.sin(this.a);
        return new G3(sinW, 0, 0, 0, 0, 0, 0, 0, void 0);
    }

    sinh(): G3 {
        throw new Error(notImplemented("sinh").message);
    }

    slerp(target: G3, α: number): G3 {
        throw new Error(notImplemented(`slerp(target=${target}, α=${α})`).message);
    }

    sqrt(): G3 {
        return new G3(Math.sqrt(this.a), 0, 0, 0, 0, 0, 0, 0, Unit.sqrt(this.uom));
    }

    tan(): G3 {
        return this.sin().div(this.cos());
    }

    /**
     * Intentionally undocumented.
     * @param dimensionLabels e.g. ["kg", "m", "s", "C", "K", "mol", "cd"]
     */
    toStringCustom(coordToString: (x: number) => string, dimensionLabels: [string, string, string, string, string, string, string], basisLabels: (string | string[])[]): string {
        const quantityString: string = stringFromCoordinates(this.coords, coordToString, basisLabels);
        if (this.uom) {
            // Use the compact representation of the Unit because the units follow the multivector
            // quantity and we want to suppress the multiplier which is always 1.
            const unitString = this.uom.toString(10, true).trim();
            if (unitString) {
                return quantityString + " " + unitString;
            } else {
                return quantityString;
            }
        } else {
            return quantityString;
        }
    }

    toExponential(fractionDigits?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toExponential(fractionDigits);
        };
        return this.toStringCustom(coordToString, ["kg", "m", "s", "C", "K", "mol", "cd"], G3.BASIS_LABELS);
    }

    toFixed(fractionDigits?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toFixed(fractionDigits);
        };
        return this.toStringCustom(coordToString, ["kg", "m", "s", "C", "K", "mol", "cd"], G3.BASIS_LABELS);
    }

    toPrecision(precision?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toPrecision(precision);
        };
        return this.toStringCustom(coordToString, ["kg", "m", "s", "C", "K", "mol", "cd"], G3.BASIS_LABELS);
    }

    toString(radix?: number): string {
        // We have to scale this number appropriately
        const seven: [[G3, string], [G3, string], [G3, string], [G3, string], [G3, string], [G3, string], [G3, string]] = [
            [G3.MASS, "kg"],
            [G3.LENGTH, "m"],
            [G3.TIME, "s"],
            [G3.CHARGE, "C"],
            [G3.TEMPERATURE, "K"],
            [G3.AMOUNT, "mol"],
            [G3.INTENSITY, "cd"]
        ];
        const dimensionLabels = seven.map((pair) => pair[1]) as [string, string, string, string, string, string, string];
        // We need to scale this quantity according to the dimensions and then call the toStringCustom
        /*
        const dims = this.uom.dimensions
        const M = dims.M
        const L = dims.L
        const T = dims.T
        const Q = dims.Q
        L.numer
        L.denom
        */
        const coordToString = function (coord: number): string {
            return coord.toString(radix);
        };
        return this.toStringCustom(coordToString, dimensionLabels, G3.BASIS_LABELS);
    }

    __eq__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in equality expression: ${this.uom.dimensions} === ${rhs.uom.dimensions}`, { cause });
            }
            return this.a === rhs.a && this.x === rhs.x && this.y === rhs.y && this.z === rhs.z && this.xy === rhs.xy && this.yz === rhs.yz && this.zx === rhs.zx && this.b === rhs.b;
        } else {
            return void 0;
        }
    }

    __ne__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in inequality expression: ${this.uom.dimensions} !== ${rhs.uom.dimensions}`, { cause });
            }
            return this.a !== rhs.a || this.x !== rhs.x || this.y !== rhs.y || this.z !== rhs.z || this.xy !== rhs.xy || this.yz !== rhs.yz || this.zx !== rhs.zx || this.b !== this.b;
        } else {
            return void 0;
        }
    }

    __ge__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} >= ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a >= rhs.a;
        } else {
            return void 0;
        }
    }

    __gt__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} > ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a > rhs.a;
        } else {
            return void 0;
        }
    }

    __le__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} <= ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a <= rhs.a;
        } else {
            return void 0;
        }
    }

    __lt__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} < ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a < rhs.a;
        } else {
            return void 0;
        }
    }

    line(direction: G3): Line {
        return new Line(this, direction);
    }

    plane(normal: G3): Plane {
        return new Plane(this, normal);
    }

    static random(uom: Unit): G3 {
        return new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), uom);
    }
}

export class Line {
    constructor(
        readonly through: G3,
        readonly direction: G3
    ) {}
    meetsPlane(plane: Plane): G3 {
        return meet_of_line_and_plane(this, plane);
    }
}

export class Plane {
    constructor(
        readonly through: G3,
        readonly normal: G3
    ) {}
    meetsLine(line: Line): G3 {
        return meet_of_line_and_plane(line, this);
    }
}

function meet_of_line_and_plane(line: Line, plane: Plane): G3 {
    // Let x = p + μ d be a point in the plane.
    // Using | as the symbol for the scalar (a.k.a. dot) product,
    // Since x lies in the plane <=> (q - x) | n = 0, because q - x is a vector in the plane.
    // Solving for μ, μ = (q - p) | n / (n | d)
    const n = plane.normal;
    const q = plane.through;
    const p = line.through;
    const d = line.direction;
    const q_minus_p = q.sub(p);
    const numer = q_minus_p.scp(n);
    const denom = n.scp(d);
    const μ = numer.div(denom);
    return p.add(μ.mul(d));
}

export function max(a: G3, b: G3): G3 {
    // TODO: We should test for scalars and the same dimensions
    if (a.a > b.a) {
        return a;
    } else {
        return b;
    }
}

export function min(a: G3, b: G3): G3 {
    // TODO: We should test for scalars and the same dimensions
    if (a.a < b.a) {
        return a;
    } else {
        return b;
    }
}

export function ascending(a: G3, b: G3): 0 | 1 | -1 {
    if (a.a > b.a) {
        return 1;
    } else if (a.a < b.a) {
        return -1;
    } else {
        return 0;
    }
}

export function descending(a: G3, b: G3): 0 | 1 | -1 {
    if (a.a > b.a) {
        return -1;
    } else if (a.a < b.a) {
        return 1;
    } else {
        return 0;
    }
}

export function eq(x1: G3, x2: G3): boolean {
    if (x2.isZero) {
        return x1.isZero;
    } else {
        try {
            const ratio = x1.div(x2);
            if (ratio.uom) {
                if (ratio.uom.isOne()) {
                    return x1.sub(x2).isZero;
                } else {
                    return false;
                }
            } else {
                return x1.sub(x2).isZero;
            }
        } catch (cause) {
            throw new Error(`equals_number_number(x1=${x1}, x2=${x2}).`, { cause });
        }
    }
}

export function ge(a: G3, b: G3): boolean {
    if (a.a > b.a) {
        return true;
    } else if (a.a < b.a) {
        return false;
    } else {
        return true;
    }
}

export function gt(a: G3, b: G3): boolean {
    if (a.a > b.a) {
        return true;
    } else if (a.a < b.a) {
        return false;
    } else {
        return false;
    }
}

export function le(a: G3, b: G3): boolean {
    if (a.a > b.a) {
        return false;
    } else if (a.a < b.a) {
        return true;
    } else {
        return true;
    }
}

export function lt(a: G3, b: G3): boolean {
    if (a.a > b.a) {
        return false;
    } else if (a.a < b.a) {
        return true;
    } else {
        return false;
    }
}

/**
 * Returns the 2nd argument applied to the first argument.
 * @param x A scalar.
 * @param fn A function that takes a number and returns a number.
 */
function math_1_arg(x: G3, fn: (x: number) => number): G3 {
    if (x.isZero) {
        return G3.zero;
    } else {
        return x.divByScalar(x.a).scale(fn(x.a));
    }
}

function math_2_args(a: G3, b: G3, fn: (a: number, b: number) => number): G3 {
    if (a.isZero) {
        return G3.zero;
    } else {
        return a.divByScalar(a.a).scale(fn(a.a, b.a));
    }
}

export function mod(a: G3, b: G3): G3 {
    return math_2_args(a, b, (a: number, b: number) => a % b);
}

export function ceiling(x: G3): G3 {
    return math_1_arg(x, Math.ceil);
}

/**
 * Returns the greatest integer less than or equal to the argument.
 * @param x A scalar.
 */
export function floor(x: G3): G3 {
    return math_1_arg(x, Math.floor);
}

/**
 * Returns the argument rounded to the nearest integer.
 * @param x A scalar.
 */
export function round(x: G3): G3 {
    return math_1_arg(x, Math.round);
}

/**
 * Returns the arc cosine (or inverse cosine) of the argument.
 * @param x A scalar.
 */
export function acos(x: G3): G3 {
    return math_1_arg(x, Math.acos);
}

export function sum(xs: Readonly<G3[]>): G3 {
    return xs.reduce((accumulator, x) => accumulator.add(x), G3.zero);
}

export function product(xs: Readonly<G3[]>): G3 {
    return xs.reduce((accumulator, x) => accumulator.mul(x), G3.one);
}
