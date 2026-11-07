//
import notImplemented from "../i18n/notImplemented";
import notSupported from "../i18n/notSupported";
import b2 from "./bezier2";
import b3 from "./bezier3";
import extE2 from "./extE2";
import gauss from "./gauss";
import { GeometricE2 } from "./GeometricE2";
import { GeometricNumber } from "./GeometricNumber";
import GeometricOperators from "./GeometricOperators";
import ImmutableMeasure from "./ImmutableMeasure";
import lcoE2 from "./lcoE2";
import mulE2 from "./mulE2";
//
import readOnly from "../i18n/readOnly";
import rcoE2 from "./rcoE2";
import scpE2 from "./scpE2";
import { SpinorE2 } from "./SpinorE2";
//
import { stringFromCoordinates } from "./stringFromCoordinates";
//
import TrigMethods from "./TrigMethods";
import { Unit } from "./Unit";
import { VectorE2 } from "./VectorE2";
//
//
//
//

const COORD_SCALAR = 0;
const COORD_X = 1;
const COORD_Y = 2;
//
//
//
//
const COORD_PSEUDO = 3;

function add00(a00: number, a01: number, a10: number, a11: number, b00: number, b01: number, b10: number, b11: number): number {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a00 + b00);
}

function add01(a00: number, a01: number, a10: number, a11: number, b00: number, b01: number, b10: number, b11: number): number {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a01 + b01);
}

function add10(a00: number, a01: number, a10: number, a11: number, b00: number, b01: number, b10: number, b11: number): number {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a10 + b10);
}

function add11(a00: number, a01: number, a10: number, a11: number, b00: number, b01: number, b10: number, b11: number): number {
    a00 = +a00;
    a01 = +a01;
    a10 = +a10;
    a11 = +a11;
    b00 = +b00;
    b01 = +b01;
    b10 = +b10;
    b11 = +b11;
    return +(a11 + b11);
}

function subE2(a0: number, a1: number, a2: number, a3: number, b0: number, b1: number, b2: number, b3: number, index: number): number {
    a0 = +a0;
    a1 = +a1;
    a2 = +a2;
    a3 = +a3;
    b0 = +b0;
    b1 = +b1;
    b2 = +b2;
    b3 = +b3;
    index = index | 0;
    let x = 0.0;
    switch (~~index) {
        case 0:
            {
                x = +(a0 - b0);
            }
            break;
        case 1:
            {
                x = +(a1 - b1);
            }
            break;
        case 2:
            {
                x = +(a2 - b2);
            }
            break;
        case 3:
            {
                x = +(a3 - b3);
            }
            break;
        default: {
            throw new Error("index must be in the range [0..3]");
        }
    }
    return +x;
}

/**
 * <p>
 * The <code>G2</code> class represents a multivector for a 2-dimensional vector space with a Euclidean metric.
 * </p>
 * <p>
 * The <code>G2</code> class is immutable, making it easy to reason about values.
 * </p>
 * <p>
 * The <code>G2</code> class supports units of measures.
 * </p>
 * <p>
 * The immutable nature of the <p>G2</p> makes it less suitable for high performance graphics applications.
 * </p>
 */
export class G2 implements ImmutableMeasure<G2>, GeometricE2, GeometricNumber<G2, G2, SpinorE2, VectorE2, G2, number, Unit>, GeometricOperators<G2, Unit>, TrigMethods<G2> {
    /**
     * The coordinate values are stored in a number array.
     * This should be convenient and efficient for tensor calculations.
     *
     * @property _coords
     * @type number[]
     * @private
     */
    private _coords: number[] = [0, 0, 0, 0];

    /**
     * @property uom
     * @type {Unit}
     */
    public uom: Unit;

    /**
     * @property _zero
     * @type G2
     * @private
     */
    private static _zero = new G2(0, 0, 0, 0);

    /**
     * @property zero
     * @type G2
     */
    public static get zero() {
        return G2._zero;
    }
    public static set zero(unused) {
        throw new Error(readOnly("zero").message);
    }

    /**
     * @property _one
     * @type G2
     * @private
     */
    private static _one = new G2(1, 0, 0, 0);

