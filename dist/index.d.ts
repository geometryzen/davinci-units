/**
 * Special methods for operators on elements of abelian groups (additive).
 * This is provided for interface consistency.
 * It may not adhere to strict mathematical definitions.
 */
interface AbelianOperators<T, UNIT> {
    /**
     * Binary this + other
     */
    __add__(other: UNIT | T): T;
    /**
     * Binary other + this
     */
    __radd__(other: UNIT | T): T;
    /**
     * Binary this - other
     */
    __sub__(other: UNIT | T): T;
    /**
     * Binary other - this
     */
    __rsub__(other: UNIT | T): T;
    /**
     * Unary +
     */
    __pos__(): T;
    /**
     * Unary -
     */
    __neg__(): T;
    /**
     * The additive inverse is denoted by neg.
     */
    neg(): T;
    /**
     * Determines whether this element is the additive identity, <b>0</b>.
     */
    isZero(): boolean;
}

/**
 * A ring is an abelian group with a second binary operation that is associative,
 * is distributive over the abelian group operation and has an identity element.
 */
interface RingOperators<T, UNIT> extends AbelianOperators<T, UNIT> {
    /**
     * Multiplication of the the target from the right.
     */
    __mul__(rhs: any): T;
    /**
     * Multiplication of the the target from the left.
     */
    __rmul__(lhs: any): T;
    /**
     * The multiplicative inverse is denoted by inv.
     */
    inv(): T;
    /**
     * Determines whether this element is the multiplicative identity, <b>1</b>.
     */
    isOne(): boolean;
}

/**
 *
 */
interface DivisionRingOperators<T, UNIT> extends RingOperators<T, UNIT> {
    __div__(rhs: any): T;
    __rdiv__(lhs: any): T;
}

/**
 * The QQ class represents a rational number, ℚ.
 *
 * The QQ implementation is that of an <em>immutable</em> (value) type.
 *
 * The numerator and denominator are reduced to their lowest form.
 *
 * Construct new instances using the static <code>valueOf</code> method.
 */
declare class QQ implements DivisionRingOperators<QQ, number> {
    /**
     *
     */
    private _numer;
    /**
     *
     */
    private _denom;
    /**
     * Intentionally undocumented.
     */
    constructor(n: number, d: number, code: number);
    /**
     *
     * @readOnly
     */
    get numer(): number;
    set numer(unused: number);
    /**
     *
     * @readOnly
     */
    get denom(): number;
    set denom(unused: number);
    /**
     * @param rhs
     * @returns
     */
    add(rhs: QQ): QQ;
    /**
     * @param rhs
     * @returns
     */
    sub(rhs: QQ): QQ;
    /**
     * @param rhs
     * @returns
     */
    mul(rhs: QQ): QQ;
    /**
     * @param rhs
     * @returns
     */
    div(rhs: QQ): QQ;
    /**
     * @returns
     */
    isOne(): boolean;
    /**
     * @returns
     */
    isZero(): boolean;
    /**
     * @returns
     */
    hashCode(): number;
    /**
     * Computes the multiplicative inverse of this rational number.
     *
     * @returns
     */
    inv(): QQ;
    /**
     * Computes the additive inverse of this rational number.
     *
     * @returns
     */
    neg(): QQ;
    /**
     * Determines whether two rational numbers are equal.
     *
     * @param other
     * @returns
     */
    equals(other: QQ): boolean;
    /**
     * Computes a non-normative string representation of this rational.
     *
     * @returns
     */
    toString(): string;
    /**
     * @param rhs
     * @returns
     */
    __add__(rhs: QQ): QQ;
    /**
     * @param lhs
     * @returns
     */
    __radd__(lhs: QQ): QQ;
    /**
     * @param rhs
     * @returns
     */
    __sub__(rhs: QQ): QQ;
    /**
     * @param lhs
     * @returns
     */
    __rsub__(lhs: QQ): QQ;
    /**
     * @param rhs
     * @returns
     */
    __mul__(rhs: QQ): QQ;
    /**
     * @param lhs
     * @returns
     */
    __rmul__(lhs: QQ): QQ;
    /**
     * @param div
     * @returns
     */
    __div__(rhs: QQ): QQ;
    /**
     * @param lhs
     * @returns
     */
    __rdiv__(lhs: QQ): QQ;
    /**
     * @returns
     */
    __pos__(): QQ;
    /**
     * @returns
     */
    __neg__(): QQ;
    private static POS_08_01;
    private static POS_07_01;
    private static POS_06_01;
    private static POS_05_01;
    private static POS_04_01;
    private static POS_03_01;
    private static POS_02_01;
    private static ONE;
    private static POS_01_02;
    private static POS_01_03;
    private static POS_01_04;
    private static POS_01_05;
    private static ZERO;
    private static NEG_01_03;
    private static NEG_01_01;
    private static NEG_02_01;
    private static NEG_03_01;
    private static POS_02_03;
    /**
     * @param numer
     * @param denom
     * @returns
     */
    static valueOf(n: number, d: number): QQ;
}

