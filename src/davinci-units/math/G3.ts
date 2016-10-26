import b2 from './bezier2';
import b3 from './bezier3';
import extG3 from './extG3';
import gauss from './gauss';
import GeometricE3 from './GeometricE3';
import GeometricNumber from './GeometricNumber';
import GeometricOperators from './GeometricOperators';
// import GradeError from './GradeError';
import ImmutableMeasure from './ImmutableMeasure';
import lcoG3 from './lcoG3';
import mulG3 from './mulG3';
import notImplemented from '../i18n/notImplemented';
import notSupported from '../i18n/notSupported';
import quadSpinorE3 from './quadSpinorE3'
import readOnly from '../i18n/readOnly';
import rcoG3 from './rcoG3';
import scpG3 from './scpG3';
import SpinorE3 from './SpinorE3';
import squaredNormG3 from './squaredNormG3';
import stringFromCoordinates from './stringFromCoordinates';
import TrigMethods from './TrigMethods';
import {Unit} from './Unit';
import VectorE3 from './VectorE3';
import BASIS_LABELS_G3_GEOMETRIC from './BASIS_LABELS_G3_GEOMETRIC';
import BASIS_LABELS_G3_HAMILTON from './BASIS_LABELS_G3_HAMILTON';
import BASIS_LABELS_G3_STANDARD from './BASIS_LABELS_G3_STANDARD';
import BASIS_LABELS_G3_STANDARD_HTML from './BASIS_LABELS_G3_STANDARD_HTML';

const COORD_SCALAR = 0;
const COORD_X = 1;
const COORD_Y = 2;
const COORD_Z = 3;
const COORD_XY = 4;
const COORD_YZ = 5;
const COORD_ZX = 6;
const COORD_PSEUDO = 7;

/**
 * <p>
 * The <code>G3</code> class represents a multivector for a 3-dimensional vector space with a Euclidean metric.
 * </p>
 * <p>
 * The <code>G3</code> class is immutable, making it easy to reason about values.
 * </p>
 * <p>
 * The <code>G3</code> class supports units of measures.
 * </p>
 * <p>
 * The immutable nature of the <code>G3</code> makes it less suitable for high performance graphics applications.
 * </p>
 */
export default class G3 implements ImmutableMeasure<G3>, GeometricE3, GeometricNumber<G3, G3, SpinorE3, VectorE3, G3, number, Unit>, GeometricOperators<G3, Unit>, TrigMethods<G3> {
    static get BASIS_LABELS_GEOMETRIC(): string[][] { return BASIS_LABELS_G3_GEOMETRIC };
    static get BASIS_LABELS_HAMILTON(): string[][] { return BASIS_LABELS_G3_HAMILTON };
    static get BASIS_LABELS_STANDARD(): string[][] { return BASIS_LABELS_G3_STANDARD };
    static get BASIS_LABELS_STANDARD_HTML(): string[][] { return BASIS_LABELS_G3_STANDARD_HTML };

    /**
     * The current basis labels.
     */
    static BASIS_LABELS: string[][] = BASIS_LABELS_G3_STANDARD

    public static zero = new G3(0, 0, 0, 0, 0, 0, 0, 0);
    public static one = new G3(1, 0, 0, 0, 0, 0, 0, 0);
    public static e1 = new G3(0, 1, 0, 0, 0, 0, 0, 0);
    public static e2 = new G3(0, 0, 1, 0, 0, 0, 0, 0);
    public static e3 = new G3(0, 0, 0, 1, 0, 0, 0, 0);