    /**
     * @property one
     * @type G2
     */
    public static get one() {
        return G2._one;
    }
    public static set one(unused) {
        throw new Error(readOnly("one").message);
    }

    /**
     * @property _e2
     * @type G2
     * @private
     */
    private static _e1 = new G2(0, 1, 0, 0);

    /**
     * @property e1
     * @type G2
     */
    public static get e1() {
        return G2._e1;
    }
    public static set e1(unused) {
        throw new Error(readOnly("e1").message);
    }

    private static _e2 = new G2(0, 0, 1, 0);

    /**
     * @property e2
     * @type G2
     */
    public static get e2() {
        return G2._e2;
    }
    public static set e2(unused) {
        throw new Error(readOnly("e2").message);
    }

    private static _I = new G2(0, 0, 0, 1);

    /**
     * @property I
     * @type G2
     */
    public static get I() {
        return G2._I;
    }
    public static set I(unused) {
        throw new Error(readOnly("I").message);
    }

    /**
     * kilogram in S.I. units.
     */
    public static readonly MASS = new G2(1, 0, 0, 0, Unit.MASS);
    /**
     * @deprecated Use MASS instead.
     */
    public static readonly kilogram = G2.MASS;
    /**
     * meter in S.I. units.
     */
    public static readonly LENGTH = new G2(1, 0, 0, 0, Unit.LENGTH);
    /**
     * @deprecated Use LENGTH instead.
     */
    public static readonly meter = G2.LENGTH;
    /**
     * second in S.I. units.
     */
    public static readonly TIME = new G2(1, 0, 0, 0, Unit.TIME);
    /**
     * @deprecated Use TIME instead.
     */
    public static readonly second = G2.TIME;
    /**
     * coulomb in S.I. units.
     */
    public static readonly CHARGE = new G2(1, 0, 0, 0, Unit.CHARGE);
    /**
     * @deprecated Use CHARGE instead.
     */
    public static readonly coulomb = G2.CHARGE;
    /**
     * ampere in S.I. units.
     */
    public static readonly CURRENT = new G2(1, 0, 0, 0, Unit.CURRENT);
    /**
     * @deprecated Use CURRENT instead.
     */
    public static readonly ampere = G2.CURRENT;
    /**
     * kelvin in S.I. units.
     */
    public static readonly TEMPERATURE = new G2(1, 0, 0, 0, Unit.TEMPERATURE);
    /**
     * @deprecated Use TEMPERATURE instead.
     */
    public static readonly kelvin = G2.TEMPERATURE;
    /**
     * mole in S.I. units.
     */
    public static readonly AMOUNT = new G2(1, 0, 0, 0, Unit.AMOUNT);
    /**
     * @deprecated Use AMOUNT instead.
     */
    public static readonly mole = G2.AMOUNT;
    /**
     * candela in S.I. units.
     */
    public static readonly INTENSITY = new G2(1, 0, 0, 0, Unit.INTENSITY);
    /**
     * @deprecated Use INTENSITY instead.
     */
    public static readonly candela = G2.INTENSITY;

    /**
     * @class G2
     * @param [α = 0] The scalar part of the multivector.
     * @param [x = 0] The vector component of the multivector in the x-direction.
     * @param [y = 0] The vector component of the multivector in the y-direction.
     * @param [β = 0] The pseudoscalar part of the multivector.
     * @param [uom] The optional unit of measure.
     */
    constructor(α = 0, x = 0, y = 0, β = 0, uom?: Unit) {
        this._coords[COORD_SCALAR] = α;
        this._coords[COORD_X] = x;
        this._coords[COORD_Y] = y;
        this._coords[COORD_PSEUDO] = β;
        this.uom = uom;
        if (this.uom && this.uom.multiplier !== 1) {
            const multiplier: number = this.uom.multiplier;
            this._coords[COORD_SCALAR] *= multiplier;
            this._coords[COORD_X] *= multiplier;
            this._coords[COORD_Y] *= multiplier;
            this._coords[COORD_PSEUDO] *= multiplier;
            this.uom = new Unit(1, uom.dimensions, uom.labels);
        }
    }