/**
 * Keeps track of the dimensions of a physical quantity using seven rational exponents.
 * Each of the exponents corresponds to a dimension in the S.I. system of units.
 */
declare class Dimensions {
    M: QQ;
    L: QQ;
    T: QQ;
    Q: QQ;
    temperature: QQ;
    amount: QQ;
    intensity: QQ;
    /**
     * All exponents are zero, a dimensionless quantity.
     */
    static ONE: Dimensions;
    /**
     * M<sup>1</sup>
     */
    static MASS: Dimensions;
    /**
     * L<sup>1</sup>
     */
    static LENGTH: Dimensions;
    /**
     * T<sup>1</sup>
     */
    static TIME: Dimensions;
    /**
     * Q<sup>1</sup>
     */
    static CHARGE: Dimensions;
    /**
     * Q<sup>1</sup>T<sup>-1<sup>
     */
    static CURRENT: Dimensions;
    /**
     *
     */
    static TEMPERATURE: Dimensions;
    /**
     *
     */
    static AMOUNT: Dimensions;
    /**
     *
     */
    static INTENSITY: Dimensions;
    /**
     * The Dimensions class captures the physical dimensions associated with a unit of measure.
     *
     * @param M The mass component of the dimensions object.
     * @param L The length component of the dimensions object.
     * @param T The time component of the dimensions object.
     * @param Q The charge component of the dimensions object.
     * @param temperature The temperature component of the dimensions object.
     * @param amount The amount component of the dimensions object.
     * @param intensity The intensity component of the dimensions object.
     */
    constructor(M: QQ, L: QQ, T: QQ, Q: QQ, temperature: QQ, amount: QQ, intensity: QQ);
    /**
     * Returns the dimensions if they are all equal, otherwise throws an <code>Error</code>
     *
     * @param rhs
     * @returns
     */
    compatible(rhs: Dimensions): Dimensions;
    /**
     * Multiplies dimensions by adding rational exponents.
     *
     * @param rhs
     * @returns <code>this * rhs</code>
     */
    mul(rhs: Dimensions): Dimensions;
    /**
     * Divides dimensions by subtracting rational exponents.
     *
     * @param rhs
     * @returns <code>this / rhs</code>
     */
    div(rhs: Dimensions): Dimensions;
    /**
     * Computes the power function by multiplying rational exponents.
     *
     * @param rhs
     * @returns <code>pow(this, rhs)</code>
     */
    pow(exponent: QQ): Dimensions;
    /**
     * Computes the square root by dividing each rational component by two.
     *
     * @returns
     */
    sqrt(): Dimensions;
    /**
     * Determines whether all the exponents of this dimensions number are zero.
     * This implies a dimensionless quantity.
     *
     * @returns <code>true</code> if all the exponents are zero, otherwise <code>false</code>.
     */
    isOne(): boolean;
    /**
     * Computes the multiplicative inverse of this dimensions number.
     * This is achived by changing the signs of all the exponent quantities.
     *
     * @returns
     */
    inv(): Dimensions;
    /**
     * Intentionally undocumented.
     */
    neg(): Dimensions;
    /**
     * Creates a representation of this <code>Dimensions</code> instance.
     *
     * @returns
     */
    toString(): string;
    /**
     * @param rhs
     * @returns
     */
    __add__(rhs: Dimensions): Dimensions;
    /**
     * @param lhs
     * @returns
     */
    __radd__(lhs: Dimensions): Dimensions;
    /**
     *
     * @param rhs
     * @returns
     */
    __sub__(rhs: Dimensions): Dimensions;
    /**
     *
     * @param lhs
     * @returns
     */
    __rsub__(lhs: Dimensions): Dimensions;
    /**
     *
     * @param rhs
     * @returns
     */
    __mul__(rhs: Dimensions): Dimensions;
    /**
     *
     * @param lhs
     * @returns
     */
    __rmul__(lhs: Dimensions): Dimensions;
    /**
     *
     * @param rhs
     * @returns
     */
    __div__(rhs: Dimensions): Dimensions;
    /**
     * @param lhs
     * @returns
     */
    __rdiv__(lhs: Dimensions): Dimensions;
    /**
     * @returns
     */
    __pos__(): Dimensions;
    /**
     *
     * @returns
     */
    __neg__(): Dimensions;
}

interface Pseudo {
    /**
     * The pseudoscalar coordinate as a number.I
     */
    b: number;
}

interface Scalar {
    /**
     * The scalar coordinate as a number.
     */
    a: number;
}

/**
 * The even sub-algebra of the <em>Euclidean algebra 𝓖(2, 0)</em>.
 * @class SpinorE2
 * @extends Scalar
 * @extends Pseudo
 */
interface SpinorE2 extends Scalar, Pseudo {
}

/**
 * @class VectorE2
 */
interface VectorE2 {
    /**
     * The Cartesian x-coordinate or <em>abscissa</em>.
     * @property x
     * @type number
     */
    x: number;
    /**
     * The Cartesian y-coordinate or <em>ordinate</em>.
     * @property y
     * @type number
     */
    y: number;
}