    public static kilogram = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.KILOGRAM);
    public static meter = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.METER);
    public static second = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.SECOND);
    public static coulomb = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.COULOMB);
    public static ampere = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.AMPERE);
    public static kelvin = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.KELVIN);
    public static mole = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.MOLE);
    public static candela = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.CANDELA);

    /**
     * The coordinate values are stored in a number array.
     * This should be convenient and efficient for tensor calculations.
     */
    private _coords: number[] = [0, 0, 0, 0, 0, 0, 0, 0]

    /**
     * The optional unit of measure.
     */
    public uom: Unit;

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
    constructor(α: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, β: number, uom?: Unit) {
        this._coords[COORD_SCALAR] = α
        this._coords[COORD_X] = x
        this._coords[COORD_Y] = y
        this._coords[COORD_Z] = z
        this._coords[COORD_XY] = xy
        this._coords[COORD_YZ] = yz
        this._coords[COORD_ZX] = zx
        this._coords[COORD_PSEUDO] = β
        this.uom = uom
        if (this.uom && this.uom.multiplier !== 1) {
            const multiplier: number = this.uom.multiplier;
            this._coords[COORD_SCALAR] *= multiplier;
            this._coords[COORD_X] *= multiplier;
            this._coords[COORD_Y] *= multiplier;
            this._coords[COORD_Z] *= multiplier;
            this._coords[COORD_XY] *= multiplier;
            this._coords[COORD_YZ] *= multiplier;
            this._coords[COORD_ZX] *= multiplier;
            this._coords[COORD_PSEUDO] *= multiplier;
            this.uom = new Unit(1, uom.dimensions, uom.labels);
        }
    }

    /**
     * The scalar part of this multivector.
     */
    get a(): number {
        return this._coords[COORD_SCALAR]
    }
    set a(unused) {
        throw new Error(readOnly('a').message)
    }

    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>1</sub></b> basis vector.
     */
    get x(): number {
        return this._coords[COORD_X]
    }
    set x(value: number) {
        this._coords[COORD_X] = value;
        // throw new Error(readOnly('x').message)
    }

    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>2</sub></b> basis vector.
     */
    get y(): number {
        return this._coords[COORD_Y]
    }
    set y(value: number) {
        this._coords[COORD_Y] = value;
        // throw new Error(readOnly('y').message)
    }

    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>3</sub></b> basis vector.
     */
    get z(): number {
        return this._coords[COORD_Z]
    }
    set z(value: number) {
        this._coords[COORD_Z] = value;
        // throw new Error(readOnly('z').message)
    }

    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub></b> basis bivector.
     */
    get xy(): number {
        return this._coords[COORD_XY]
    }
    set xy(unused: number) {
        throw new Error(readOnly('xy').message)
    }

    /**
     * The coordinate corresponding to the <b>e<sub>2</sub>e<sub>3</sub></b> basis bivector.
     */
    get yz(): number {
        return this._coords[COORD_YZ]
    }
    set yz(unused: number) {
        throw new Error(readOnly('yz').message)
    }

    /**
     * The coordinate corresponding to the <b>e<sub>3</sub>e<sub>1</sub></b> basis bivector.
     */
    get zx(): number {
        return this._coords[COORD_ZX]
    }
    set zx(unused: number) {
        throw new Error(readOnly('zx').message)
    }

    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub>e<sub>3</sub></b> basis trivector.
     * The pseudoscalar coordinate of this multivector.
     */
    get b(): number {
        return this._coords[COORD_PSEUDO]
    }
    set b(unused: number) {
        throw new Error(readOnly('b').message)
    }

    static fromCartesian(α: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, β: number, uom: Unit): G3 {
        return new G3(α, x, y, z, xy, yz, zx, β, uom)
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
    add(rhs: G3) {
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

    /**
     * Computes <code>this + Iβ</code>
     */
    addPseudo(β: Unit): G3 {
        return new G3(this.a, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b + β.multiplier, Unit.compatible(this.uom, β))
    }

    /**
     * Computes <code>this + α</code>
     */
    addScalar(α: Unit): G3 {
        return new G3(this.a + α.multiplier, this.x, this.y, this.z, this.xy, this.yz, this.zx, this.b, Unit.compatible(this.uom, α))
    }

    __add__(rhs: Unit | G3): G3 {
        if (rhs instanceof G3) {
            return this.add(rhs);
        }
        else if (rhs instanceof Unit) {
            return this.addScalar(rhs);
        }
    }

    __radd__(lhs: Unit | G3): G3 {
        if (lhs instanceof G3) {
            return lhs.add(this)
        }
        else if (lhs instanceof Unit) {
            return this.addScalar(lhs)
        }
    }

    adj(): G3 {
        throw new Error(notImplemented('adj').message)
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
    cubicBezier(t: number, controlBegin: GeometricE3, controlEnd: GeometricE3, endPoint: GeometricE3) {
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
    sub(rhs: G3) {
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

    __sub__(rhs: Unit | G3) {
        if (rhs instanceof G3) {
            return this.sub(rhs);
        }
        else if (rhs instanceof Unit) {
            return this.addScalar(rhs.neg());
        }
    }

    __rsub__(lhs: Unit | G3): G3 {
        if (lhs instanceof G3) {
            return lhs.sub(this)
        }
        else if (lhs instanceof Unit) {
            return this.neg().addScalar(lhs)
        }
    }

    mul(rhs: G3): G3 {
        const out = new G3(0, 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, rhs.uom))
        mulG3(this, rhs, out._coords)
        return out
    }

    __mul__(rhs: any): any {
        if (rhs instanceof G3) {
            return this.mul(rhs);
        }
        else if (typeof rhs === 'number') {
            return this.scale(rhs);
        }
    }

    __rmul__(lhs: any): any {
        if (lhs instanceof G3) {
            return lhs.mul(this);
        }
        else if (typeof lhs === 'number') {
            return this.scale(lhs);
        }
    }

    scale(α: number): G3 {
        return new G3(this.a * α, this.x * α, this.y * α, this.z * α, this.xy * α, this.yz * α, this.zx * α, this.b * α, this.uom);
    }

    div(rhs: G3): G3 {
        return this.mul(rhs.inv())
    }

    divByScalar(α: number): G3 {
        return new G3(this.a / α, this.x / α, this.y / α, this.z / α, this.xy / α, this.yz / α, this.zx / α, this.b / α, this.uom);
    }

    __div__(rhs: any): G3 {
        if (rhs instanceof G3) {
            return this.div(rhs);
        }
        else if (typeof rhs === 'number') {
            return this.divByScalar(rhs);
        }
    }

    __rdiv__(lhs: any): G3 {
        if (lhs instanceof G3) {
            return lhs.div(this);
        }
        else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).div(this);
        }
    }

    dual(): G3 {
        throw new Error(notImplemented('dual').message)
    }

    scp(rhs: G3): G3 {
        var out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, rhs.uom));
        scpG3(this, rhs, G3.mutator(out));
        return out;
    }

    ext(rhs: G3): G3 {
        const out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, rhs.uom));
        extG3(this, rhs, G3.mutator(out));
        return out;
    }

    __vbar__(rhs: any): G3 {
        if (rhs instanceof G3) {
            return this.scp(rhs);
        }
        else if (typeof rhs === 'number') {
            return this.scp(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
        }
    }

    __rvbar__(lhs: any): G3 {
        if (lhs instanceof G3) {
            return lhs.scp(this)
        }
        else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).scp(this);
        }
    }

    __wedge__(rhs: any): G3 {
        if (rhs instanceof G3) {
            return this.ext(rhs);
        }
        else if (typeof rhs === 'number') {
            return this.scale(rhs)
        }
    }

    __rwedge__(lhs: any): G3 {
        if (lhs instanceof G3) {
            return lhs.ext(this)
        }
        else if (typeof lhs === 'number') {
            return this.scale(lhs)
        }
    }

    lco(rhs: G3): G3 {
        const out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, rhs.uom))
        lcoG3(this, rhs, G3.mutator(out))
        return out
    }

    __lshift__(rhs: any): G3 {
        if (rhs instanceof G3) {
            return this.lco(rhs)
        }
        else if (typeof rhs === 'number') {
            return this.lco(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
        }
    }

    __rlshift__(lhs: any): G3 {
        if (lhs instanceof G3) {
            return lhs.lco(this)
        }
        else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).lco(this);
        }
    }

    rco(rhs: G3): G3 {
        const out = new G3(1, 0, 0, 0, 0, 0, 0, 0, Unit.mul(this.uom, rhs.uom))
        rcoG3(this, rhs, G3.mutator(out))
        return out
    }

    __rshift__(rhs: any): G3 {
        if (rhs instanceof G3) {
            return this.rco(rhs)
        }
        else if (typeof rhs === 'number') {
            return this.rco(new G3(rhs, 0, 0, 0, 0, 0, 0, 0, void 0));
        }
    }

    __rrshift__(lhs: any): G3 {
        if (lhs instanceof G3) {
            return lhs.rco(this)
        }
        else if (typeof lhs === 'number') {
            return new G3(lhs, 0, 0, 0, 0, 0, 0, 0, void 0).rco(this);
        }
    }

    pow(exponent: G3): G3 {
        throw new Error('pow');
    }

    __bang__(): G3 {
        return this.inv()
    }

    /**
     * Unary plus(+).
     */
    __pos__() {
        return this;
    }

    /**
     * @returns <code>-1 * this</code>
     */
    neg() {
        return new G3(-this.a, -this.x, -this.y, -this.z, -this.xy, -this.yz, -this.zx, -this.b, this.uom);
    }

    /**
     * Unary minus (-).
     */
    __neg__() {
        return this.neg()
    }

    rev() {
        return new G3(this.a, this.x, this.y, this.z, -this.xy, -this.yz, -this.zx, -this.b, this.uom);
    }

    /**
     * ~ (tilde) produces reversion.
     */
    __tilde__() {
        return this.rev();
    }

    /**
     * @param grade
     */
    grade(grade: number) {
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

    cross(vector: G3) {
        var x: number;
        var x2: number;
        var y: number;
        var y1: number;
        var y2: number;
        var z: number;
        var z1: number;
        var z2: number;

        const x1 = this.x;
        y1 = this.y;
        z1 = this.z;
        x2 = vector.x;
        y2 = vector.y;
        z2 = vector.z;
        x = y1 * z2 - z1 * y2;
        y = z1 * x2 - x1 * z2;
        z = x1 * y2 - y1 * x2;
        return new G3(0, x, y, z, 0, 0, 0, 0, Unit.mul(this.uom, vector.uom));
    }

    isOne(): boolean {
        return (this.a === 1) && (this.x === 0) && (this.y === 0) && (this.z === 0) && (this.yz === 0) && (this.zx === 0) && (this.xy === 0) && (this.b === 0);
    }

    isScalar(): boolean {
        return (this.x === 0) && (this.y === 0) && (this.z === 0) && (this.yz === 0) && (this.zx === 0) && (this.xy === 0) && (this.b === 0);
    }

    isZero(): boolean {
        return (this.a === 0) && (this.x === 0) && (this.y === 0) && (this.z === 0) && (this.yz === 0) && (this.zx === 0) && (this.xy === 0) && (this.b === 0);
    }

    lerp(target: G3, α: number): G3 {
        throw new Error(notImplemented('lerp').message)
    }

    cos() {
        // TODO: Generalize to full multivector.
        Unit.assertDimensionless(this.uom)
        const cosW = Math.cos(this.a)
        return new G3(cosW, 0, 0, 0, 0, 0, 0, 0)
    }

    cosh(): G3 {
        throw new Error(notImplemented('cosh').message)
    }

    distanceTo(point: G3): number {
        // TODO: Should this be generalized to all coordinates?
        const dx = this.x - point.x;
        const dy = this.y - point.y;
        const dz = this.z - point.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    equals(other: G3): boolean {
        if (this.a === other.a && this.x === other.x && this.y === other.y && this.z === other.z && this.xy === other.xy && this.yz === other.yz && this.zx === other.zx && this.b === other.b) {
            if (this.uom) {
                if (other.uom) {
                    // TODO: We need equals on
                    return true
                }
                else {
                    return false
                }
            }
            else {
                if (other.uom) {
                    return false
                }
                else {
                    return true
                }
            }
        }
        else {
            return false
        }
    }

    exp() {
        Unit.assertDimensionless(this.uom);
        const bivector = this.grade(2);
        const a = bivector.norm();
        if (!a.isZero()) {
            const c = a.cos();
            const s = a.sin();
            const B = bivector.direction();
            return c.add(B.mul(s));
        }
        else {
            return new G3(1, 0, 0, 0, 0, 0, 0, 0, this.uom);
        }
    }

    /**
     * Computes the <em>inverse</em> of this multivector, if it exists.
     */
    inv() {

        const α = this.a
        const x = this.x
        const y = this.y
        const z = this.z
        const xy = this.xy
        const yz = this.yz
        const zx = this.zx
        const β = this.b

        const A = [
            [α, x, y, z, -xy, -yz, -zx, -β],
            [x, α, xy, -zx, -y, -β, z, -yz],
            [y, -xy, α, yz, x, -z, -β, -zx],
            [z, zx, -yz, α, -β, y, -x, -xy],
            [xy, -y, x, β, α, zx, -yz, z],
            [yz, β, -z, y, -zx, α, xy, x],
            [zx, z, β, -x, yz, -xy, α, y],
            [β, yz, zx, xy, z, x, y, α]
        ]

        const b = [1, 0, 0, 0, 0, 0, 0, 0]

        const X = gauss(A, b)

        const uom = this.uom ? this.uom.inv() : void 0
        return new G3(X[0], X[1], X[2], X[3], X[4], X[5], X[6], X[7], uom);
    }

    /**
     *
     */
    log(): G3 {
        throw new Error(notImplemented('log').message)
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
        return Math.sqrt(this.squaredNormSansUnits())
    }

    /**
     * Computes the magnitude of this G3. The magnitude is the square root of the quadrance.
     */
    norm(): G3 {
        return new G3(this.magnitudeSansUnits(), 0, 0, 0, 0, 0, 0, 0, this.uom)
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
    quadraticBezier(t: number, controlPoint: GeometricE3, endPoint: GeometricE3) {
        const x = b2(t, this.x, controlPoint.x, endPoint.x);
        const y = b2(t, this.y, controlPoint.y, endPoint.y);
        const z = b2(t, this.z, controlPoint.z, endPoint.z);
        return new G3(0, x, y, z, 0, 0, 0, 0, this.uom);
    }

    squaredNorm() {
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
    stress(σ: VectorE3): G3 {
        throw new Error(notSupported('stress').message)
    }

    /**
     * Computes the <em>reflection</em> of this multivector in the plane with normal <code>n</code>.
     * @param n
     */
    reflect(n: VectorE3) {
        // TODO: Optimize to minimize object creation and increase performance.
        let m = G3.fromVector(n)
        return m.mul(this).mul(m).scale(-1)
    }

    rotate(R: SpinorE3) {
        // FIXME: This only rotates the vector components.
        // The units may be suspect to if rotate is not clearly defined.
        const x = this.x;
        const y = this.y;
        const z = this.z;

        const a = R.xy;
        const b = R.yz;
        const c = R.zx;
        const α = R.a;
        const quadR = quadSpinorE3(R)

        const ix = α * x - c * z + a * y;
        const iy = α * y - a * x + b * z;
        const iz = α * z - b * y + c * x;
        const iα = b * x + c * y + a * z;

        const αOut = quadR * this.a
        const xOut = ix * α + iα * b + iy * a - iz * c;
        const yOut = iy * α + iα * c + iz * b - ix * a;
        const zOut = iz * α + iα * a + ix * c - iy * b;
        const βOut = quadR * this.b

        return G3.fromCartesian(αOut, xOut, yOut, zOut, 0, 0, 0, βOut, this.uom)
    }

    sin() {
        // TODO: Generalize to full multivector.
        Unit.assertDimensionless(this.uom);
        const sinW = Math.sin(this.a);
        return new G3(sinW, 0, 0, 0, 0, 0, 0, 0, void 0);
    }

    sinh(): G3 {
        throw new Error(notImplemented('sinh').message)
    }

    slerp(target: G3, α: number): G3 {
        throw new Error(notImplemented('slerp').message)
    }

    sqrt() {
        return new G3(Math.sqrt(this.a), 0, 0, 0, 0, 0, 0, 0, Unit.sqrt(this.uom));
    }

    tan(): G3 {
        return this.sin().div(this.cos())
    }

    /**
     * Intentionally undocumented.
     */
    toStringCustom(coordToString: (x: number) => string, labels: (string | string[])[]): string {
        const quantityString: string = stringFromCoordinates(this.coords, coordToString, labels);
        if (this.uom) {
            // Use the compact representation of the Unit because the units follow the multivector
            // quantity and we want to suppress the multiplier which is always 1.
            const unitString = this.uom.toString(10, true).trim();
            if (unitString) {
                return quantityString + ' ' + unitString;
            }
            else {
                return quantityString;
            }
        }
        else {
            return quantityString;
        }
    }

    toExponential(fractionDigits?: number): string {
        const coordToString = function (coord: number): string { return coord.toExponential(fractionDigits) };
        return this.toStringCustom(coordToString, G3.BASIS_LABELS);
    }

    toFixed(fractionDigits?: number): string {
        const coordToString = function (coord: number): string { return coord.toFixed(fractionDigits) };
        return this.toStringCustom(coordToString, G3.BASIS_LABELS);
    }

    toPrecision(precision?: number): string {
        const coordToString = function (coord: number): string { return coord.toPrecision(precision) };
        return this.toStringCustom(coordToString, G3.BASIS_LABELS);
    }

    toString(radix?: number): string {
        const coordToString = function (coord: number): string { return coord.toString(radix) };
        return this.toStringCustom(coordToString, G3.BASIS_LABELS);
    }

    __eq__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            }
            catch (e) {
                throw new Error(`Dimensions mismatch in equality expression: ${this.uom.dimensions} === ${rhs.uom.dimensions}`);
            }
            return this.a === rhs.a &&
                this.x === rhs.x &&
                this.y === rhs.y &&
                this.z === rhs.z &&
                this.xy === rhs.xy &&
                this.yz === rhs.yz &&
                this.zx === rhs.zx &&
                this.b === rhs.b;
        }
        else {
            return void 0;
        }
    }

    __ne__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            }
            catch (e) {
                throw new Error(`Dimensions mismatch in inequality expression: ${this.uom.dimensions} !== ${rhs.uom.dimensions}`);
            }
            return this.a !== rhs.a ||
                this.x !== rhs.x ||
                this.y !== rhs.y ||
                this.z !== rhs.z ||
                this.xy !== rhs.xy ||
                this.yz !== rhs.yz ||
                this.zx !== rhs.zx ||
                this.b !== this.b;
        }
        else {
            return void 0;
        }
    }

    __ge__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            }
            catch (e) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} >= ${rhs.uom.dimensions}`);
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a >= rhs.a;
        }
        else {
            return void 0;
        }
    }

    __gt__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            }
            catch (e) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} > ${rhs.uom.dimensions}`);
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a > rhs.a;
        }
        else {
            return void 0;
        }
    }

    __le__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            }
            catch (e) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} <= ${rhs.uom.dimensions}`);
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a <= rhs.a;
        }
        else {
            return void 0;
        }
    }

    __lt__(rhs: G3): boolean {
        if (rhs instanceof G3) {
            try {
                Unit.compatible(this.uom, rhs.uom);
            }
            catch (e) {
                throw new Error(`Dimensions mismatch in comparison expression: ${this.uom.dimensions} < ${rhs.uom.dimensions}`);
            }
            if (!this.isScalar()) {
                throw new Error(`left operand (${this}) in comparison expression must be a scalar.`);
            }
            if (!rhs.isScalar()) {
                throw new Error(`right operand (${rhs}) in comparison expression must be a scalar.`);
            }
            return this.a < rhs.a;
        }
        else {
            return void 0;
        }
    }

    /**
     * Provides access to the internals of G3 in order to use `product` functions.
     */
    private static mutator(M: G3) {
        const that: GeometricE3 = {
            set a(value: number) {
                M._coords[COORD_SCALAR] = value;
            },
            set x(value: number) {
                M._coords[COORD_X] = value;
            },
            set y(value: number) {
                M._coords[COORD_Y] = value;
            },
            set z(value: number) {
                M._coords[COORD_Z] = value;
            },
            set yz(value: number) {
                M._coords[COORD_YZ] = value;
            },
            set zx(value: number) {
                M._coords[COORD_ZX] = value;
            },
            set xy(value: number) {
                M._coords[COORD_XY] = value;
            },
            set b(value: number) {
                M._coords[COORD_PSEUDO] = value;
            }
        }
        return that
    }

    /**
     * Creates a new G3 from the coordinates of m and the optional unit of measure, uom.
     */
    static copy(m: GeometricE3, uom?: Unit): G3 {
        return new G3(m.a, m.x, m.y, m.z, m.xy, m.yz, m.zx, m.b, uom)
    }

    static direction(vector: VectorE3): G3 {
        if (vector) {
            return new G3(0, vector.x, vector.y, vector.z, 0, 0, 0, 0).direction()
        }
        else {
            return void 0
        }
    }

    static fromSpinor(spinor: SpinorE3): G3 {
        if (spinor) {
            // FIXME: SpinorE3 should support uom, even though it might be 1
            return new G3(spinor.a, 0, 0, 0, spinor.xy, spinor.yz, spinor.zx, 0, void 0)
        }
        else {
            return void 0
        }
    }

    static fromVector(vector: VectorE3, uom?: Unit): G3 {
        if (vector) {
            return new G3(0, vector.x, vector.y, vector.z, 0, 0, 0, 0, uom)
        }
        else {
            return void 0
        }
    }

    static random(uom?: Unit): G3 {
        return new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), uom)
    }

    static scalar(α: number, uom?: Unit): G3 {
        return new G3(α, 0, 0, 0, 0, 0, 0, 0, uom)
    }

    static vector(x: number, y: number, z: number, uom?: Unit): G3 {
        return new G3(0, x, y, z, 0, 0, 0, 0, uom)
    }
}