    /**
     * The scalar part of this multivector.
     */
    get a(): number {
        return this._coords[COORD_SCALAR];
    }
    set a(unused) {
        throw new Error(readOnly("a").message);
    }

    /**
     * The coordinate corresponding to the <b>e1</b> basis vector, without the unit of measure.
     *
     * @property x
     * @type number
     */
    get x(): number {
        return this._coords[COORD_X];
    }
    set x(unused) {
        throw new Error(readOnly("x").message);
    }

    /**
     * The coordinate corresponding to the <b>e2</b> basis vector, without the unit of measure.
     *
     * @property y
     * @type number
     */
    get y(): number {
        return this._coords[COORD_Y];
    }
    set y(unused) {
        throw new Error(readOnly("y").message);
    }

    /**
     * The pseudoscalar part of this multivector.
     * @property beta
     * @type number
     */
    get b(): number {
        return this._coords[COORD_PSEUDO];
    }
    set b(unused) {
        throw new Error(readOnly("b").message);
    }

    static fromCartesian(α: number, x: number, y: number, β: number, uom: Unit): G2 {
        return new G2(α, x, y, β, uom);
    }

    get coords(): number[] {
        return [this.a, this.x, this.y, this.b];
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
                return this.b;
            default:
                throw new Error("index must be in the range [0..3]");
        }
    }

    // FIXME: This function forces the creation of temporary arrays.
    private static add(a: number[], b: number[]): number[] {
        const a00 = a[0];
        const a01 = a[1];
        const a10 = a[2];
        const a11 = a[3];
        const b00 = b[0];
        const b01 = b[1];
        const b10 = b[2];
        const b11 = b[3];
        const x00 = add00(a00, a01, a10, a11, b00, b01, b10, b11);
        const x01 = add01(a00, a01, a10, a11, b00, b01, b10, b11);
        const x10 = add10(a00, a01, a10, a11, b00, b01, b10, b11);
        const x11 = add11(a00, a01, a10, a11, b00, b01, b10, b11);
        return [x00, x01, x10, x11];
    }

    /**
     * @param rhs {G2}
     * @return {G2}
     */
    add(rhs: G2): G2 {
        if (rhs.isZero()) {
            return this;
        } else if (this.isZero()) {
            return rhs;
        } else {
            const xs = G2.add(this.coords, rhs.coords);
            return new G2(xs[0], xs[1], xs[2], xs[3], Unit.compatible(this.uom, rhs.uom));
        }
    }

    /**
     * Computes <code>this + Iβ</code>
     */
    addPseudo(β: Unit): G2 {
        return new G2(this.a, this.x, this.y, this.b + β.multiplier, Unit.compatible(this.uom, β));
    }

    /**
     * Computes <code>this + α</code>
     */
    addScalar(α: Unit): G2 {
        return new G2(this.a + α.multiplier, this.x, this.y, this.b, Unit.compatible(this.uom, α));
    }

    __add__(other: G2): G2 {
        if (other instanceof G2) {
            return this.add(other);
        } else if (typeof other === "number") {
            return this.add(new G2(other, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __radd__(other: G2): G2 {
        if (other instanceof G2) {
            return (<G2>other).add(this);
        } else if (typeof other === "number") {
            return new G2(other, 0, 0, 0, undefined).add(this);
        } else {
            return void 0;
        }
    }

    adj(): G2 {
        throw new Error(notImplemented("adj").message);
    }

    /**
     * @returns grade(log(this), 2)
     */
    angle(): G2 {
        return this.log().grade(2);
    }

    /**
     * Computes the <e>Clifford conjugate</em> of this multivector.
     * The grade multiplier is -1<sup>x(x+1)/2</sup>
     */
    conj(): G2 {
        throw new Error(notImplemented("conj").message);
    }

    /**
     * @param t
     * @param controlBegin
     * @param controlEnd
     * @param endPoint
     */
    cubicBezier(t: number, controlBegin: GeometricE2, controlEnd: GeometricE2, endPoint: GeometricE2) {
        const α = b3(t, this.a, controlBegin.a, controlEnd.a, endPoint.a);
        const x = b3(t, this.x, controlBegin.x, controlEnd.x, endPoint.x);
        const y = b3(t, this.y, controlBegin.y, controlEnd.y, endPoint.y);
        const β = b3(t, this.b, controlBegin.b, controlEnd.b, endPoint.b);
        return new G2(α, x, y, β, this.uom);
    }

    /**
     * @return {G2}
     */
    public direction(): G2 {
        const m: number = this.magnitudeSansUnits();
        if (m !== 1) {
            return new G2(this.a / m, this.x / m, this.y / m, this.b / m);
        } else {
            if (this.uom) {
                return new G2(this.a, this.x, this.y, this.b);
            } else {
                return this;
            }
        }
    }

    /**
     * @param point
     */
    distanceTo(point: GeometricE2): number {
        throw new Error(notImplemented(`distanceTo(point=${point})`).message);
    }

    /**
     * @param point
     * @return {boolean}
     */
    equals(point: GeometricE2): boolean {
        throw new Error(notImplemented(`equals(${point})`).message);
    }

    private static sub(a: number[], b: number[]): number[] {
        const a0 = a[0];
        const a1 = a[1];
        const a2 = a[2];
        const a3 = a[3];
        const b0 = b[0];
        const b1 = b[1];
        const b2 = b[2];
        const b3 = b[3];
        const x0 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
        const x1 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
        const x2 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
        const x3 = subE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
        return [x0, x1, x2, x3];
    }

    /**
     *
     */
    sub(rhs: G2): G2 {
        if (rhs.isZero()) {
            return this;
        } else if (this.isZero()) {
            return rhs.neg();
        } else {
            const xs = G2.sub(this.coords, rhs.coords);
            return new G2(xs[0], xs[1], xs[2], xs[3], Unit.compatible(this.uom, rhs.uom));
        }
    }

    __sub__(rhs: Unit | G2 | number): G2 {
        if (rhs instanceof G2) {
            return this.sub(rhs);
        } else if (rhs instanceof Unit) {
            return this.addScalar(rhs.neg());
        } else if (typeof rhs === "number") {
            return this.sub(new G2(rhs, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rsub__(lhs: Unit | G2 | number): G2 {
        if (lhs instanceof G2) {
            return lhs.sub(this);
        } else if (lhs instanceof Unit) {
            return this.neg().addScalar(lhs);
        } else if (typeof lhs === "number") {
            return new G2(lhs, 0, 0, 0, undefined).sub(this);
        } else {
            return void 0;
        }
    }

    mul(rhs: G2): G2 {
        const a0 = this.a;
        const a1 = this.x;
        const a2 = this.y;
        const a3 = this.b;
        const b0 = rhs.a;
        const b1 = rhs.x;
        const b2 = rhs.y;
        const b3 = rhs.b;
        // TODO: Split into four functions to avoid conditionals or inline.
        const c0 = mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
        const c1 = mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
        const c2 = mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
        const c3 = mulE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
        return new G2(c0, c1, c2, c3, Unit.mul(this.uom, rhs.uom));
    }

    __mul__(other: G2): G2 {
        if (other instanceof G2) {
            return this.mul(other);
        } else if (typeof other === "number") {
            return this.mul(new G2(other, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rmul__(other: G2): G2 {
        if (other instanceof G2) {
            const lhs: G2 = other;
            return lhs.mul(this);
        } else if (typeof other === "number") {
            const w: number = other;
            return new G2(w, 0, 0, 0, undefined).mul(this);
        } else {
            return void 0;
        }
    }

    scale(α: number): G2 {
        return new G2(this.a * α, this.x * α, this.y * α, this.b * α, this.uom);
    }

    div(rhs: G2): G2 {
        return this.mul(rhs.inv());
    }

    divByScalar(α: number): G2 {
        return new G2(this.a / α, this.x / α, this.y / α, this.b / α, this.uom);
    }

    __div__(other: G2): G2 {
        if (other instanceof G2) {
            return this.div(other);
        } else if (typeof other === "number") {
            const w: number = other;
            return this.div(new G2(w, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rdiv__(other: number | G2): G2 {
        if (other instanceof G2) {
            return other.div(this);
        } else if (typeof other === "number") {
            return new G2(other, 0, 0, 0, undefined).div(this);
        } else {
            return void 0;
        }
    }

    /**
     * @param rhs {G2}
     * @return {G2}
     */
    scp(rhs: G2): G2 {
        const a0 = this.a;
        const a1 = this.x;
        const a2 = this.y;
        const a3 = this.b;

        const b0 = rhs.a;
        const b1 = rhs.x;
        const b2 = rhs.y;
        const b3 = rhs.b;

        const c0 = scpE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
        return new G2(c0, 0, 0, 0, Unit.mul(this.uom, rhs.uom));
    }

    private static ext(a: number[], b: number[]): number[] {
        const a0: number = a[0];
        const a1: number = a[1];
        const a2: number = a[2];
        const a3: number = a[3];
        const b0: number = b[0];
        const b1: number = b[1];
        const b2: number = b[2];
        const b3: number = b[3];
        const x0: number = extE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
        const x1: number = extE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
        const x2: number = extE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
        const x3: number = extE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
        return [x0, x1, x2, x3];
    }

    /**
     * @param rhs {G2}
     * @return {G2}
     */
    ext(rhs: G2): G2 {
        const xs = G2.ext(this.coords, rhs.coords);
        return new G2(xs[0], xs[1], xs[2], xs[3], Unit.mul(this.uom, rhs.uom));
    }

    __wedge__(other: G2): G2 {
        if (other instanceof G2) {
            const rhs: G2 = other;
            return this.ext(rhs);
        } else if (typeof other === "number") {
            const w: number = other;
            return this.ext(new G2(w, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rwedge__(other: G2): G2 {
        if (other instanceof G2) {
            const lhs: G2 = other;
            return lhs.ext(this);
        } else if (typeof other === "number") {
            const w: number = other;
            return new G2(w, 0, 0, 0, undefined).ext(this);
        } else {
            return void 0;
        }
    }

    private static lshift(a: number[], b: number[]): number[] {
        const a0 = a[0];
        const a1 = a[1];
        const a2 = a[2];
        const a3 = a[3];
        const b0 = b[0];
        const b1 = b[1];
        const b2 = b[2];
        const b3 = b[3];
        const x0 = lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
        const x1 = lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
        const x2 = lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
        const x3 = lcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
        return [x0, x1, x2, x3];
    }

    /**
     * @param target {G2}
     * @param α {number}
     * @return {G2}
     */
    lerp(target: G2, α: number): G2 {
        throw new Error(notImplemented(`lerp(target=${target}, α=${α})`).message);
    }

    /**
     * @param rhs
     * @return {G2}
     */
    lco(rhs: G2): G2 {
        const xs = G2.lshift(this.coords, rhs.coords);
        return new G2(xs[0], xs[1], xs[2], xs[3], Unit.mul(this.uom, rhs.uom));
    }

    __lshift__(other: G2): G2 {
        if (other instanceof G2) {
            const rhs: G2 = other;
            return this.lco(rhs);
        } else if (typeof other === "number") {
            const w: number = other;
            return this.lco(new G2(w, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rlshift__(other: G2): G2 {
        if (other instanceof G2) {
            const lhs: G2 = other;
            return lhs.lco(this);
        } else if (typeof other === "number") {
            const w: number = other;
            return new G2(w, 0, 0, 0, undefined).lco(this);
        } else {
            return void 0;
        }
    }

    private static rshift(a: number[], b: number[]): number[] {
        const a0 = a[0];
        const a1 = a[1];
        const a2 = a[2];
        const a3 = a[3];
        const b0 = b[0];
        const b1 = b[1];
        const b2 = b[2];
        const b3 = b[3];
        const x0 = rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 0);
        const x1 = rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 1);
        const x2 = rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 2);
        const x3 = rcoE2(a0, a1, a2, a3, b0, b1, b2, b3, 3);
        return [x0, x1, x2, x3];
    }

    /**
     * @param rhs {G2}
     * @return {G2}
     */
    rco(rhs: G2): G2 {
        const xs = G2.rshift(this.coords, rhs.coords);
        return new G2(xs[0], xs[1], xs[2], xs[3], Unit.mul(this.uom, rhs.uom));
    }

    __rshift__(other: G2): G2 {
        if (other instanceof G2) {
            return this.rco(other);
        } else if (typeof other === "number") {
            return this.rco(new G2(other, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rrshift__(other: G2): G2 {
        if (other instanceof G2) {
            return (<G2>other).rco(this);
        } else if (typeof other === "number") {
            return new G2(other, 0, 0, 0, undefined).rco(this);
        } else {
            return void 0;
        }
    }

    __vbar__(other: G2): G2 {
        if (other instanceof G2) {
            return this.scp(other);
        } else if (typeof other === "number") {
            return this.scp(new G2(other, 0, 0, 0, undefined));
        } else {
            return void 0;
        }
    }

    __rvbar__(other: G2): G2 {
        if (other instanceof G2) {
            return (<G2>other).scp(this);
        } else if (typeof other === "number") {
            return new G2(other, 0, 0, 0, undefined).scp(this);
        } else {
            return void 0;
        }
    }

    /**
     * @param exponent {G2}
     * @return {G2}
     */
    pow(exponent: G2): G2 {
        throw new Error(notImplemented(`pow(${exponent})`).message);
    }

    __bang__(): G2 {
        return this.inv();
    }

    __pos__(): G2 {
        return this;
    }

    /**
     * @return {G2}
     */
    neg(): G2 {
        return new G2(-this.a, -this.x, -this.y, -this.b, this.uom);
    }

    __neg__(): G2 {
        return this.neg();
    }

    /**
     * ~ (tilde) produces reversion.
     */
    __tilde__(): G2 {
        return this.rev();
    }

    /**
     * @param grade {number}
     * @return {G2}
     */
    grade(grade: number): G2 {
        switch (grade) {
            case 0:
                return new G2(this.a, 0, 0, 0, this.uom);
            case 1:
                return new G2(0, this.x, this.y, 0, this.uom);
            case 2:
                return new G2(0, 0, 0, this.b, this.uom);
            default:
                return new G2(0, 0, 0, 0, this.uom);
        }
    }

    /**
     * @return {G2}
     */
    cos(): G2 {
        throw new Error(notImplemented("cos").message);
    }

    /**
     * @return {G2}
     */
    cosh(): G2 {
        throw new Error(notImplemented("cosh").message);
    }

    /**
     * @return {G2}
     */
    exp(): G2 {
        Unit.assertDimensionless(this.uom);
        if (this.isSpinor()) {
            const expα = Math.exp(this.a);
            const cosβ = Math.cos(this.b);
            const sinβ = Math.sin(this.b);
            return new G2(expα * cosβ, 0, 0, expα * sinβ);
        } else {
            throw new Error(notImplemented(`exp(${this.toString()})`).message);
        }
    }

    /**
     * Computes the <em>inverse</em> of this multivector, if it exists.
     *
     * @return {G2}
     */
    inv(): G2 {
        const α = this.a;
        const x = this.x;
        const y = this.y;
        const β = this.b;

        const A = [
            [α, x, y, -β],
            [x, α, β, -y],
            [y, -β, α, x],
            [β, -y, x, α]
        ];
        const b = [1, 0, 0, 0];

        const X = gauss(A, b);
        const uom = this.uom ? this.uom.inv() : void 0;
        return new G2(X[0], X[1], X[2], X[3], uom);
    }

    /**
     * Determines whether this multivector has only grade 0 and grade 2 components.
     */
    isSpinor(): boolean {
        return this.x === 0 && this.y === 0;
    }

    /**
     *
     */
    log(): G2 {
        Unit.assertDimensionless(this.uom);
        if (this.isSpinor()) {
            const α = this.a;
            const β = this.b;
            const a = Math.log(Math.sqrt(α * α + β * β));
            const b = Math.atan2(β, α);
            return new G2(a, 0, 0, b, void 0);
        } else {
            throw new Error(notImplemented(`log(${this.toString()})`).message);
        }
    }

    /**
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     */
    magnitude(): G2 {
        return this.norm();
    }

    /**
     * Intentionally undocumented.
     */
    magnitudeSansUnits(): number {
        return Math.sqrt(this.squaredNormSansUnits());
    }

    /**
     * @return {G2}
     */
    norm(): G2 {
        return new G2(this.magnitudeSansUnits(), 0, 0, 0, this.uom);
    }

    /**
     * @return {G2}
     */
    quad(): G2 {
        return new G2(this.squaredNormSansUnits(), 0, 0, 0, Unit.mul(this.uom, this.uom));
    }

    /**
     * @param t {number}
     * @param controlPoint {GeometricE2}
     * @param endPoint {GeometricE2}
     * @return {G2}
     */
    quadraticBezier(t: number, controlPoint: GeometricE2, endPoint: GeometricE2): G2 {
        const α = b2(t, this.a, controlPoint.a, endPoint.a);
        const x = b2(t, this.x, controlPoint.x, endPoint.x);
        const y = b2(t, this.y, controlPoint.y, endPoint.y);
        const β = b2(t, this.b, controlPoint.b, endPoint.b);
        return new G2(α, x, y, β, this.uom);
    }

    /**
     * @return {G2}
     */
    public squaredNorm(): G2 {
        return this.quad();
    }

    /**
     * Intentionally undocumented.
     */
    public squaredNormSansUnits(): number {
        const α = this.a;
        const x = this.x;
        const y = this.y;
        const β = this.b;
        return α * α + x * x + y * y + β * β;
    }

    /**
     * @param σ {VectorE2}
     * @return {G2}
     */
    stress(σ: VectorE2): G2 {
        throw new Error(notSupported(`stress(σ=${σ})`).message);
    }

    /**
     * Computes the <em>reflection</em> of this multivector in the plane with normal <code>n</code>.
     *
     * @param n {VectorE2}
     * @return {G2}
     */
    reflect(n: VectorE2): G2 {
        // TODO: Optimize to minimize object creation and increase performance.
        const m = G2.fromVectorE2(n);
        return m.mul(this).mul(m).scale(-1);
    }

    /**
     * @return {G2}
     */
    rev(): G2 {
        return new G2(this.a, this.x, this.y, -this.b, this.uom);
    }

    /**
     * @param spinor {SpinorE2}
     * @return {G2}
     */
    rotate(spinor: SpinorE2): G2 {
        const x = this.x;
        const y = this.y;
        const α = spinor.a;
        const β = spinor.b;
        const α2 = α * α;
        const β2 = β * β;
        const p = α2 - β2;
        const q = 2 * α * β;
        const s = α2 + β2;
        return new G2(s * this.a, p * x + q * y, p * y - q * x, s * this.b, this.uom);
    }

    /**
     * @return {G2}
     */
    sin(): G2 {
        throw new Error(notImplemented("sin").message);
    }

    /**
     * @return {G2}
     */
    sinh(): G2 {
        throw new Error(notImplemented("sinh").message);
    }

    /**
     * @param target {G2}
     * @param α {number}
     * @return {G2}
     */
    slerp(target: G2, α: number): G2 {
        throw new Error(notImplemented(`slerp(target=${target}, α=${α})`).message);
    }

    /**
     * @return {G2}
     */
    tan(): G2 {
        return this.sin().div(this.cos());
    }

    /**
     * @return {boolean}
     */
    isOne(): boolean {
        return this.a === 1 && this.x === 0 && this.y === 0 && this.b === 0;
    }
    isNaN(): boolean {
        return isNaN(this.a) || isNaN(this.x) || isNaN(this.y) || isNaN(this.b);
    }
    isScalar(): boolean {
        return this.x === 0 && this.y === 0 && this.b === 0;
    }
    /**
     * @return {boolean}
     */
    isZero(): boolean {
        return this.a === 0 && this.x === 0 && this.y === 0 && this.b === 0;
    }

    private toStringCustom(coordToString: (x: number) => string, basisLabels: string[]): string {
        const quantityString: string = stringFromCoordinates(this.coords, coordToString, basisLabels);
        if (this.uom) {
            // Use the compact representation of the Unit because the units follow the multivector
            // quantity and we want to suppress the multiplier which is always 1.
            const unitString = this.uom.toString(["kg", "m", "s", "C", "K", "mol", "cd"], 10, true).trim();
            if (unitString) {
                return quantityString + " " + unitString;
            } else {
                return quantityString;
            }
        } else {
            return quantityString;
        }
    }

    /**
     * @param [fractionDigits] {number}
     * @return {string}
     */
    public toExponential(fractionDigits?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toExponential(fractionDigits);
        };
        return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
    }

    /**
     * @param [fractionDigits] {number}
     * @return {string}
     */
    public toFixed(fractionDigits?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toFixed(fractionDigits);
        };
        return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
    }

    /**
     * @param [precision] {number}
     * @return {string}
     */
    public toPrecision(precision?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toPrecision(precision);
        };
        return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
    }

    /**
     * @param [radix] {number}
     * @return {string}
     */
    public toString(radix?: number): string {
        const coordToString = function (coord: number): string {
            return coord.toString(radix);
        };
        return this.toStringCustom(coordToString, ["1", "e1", "e2", "e12"]);
    }

    toStringIJK(): string {
        const coordToString = function (coord: number): string {
            return coord.toString();
        };
        return this.toStringCustom(coordToString, ["1", "i", "j", "I"]);
    }

    __eq__(rhs: G2): boolean {
        if (rhs instanceof G2) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in equality expression: ${this.uom.dimensions} === ${rhs.uom.dimensions}`, { cause });
            }
            return this.a === rhs.a && this.x === rhs.x && this.y === rhs.y && this.b === rhs.b;
        } else {
            return void 0;
        }
    }
    __ne__(rhs: G2): boolean {
        if (rhs instanceof G2) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in inequality expression: ${this.uom.dimensions} !== ${rhs.uom.dimensions}`, { cause });
            }
            return this.a !== rhs.a || this.x !== rhs.x || this.y !== rhs.y || this.b !== this.b;
        } else {
            return void 0;
        }
    }

    __ge__(rhs: G2): boolean {
        if (rhs instanceof G2) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} >= ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a >= rhs.a;
        } else {
            return void 0;
        }
    }

    __gt__(rhs: G2): boolean {
        if (rhs instanceof G2) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} > ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a > rhs.a;
        } else {
            return void 0;
        }
    }

    __le__(rhs: G2): boolean {
        if (rhs instanceof G2) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} <= ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a <= rhs.a;
        } else {
            return void 0;
        }
    }

    __lt__(rhs: G2): boolean {
        if (rhs instanceof G2) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            } catch (cause) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} < ${rhs.uom.dimensions}`, { cause });
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a < rhs.a;
        } else {
            return void 0;
        }
    }

    /*
    private toStringLATEX(): string {
      var coordToString = function(coord: number): string { return coord.toString() };
      return this.toStringCustom(coordToString, ["1", "e_{1}", "e_{2}", "e_{12}"]);
    }
    */

    /**
     * @param m
     * @return {G2}
     */
    static copy(m: GeometricE2): G2 {
        if (m instanceof G2) {
            return m;
        } else {
            return new G2(m.a, m.x, m.y, m.b, void 0);
        }
    }

    /**
     * @param vector {VectorE2}
     * @return {G2}
     */
    static fromVectorE2(vector: VectorE2): G2 {
        if (vector) {
            if (vector instanceof G2) {
                return new G2(0, vector.x, vector.y, 0, vector.uom);
            } else {
                return new G2(0, vector.x, vector.y, 0, void 0);
            }
        } else {
            return void 0;
        }
    }

    /**
     * @param x {number}
     * @param y {number}
     * @param [uom] {Unit}
     * @return {G2}
     */
    static vector(x: number, y: number, uom?: Unit): G2 {
        return new G2(0, x, y, 0, uom);
    }
}