/**
 * @class GeometricE2
 * @extends Pseudo
 * @extends Scalar
 * @extends SpinorE2
 * @extends VectorE2
 */
interface GeometricE2 extends Pseudo, Scalar, SpinorE2, VectorE2 {
}

/**
 * This interface is provided to ensure consistency.
 * It is not part of the documented API.
 * Notice that the effect on the target depends upon whether the target class in mutable.
 * MAGNITUDE is the chosen type for the magnitude method and scaling.
 * For dimensionless quantities without units, use number.
 * For linear quantities with units, you may use Unit.
 * For geometric quantities with units, you may use the quantity itself because it can represent a scalar.
 */
/**
 * @class LinearNumber
 */
interface LinearNumber<I, M, S, V, MAGNITUDE, SCALAR> {
    add(rhs: I, α?: number): M;
    divByScalar(α: SCALAR): M;
    lerp(target: I, α: number): M;
    scale(α: SCALAR): M;
    neg(): M;
    reflect(n: V): M;
    rotate(rotor: S): M;
    slerp(target: I, α: number): M;
    stress(σ: V): M;
    sub(rhs: I, α?: number): M;
    toExponential(fractionDigits?: number): string;
    toFixed(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
    toString(radix?: number): string;
}

/**
 * This interface is provided to ensure consistency.
 * It is not part of the documented API.
 * Notice that the effect on the target depends upon whether the target class in mutable.
 * I: The lightweight interface form of the concreate class, usually just coordinates.
 * M: The concrete class
 * S: The lightweight interface form of the spinor.
 * V: The lightweight interface form of the vector.
 * MAGNITUDE: The type for methods that compute magnitudes.
 */
interface GeometricNumber<I, M, S, V, MAGNITUDE, SCALING, UNIT> extends LinearNumber<I, M, S, V, MAGNITUDE, SCALING> {
    /**
     * Addition of a scalar.
     */
    addScalar(α: UNIT): M;
    /**
     * conjugate multiplied by norm (similar to inv)
     */
    adj(): M;
    /**
     * Assumes a spinor as the multivector.
     * angle(M) = log(M).grade(2)
     * In other words, throw away the scalar part of the result which is the scaling.
     */
    angle(): M;
    /**
     * Conjugate
     */
    conj(): M;
    /**
     * Left contraction
     */
    lco(rhs: I): M;
    /**
     * divide really only applies to division algebras, may not be defined.
     */
    div(rhs: I): M;
    /**
     * Exponential
     */
    exp(): M;
    /**
     * Exterior or Outer Product.
     */
    ext(rhs: I): M;
    /**
     * extraction of grade.
     */
    grade(grade: number): M;
    /**
     * Inverse (may not exist).
     */
    inv(): M;
    /**
     *
     */
    isOne(): boolean;
    /**
     *
     */
    isScalar(): boolean;
    /**
     *
     */
    isZero(): boolean;
    /**
     * Natural logarithm.
     */
    log(): M;
    /**
     * Computes the square root of the squared norm.
     */
    magnitude(): MAGNITUDE;
    /**
     * Multiplication.
     */
    mul(rhs: I): M;
    /**
     * norm, ||x|| = sqrt(scp(x, rev(x)))
     */
    norm(): M;
    /**
     * squared norm, scp(x, rev(x))
     */
    quad(): M;
    /**
     * Right contraction
     */
    rco(rhs: I): M;
    /**
     * Reverse
     */
    rev(): M;
    /**
     * squared norm, scp(x, rev(x))
     */
    squaredNorm(): MAGNITUDE;
    /**
     * Scalar Product
     */
    scp(rhs: I): M;
}

/**
 * Special methods for operators on elements of linear spaces.
 * This is provided for interface consistency.
 * It may not adhere to strict mathematical definitions.
 */
interface LinearOperators<T, UNIT> extends AbelianOperators<T, UNIT> {
    /**
     * Unary ~
     */
    __tilde__(): T;
}

/**
 * Special methods for operators on elements of geometric spaces.
 */
interface GeometricOperators<T, UNIT> extends LinearOperators<T, UNIT>, RingOperators<T, UNIT> {
    __div__(rhs: any): T;
    __rdiv__(lhs: any): T;
    __vbar__(rhs: any): T;
    __rvbar__(lhs: any): T;
    __wedge__(rhs: any): T;
    __rwedge__(lhs: any): T;
    __lshift__(rhs: any): T;
    __rlshift__(lhs: any): T;
    __rshift__(rhs: any): T;
    __rrshift__(lhs: any): T;
    /**
     * !x = x.inv()
     */
    __bang__(): T;
    /**
     * Inverse (may not exist).
     */
    inv(): T;
    __eq__(rhs: T): boolean;
    __ne__(rhs: T): boolean;
    __ge__(rhs: T): boolean;
    __gt__(rhs: T): boolean;
    __le__(rhs: T): boolean;
    __lt__(rhs: T): boolean;
}

interface Measure<T> {
    /**
     * The scalar part of the measure, as a <code>number</code>.
     */
    a: number;
    coords: number[];
    add(rhs: T): T;
    angle(): T;
    cos(): T;
    cosh(): T;
    div(rhs: T): T;
    divByScalar(α: number): T;
    exp(): T;
    ext(rhs: T): T;
    /**
     * extraction of grade.
     */
    grade(grade: number): T;
    lerp(target: T, α: number): T;
    lco(rhs: T): T;
    log(): T;
    mul(rhs: T): T;
    norm(): T;
    pow(exponent: T): T;
    quad(): T;
    rco(rhs: T): T;
    toExponential(fractionDigits?: number): string;
    toFixed(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
    toString(radix?: number): string;
    scale(α: number): T;
    scp(rhs: T): T;
    sin(): T;
    sinh(): T;
    slerp(target: T, α: number): T;
    sub(rhs: T): T;
}

interface ImmutableMeasure<T> extends Measure<T> {
    direction(): T;
}

interface TrigMethods<T> {
    cos(): T;
    cosh(): T;
    exp(): T;
    log(): T;
    sin(): T;
    sinh(): T;
    tan(): T;
}

/**
 * <p>
 * The Unit class represents the units for a measure.
 * </p>
 */
declare class Unit {
    multiplier: number;
    dimensions: Dimensions;
    labels: string[];
    /**
     *
     */
    static ZERO: Unit;
    /**
     *
     */
    static ONE: Unit;
    /**
     *
     */
    static KILOGRAM: Unit;
    /**
     *
     */
    static METER: Unit;
    /**
     *
     */
    static SECOND: Unit;
    /**
     *
     */
    static COULOMB: Unit;
    /**
     *
     */
    static AMPERE: Unit;
    /**
     *
     */
    static KELVIN: Unit;
    /**
     *
     */
    static MOLE: Unit;
    /**
     *
     */
    static CANDELA: Unit;
    /**
     * @param multiplier
     * @param dimensions
     * @param labels The label strings to use for each dimension.
     */
    constructor(multiplier: number, dimensions: Dimensions, labels: string[]);
    /**
     * @param rhs
     * @returns
     */
    compatible(rhs: Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    add(rhs: Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    __add__(rhs: Unit): Unit;
    /**
     * @param lhs
     * @returns
     */
    __radd__(lhs: Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    sub(rhs: Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    __sub__(rhs: Unit): Unit;
    /**
     * @param lhs
     * @returns
     */
    __rsub__(lhs: Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    mul(rhs: Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    __mul__(rhs: number | Unit): Unit;
    /**
     * @param lhs
     * @returns
     */
    __rmul__(lhs: number | Unit): Unit;
    /**
     * @param rhs
     * @returns
     */
    div(rhs: Unit): Unit;
    /**
     * @param α
     * @returns
     */
    divByScalar(α: number): Unit;
    __div__(other: number | Unit): Unit;
    __rdiv__(other: number | Unit): Unit;
    /**
     * Intentionaly undocumented.
     */
    pattern(): string;
    /**
     * @param exponent
     * @returns
     */
    pow(exponent: QQ): Unit;
    /**
     * @returns
     */
    inv(): Unit;
    /**
     * @returns
     */
    neg(): Unit;
    /**
     * @returns
     */
    isOne(): boolean;
    /**
     * @returns
     */
    isZero(): boolean;
    /**
     *
     */
    lerp(target: Unit, α: number): Unit;
    /**
     * @returns
     */
    norm(): Unit;
    /**
     * @returns
     */
    quad(): Unit;
    /**
     * @param n
     * @returns
     */
    reflect(n: Unit): Unit;
    /**
     * @param rotor
     * @returns
     */
    rotate(rotor: Unit): Unit;
    /**
     * @param α
     * @returns
     */
    scale(α: number): Unit;
    /**
     * @param target
     * @param α
     * @returns
     */
    slerp(target: Unit, α: number): Unit;
    /**
     * @returns
     */
    sqrt(): Unit;
    /**
     * @param σ
     * @returns
     */
    stress(σ: Unit): Unit;
    /**
     * @param fractionDigits
     * @param compact
     * @returns
     */
    toExponential(fractionDigits?: number, compact?: boolean): string;
    /**
     * @param fractionDigits
     * @param compact
     * @returns
     */
    toFixed(fractionDigits?: number, compact?: boolean): string;
    /**
     * @param precision
     * @param compact
     * @returns
     */
    toPrecision(precision?: number, compact?: boolean): string;
    /**
     * @param radix
     * @param compact
     * @returns
     */
    toString(radix?: number, compact?: boolean): string;
    /**
     * @returns
     */
    __pos__(): Unit;
    /**
     * @returns
     */
    __neg__(): Unit;
    /**
     * @param uom
     * @returns
     */
    static isOne(uom: Unit): boolean;
    /**
     * @param uom
     * @returns
     */
    static assertDimensionless(uom: Unit): void;
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    static compatible(lhs: Unit, rhs: Unit): Unit;
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    static mul(lhs: Unit, rhs: Unit): Unit;
    /**
     * @param lhs
     * @param rhs
     * @returns
     */
    static div(lhs: Unit, rhs: Unit): Unit;
    /**
     * @param uom
     * @returns
     */
    static sqrt(uom: Unit): Unit;
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
declare class G2 implements ImmutableMeasure<G2>, GeometricE2, GeometricNumber<G2, G2, SpinorE2, VectorE2, G2, number, Unit>, GeometricOperators<G2, Unit>, TrigMethods<G2> {
    /**
     * The coordinate values are stored in a number array.
     * This should be convenient and efficient for tensor calculations.
     *
     * @property _coords
     * @type number[]
     * @private
     */
    private _coords;
    /**
     * @property uom
     * @type {Unit}
     */
    uom: Unit;
    /**
     * @property _zero
     * @type G2
     * @static
     * @private
     */
    private static _zero;
    /**
     * @property zero
     * @type G2
     * @static
     * @readOnly
     */
    static get zero(): G2;
    static set zero(unused: G2);
    /**
     * @property _one
     * @type G2
     * @static
     * @private
     */
    private static _one;
    /**
     * @property one
     * @type G2
     * @static
     * @readOnly
     */
    static get one(): G2;
    static set one(unused: G2);
    /**
     * @property _e2
     * @type G2
     * @static
     * @private
     */
    private static _e1;
    /**
     * @property e1
     * @type G2
     * @static
     * @readOnly
     */
    static get e1(): G2;
    static set e1(unused: G2);
    /**
     * @property _e2
     * @type G2
     * @static
     * @private
     */
    private static _e2;
    /**
     * @property e2
     * @type G2
     * @static
     * @readOnly
     */
    static get e2(): G2;
    static set e2(unused: G2);
    /**
     * @property _I
     * @type G2
     * @static
     * @private
     */
    private static _I;
    /**
     * @property I
     * @type G2
     * @static
     * @readOnly
     */
    static get I(): G2;
    static set I(unused: G2);
    static kilogram: G2;
    static meter: G2;
    static second: G2;
    static coulomb: G2;
    static ampere: G2;
    static kelvin: G2;
    static mole: G2;
    static candela: G2;
    /**
     * @class G2
     * @constructor
     * @param [α = 0] {number} The scalar part of the multivector.
     * @param [x = 0] {number} The vector component of the multivector in the x-direction.
     * @param [y = 0] {number} The vector component of the multivector in the y-direction.
     * @param [β = 0] {number} The pseudoscalar part of the multivector.
     * @param [uom] The optional unit of measure.
     */
    constructor(α?: number, x?: number, y?: number, β?: number, uom?: Unit);
    /**
     * The scalar part of this multivector.
     */
    get a(): number;
    set a(unused: number);
    /**
     * The coordinate corresponding to the <b>e1</b> basis vector, without the unit of measure.
     *
     * @property x
     * @type number
     * @readOnly
     */
    get x(): number;
    set x(unused: number);
    /**
     * The coordinate corresponding to the <b>e2</b> basis vector, without the unit of measure.
     *
     * @property y
     * @type number
     * @readOnly
     */
    get y(): number;
    set y(unused: number);
    /**
     * The pseudoscalar part of this multivector.
     * @property beta
     * @type number
     * @readOnly
     */
    get b(): number;
    set b(unused: number);
    static fromCartesian(α: number, x: number, y: number, β: number, uom: Unit): G2;
    get coords(): number[];
    coordinate(index: number): number;
    private static add;
    /**
     * @method add
     * @param rhs {G2}
     * @return {G2}
     * @chainable
     */
    add(rhs: G2): G2;
    /**
     * Computes <code>this + Iβ</code>
     */
    addPseudo(β: Unit): G2;
    /**
     * Computes <code>this + α</code>
     */
    addScalar(α: Unit): G2;
    __add__(other: any): G2;
    __radd__(other: any): G2;
    adj(): G2;
    /**
     * @returns grade(log(this), 2)
     */
    angle(): G2;
    /**
     * Computes the <e>Clifford conjugate</em> of this multivector.
     * The grade multiplier is -1<sup>x(x+1)/2</sup>
     */
    conj(): G2;
    /**
     * @param t
     * @param controlBegin
     * @param controlEnd
     * @param endPoint
     */
    cubicBezier(t: number, controlBegin: GeometricE2, controlEnd: GeometricE2, endPoint: GeometricE2): G2;
    /**
     * @method direction
     * @return {G2}
     * @chainable
     */
    direction(): G2;
    /**
     * @param point
     */
    distanceTo(point: GeometricE2): number;
    /**
     * @method equals
     * @param other {any}
     * @return {boolean}
     */
    equals(point: GeometricE2): boolean;
    private static sub;
    /**
     *
     */
    sub(rhs: G2): G2;
    __sub__(rhs: Unit | G2 | number): G2;
    __rsub__(lhs: Unit | G2 | number): G2;
    mul(rhs: G2): G2;
    __mul__(other: any): G2;
    __rmul__(other: any): G2;
    scale(α: number): G2;
    div(rhs: G2): G2;
    divByScalar(α: number): G2;
    __div__(other: any): G2;
    __rdiv__(other: number | G2): G2;
    /**
     * @method scp
     * @param rhs {G2}
     * @return {G2}
     * @chainable
     */
    scp(rhs: G2): G2;
    private static ext;
    /**
     * @method ext
     * @param rhs {G2}
     * @return {G2}
     * @chainable
     */
    ext(rhs: G2): G2;
    __wedge__(other: any): G2;
    __rwedge__(other: any): G2;
    private static lshift;
    /**
     * @method lerp
     * @param target {G2}
     * @param α {number}
     * @return {G2}
     * @chainable
     */
    lerp(target: G2, α: number): G2;
    /**
     * @method lco
     * @param lhs {G2}
     * @return {G2}
     * @chainable
     */
    lco(rhs: G2): G2;
    __lshift__(other: any): G2;
    __rlshift__(other: any): G2;
    private static rshift;
    /**
     * @method rco
     * @param rhs {G2}
     * @return {G2}
     * @chainable
     */
    rco(rhs: G2): G2;
    __rshift__(other: any): G2;
    __rrshift__(other: any): G2;
    __vbar__(other: any): G2;
    __rvbar__(other: any): G2;
    /**
     * @method pow
     * @param exponent {G2}
     * @return {G2}
     * @chainable
     */
    pow(exponent: G2): G2;
    __bang__(): G2;
    __pos__(): G2;
    /**
     * @method neg
     * @return {G2}
     * @chainable
     */
    neg(): G2;
    __neg__(): G2;
    /**
     * ~ (tilde) produces reversion.
     */
    __tilde__(): G2;
    /**
     * @method grade
     * @param grade {number}
     * @return {G2}
     * @chainable
     */
    grade(grade: number): G2;
    /**
     * @method cos
     * @return {G2}
     * @chainable
     */
    cos(): G2;
    /**
     * @method cosh
     * @return {G2}
     * @chainable
     */
    cosh(): G2;
    /**
     * @method exp
     * @return {G2}
     * @chainable
     */
    exp(): G2;
    /**
     * Computes the <em>inverse</em> of this multivector, if it exists.
     *
     * @method inv
     * @return {G2}
     * @chainable
     */
    inv(): G2;
    /**
     * Determines whether this multivector has only grade 0 and grade 2 components.
     */
    isSpinor(): boolean;
    /**
     *
     */
    log(): G2;
    /**
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     */
    magnitude(): G2;
    /**
     * Intentionally undocumented.
     */
    magnitudeSansUnits(): number;
    /**
     * @method norm
     * @return {G2}
     * @chainable
     */
    norm(): G2;
    /**
     * @method quad
     * @return {G2}
     * @chainable
     */
    quad(): G2;
    /**
     * @method quadraticBezier
     * @param t {number}
     * @param controlPoint {GeometricE2}
     * @param endPoint {GeometricE2}
     * @return {G2}
     * @chainable
     */
    quadraticBezier(t: number, controlPoint: GeometricE2, endPoint: GeometricE2): G2;
    /**
     * @method squaredNorm
     * @return {G2}
     * @chainable
     */
    squaredNorm(): G2;
    /**
     * Intentionally undocumented.
     */
    squaredNormSansUnits(): number;
    /**
     * @method stress
     * @param σ {VectorE2}
     * @return {G2}
     * @chainable
     */
    stress(σ: VectorE2): G2;
    /**
     * Computes the <em>reflection</em> of this multivector in the plane with normal <code>n</code>.
     *
     *
     * @method reflect
     * @param n {VectorE2}
     * @return {G2}
     * @chainable
     */
    reflect(n: VectorE2): G2;
    /**
     * @method rev
     * @return {G2}
     * @chainable
     */
    rev(): G2;
    /**
     * @method rotate
     * @param spinor {SpinorE2}
     * @return {G2}
     * @chainable
     */
    rotate(spinor: SpinorE2): G2;
    /**
     * @method sin
     * @return {G2}
     * @chainable
     */
    sin(): G2;
    /**
     * @method sinh
     * @return {G2}
     * @chainable
     */
    sinh(): G2;
    /**
     * @method slerp
     * @param target {G2}
     * @param α {number}
     * @return {G2}
     * @chainable
     */
    slerp(target: G2, α: number): G2;
    /**
     * @method tan
     * @return {G2}
     * @chainable
     */
    tan(): G2;
    /**
     * @method isOne
     * @return {boolean}
     */
    isOne(): boolean;
    isNaN(): boolean;
    isScalar(): boolean;
    /**
     * @method isZero
     * @return {boolean}
     */
    isZero(): boolean;
    private toStringCustom;
    /**
     * @method toExponential
     * @param [fractionDigits] {number}
     * @return {string}
     */
    toExponential(fractionDigits?: number): string;
    /**
     * @method toFixed
     * @param [fractionDigits] {number}
     * @return {string}
     */
    toFixed(fractionDigits?: number): string;
    /**
     * @method toPrecision
     * @param [precision] {number}
     * @return {string}
     */
    toPrecision(precision?: number): string;
    /**
     * @method toString
     * @param [radix] {number}
     * @return {string}
     */
    toString(radix?: number): string;
    toStringIJK(): string;
    __eq__(rhs: G2): boolean;
    __ne__(rhs: G2): boolean;
    __ge__(rhs: G2): boolean;
    __gt__(rhs: G2): boolean;
    __le__(rhs: G2): boolean;
    __lt__(rhs: G2): boolean;
    /**
     * @method copy
     * @param M {GeometricE2}
     * @return {G2}
     * @chainable
     * @static
     */
    static copy(m: GeometricE2): G2;
    /**
     * @method fromVectorE2
     * @param vector {VectorE2}
     * @return {G2}
     * @chainable
     * @static
     */
    static fromVectorE2(vector: VectorE2): G2;
    /**
     * @method vector
     * @param x {number}
     * @param y {number}
     * @param [uom] {Unit}
     * @return {G2}
     * @chainable
     * @static
     */
    static vector(x: number, y: number, uom?: Unit): G2;
}

/**
 * The even sub-algebra of the <em>Euclidean algebra 𝓖(3, 0)</em>.
 * @class SpinorE3
 * @extends Scalar
 */
interface SpinorE3 extends Scalar {
    /**
     * The <em>bivector</em> yz-coordinate as a <code>number</code>.
     */
    yz: number;
    /**
     * The <em>bivector</em> zx-coordinate as a <code>number</code>.
     */
    zx: number;
    /**
     * The <em>bivector</em> xy-coordinate as a <code>number</code>.
     */
    xy: number;
}

/**
 *
 */
interface VectorE3 {
    /**
     * The Cartesian x-coordinate.
     */
    x: number;
    /**
     * The Cartesian y-coordinate.
     */
    y: number;
    /**
     * The Cartesian z-coordinate.
     */
    z: number;
}

/**
 * @class GeometricE3
 * @extends Pseudo
 * @extends Scalar
 * @extends SpinorE3
 * @extends VectorE3
 */
interface GeometricE3 extends Pseudo, Scalar, SpinorE3, VectorE3 {
}

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
declare class G3 implements ImmutableMeasure<G3>, GeometricE3, GeometricNumber<G3, G3, SpinorE3, VectorE3, G3, number, Unit>, GeometricOperators<G3, Unit>, TrigMethods<G3> {
    static get BASIS_LABELS_GEOMETRIC(): string[][];
    static get BASIS_LABELS_HAMILTON(): string[][];
    static get BASIS_LABELS_STANDARD(): string[][];
    static get BASIS_LABELS_STANDARD_HTML(): string[][];
    /**
     * The current basis labels.
     */
    static BASIS_LABELS: string[][];
    static zero: G3;
    static one: G3;
    static e1: G3;
    static e2: G3;
    static e3: G3;
    static kilogram: G3;
    static meter: G3;
    static second: G3;
    static coulomb: G3;
    static ampere: G3;
    static kelvin: G3;
    static mole: G3;
    static candela: G3;
    /**
     * The coordinate values are stored in a number array.
     * This should be convenient and efficient for tensor calculations.
     */
    private _coords;
    /**
     * The optional unit of measure.
     */
    uom: Unit;
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
    constructor(α: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, β: number, uom?: Unit);
    /**
     * The scalar part of this multivector.
     */
    get a(): number;
    set a(unused: number);
    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>1</sub></b> basis vector.
     */
    get x(): number;
    set x(value: number);
    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>2</sub></b> basis vector.
     */
    get y(): number;
    set y(value: number);
    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>3</sub></b> basis vector.
     */
    get z(): number;
    set z(value: number);
    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub></b> basis bivector.
     */
    get xy(): number;
    set xy(unused: number);
    /**
     * The coordinate corresponding to the <b>e<sub>2</sub>e<sub>3</sub></b> basis bivector.
     */
    get yz(): number;
    set yz(unused: number);
    /**
     * The coordinate corresponding to the <b>e<sub>3</sub>e<sub>1</sub></b> basis bivector.
     */
    get zx(): number;
    set zx(unused: number);
    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub>e<sub>3</sub></b> basis trivector.
     * The pseudoscalar coordinate of this multivector.
     */
    get b(): number;
    set b(unused: number);
    static fromCartesian(α: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, β: number, uom: Unit): G3;
    get coords(): number[];
    coordinate(index: number): number;
    /**
     * Computes the sum of this multivector and another considered to be the rhs of the binary addition, `+`, operator.
     * This method does not change this multivector.
     */
    add(rhs: G3): G3;
    /**
     * Computes <code>this + Iβ</code>
     */
    addPseudo(β: Unit): G3;
    /**
     * Computes <code>this + α</code>
     */
    addScalar(α: Unit): G3;
    __add__(rhs: Unit | G3): G3;
    __radd__(lhs: Unit | G3): G3;
    adj(): G3;
    /**
     * @returns grade(log(this), 2)
     */
    angle(): G3;
    /**
     * Computes the <e>Clifford conjugate</em> of this multivector.
     * The grade multiplier is -1<sup>x(x+1)/2</sup>
     */
    conj(): G3;
    /**
     * @param t
     * @param controlBegin
     * @param controlEnd
     * @param endPoint
     */
    cubicBezier(t: number, controlBegin: GeometricE3, controlEnd: GeometricE3, endPoint: GeometricE3): G3;
    /**
     *
     */
    direction(): G3;
    /**
     *
     */
    sub(rhs: G3): G3;
    __sub__(rhs: Unit | G3): G3;
    __rsub__(lhs: Unit | G3): G3;
    mul(rhs: G3): G3;
    __mul__(rhs: any): any;
    __rmul__(lhs: any): any;
    scale(α: number): G3;
    div(rhs: G3): G3;
    divByScalar(α: number): G3;
    __div__(rhs: any): G3;
    __rdiv__(lhs: any): G3;
    dual(): G3;
    scp(rhs: G3): G3;
    ext(rhs: G3): G3;
    __vbar__(rhs: any): G3;
    __rvbar__(lhs: any): G3;
    __wedge__(rhs: any): G3;
    __rwedge__(lhs: any): G3;
    lco(rhs: G3): G3;
    __lshift__(rhs: any): G3;
    __rlshift__(lhs: any): G3;
    rco(rhs: G3): G3;
    __rshift__(rhs: any): G3;
    __rrshift__(lhs: any): G3;
    pow(exponent: G3): G3;
    __bang__(): G3;
    /**
     * Unary plus(+).
     */
    __pos__(): this;
    /**
     * @returns <code>-1 * this</code>
     */
    neg(): G3;
    /**
     * Unary minus (-).
     */
    __neg__(): G3;
    rev(): G3;
    /**
     * ~ (tilde) produces reversion.
     */
    __tilde__(): G3;
    /**
     * @param grade
     */
    grade(grade: number): G3;
    cross(vector: G3): G3;
    isOne(): boolean;
    isScalar(): boolean;
    isZero(): boolean;
    lerp(target: G3, α: number): G3;
    cos(): G3;
    cosh(): G3;
    distanceTo(point: G3): number;
    equals(other: G3): boolean;
    exp(): G3;
    /**
     * Computes the <em>inverse</em> of this multivector, if it exists.
     */
    inv(): G3;
    /**
     *
     */
    log(): G3;
    /**
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     */
    magnitude(): G3;
    /**
     * Intentionally undocumented.
     */
    magnitudeSansUnits(): number;
    /**
     * Computes the magnitude of this G3. The magnitude is the square root of the quadrance.
     */
    norm(): G3;
    /**
     * Computes the quadrance of this G3. The quadrance is the square of the magnitude.
     */
    quad(): G3;
    /**
     * @param t
     * @param controlPoint
     * @param endPoint
     */
    quadraticBezier(t: number, controlPoint: GeometricE3, endPoint: GeometricE3): G3;
    squaredNorm(): G3;
    /**
     * Intentionally undocumented
     */
    squaredNormSansUnits(): number;
    /**
     * @param σ
     */
    stress(σ: VectorE3): G3;
    /**
     * Computes the <em>reflection</em> of this multivector in the plane with normal <code>n</code>.
     * @param n
     */
    reflect(n: VectorE3): G3;
    rotate(R: SpinorE3): G3;
    sin(): G3;
    sinh(): G3;
    slerp(target: G3, α: number): G3;
    sqrt(): G3;
    tan(): G3;
    /**
     * Intentionally undocumented.
     */
    toStringCustom(coordToString: (x: number) => string, labels: (string | string[])[]): string;
    toExponential(fractionDigits?: number): string;
    toFixed(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
    toString(radix?: number): string;
    __eq__(rhs: G3): boolean;
    __ne__(rhs: G3): boolean;
    __ge__(rhs: G3): boolean;
    __gt__(rhs: G3): boolean;
    __le__(rhs: G3): boolean;
    __lt__(rhs: G3): boolean;
    /**
     * Provides access to the internals of G3 in order to use `product` functions.
     */
    private static mutator;
    /**
     * Creates a new G3 from the coordinates of m and the optional unit of measure, uom.
     */
    static copy(m: GeometricE3, uom?: Unit): G3;
    static direction(vector: VectorE3): G3;
    static fromSpinor(spinor: SpinorE3): G3;
    static fromVector(vector: VectorE3, uom?: Unit): G3;
    static random(uom?: Unit): G3;
    static scalar(α: number, uom?: Unit): G3;
    static vector(x: number, y: number, z: number, uom?: Unit): G3;
}

declare function cosh(x: number): number;
declare function sinh(x: number): number;
declare const mathcore: {
    acos: <T>(x: T) => T;
    asin: <T>(x: T) => T;
    atan: <T>(x: T) => T;
    cos: <T>(x: T) => T;
    cosh: <T>(x: T) => T;
    exp: <T>(x: T) => T;
    log: <T>(x: T) => T;
    norm: <T>(x: T) => T;
    quad: <T>(x: T) => T;
    sin: <T>(x: T) => T;
    sinh: <T>(x: T) => T;
    sqrt: <T>(x: T) => T;
    tan: <T>(x: T) => T;
    tanh: <T>(x: T) => T;
    Math: {
        cosh: typeof cosh;
        sinh: typeof sinh;
    };
};

export { Dimensions, G2, G3, QQ, Unit, mathcore };
