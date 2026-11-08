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
    __mul__(rhs: T): T;
    /**
     * Multiplication of the the target from the left.
     */
    __rmul__(lhs: T): T;
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
    __div__(rhs: T): T;
    __rdiv__(lhs: T): T;
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
     */
    get numer(): number;
    set numer(unused: number);
    /**
     *
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
     * @param rhs
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
     * @param n
     * @param d
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
    E: QQ;
    A: QQ;
    I: QQ;
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
     * @param E The temperature component of the dimensions object.
     * @param A The amount component of the dimensions object.
     * @param I The intensity component of the dimensions object.
     */
    constructor(M: QQ, L: QQ, T: QQ, Q: QQ, E: QQ, A: QQ, I: QQ);
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
     * @param exponent
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
    __add__(rhs: Dimensions): Dimensions | undefined;
    /**
     * @param lhs
     * @returns
     */
    __radd__(lhs: Dimensions): Dimensions | undefined;
    /**
     *
     * @param rhs
     * @returns
     */
    __sub__(rhs: Dimensions): Dimensions | undefined;
    /**
     *
     * @param lhs
     * @returns
     */
    __rsub__(lhs: Dimensions): Dimensions | undefined;
    /**
     *
     * @param rhs
     * @returns
     */
    __mul__(rhs: Dimensions): Dimensions | undefined;
    /**
     *
     * @param lhs
     * @returns
     */
    __rmul__(lhs: Dimensions): Dimensions | undefined;
    /**
     *
     * @param rhs
     * @returns
     */
    __div__(rhs: Dimensions): Dimensions | undefined;
    /**
     * @param lhs
     * @returns
     */
    __rdiv__(lhs: Dimensions): Dimensions | undefined;
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

interface PseudoCoord {
    /**
     * The pseudoscalar coordinate as a number.I
     */
    readonly b: number;
}

interface ScalarCoord {
    /**
     * The scalar coordinate as a number.
     */
    readonly a: number;
}

/**
 * The even sub-algebra of the <em>Euclidean algebra 𝓖(3, 0)</em>.
 */
interface SpinorCoords extends ScalarCoord {
    /**
     * The <em>bivector</em> yz-coordinate as a <code>number</code>.
     */
    readonly yz: number;
    /**
     * The <em>bivector</em> zx-coordinate as a <code>number</code>.
     */
    readonly zx: number;
    /**
     * The <em>bivector</em> xy-coordinate as a <code>number</code>.
     */
    readonly xy: number;
}

/**
 *
 */
interface VectorCoords {
    /**
     * The Cartesian x-coordinate.
     */
    readonly x: number;
    /**
     * The Cartesian y-coordinate.
     */
    readonly y: number;
    /**
     * The Cartesian z-coordinate.
     */
    readonly z: number;
}

/**
 *
 */
interface GeometricCoords extends PseudoCoord, ScalarCoord, SpinorCoords, VectorCoords {
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

interface GeometricMeasure<T> extends Measure<T> {
    direction(): T;
    distanceTo(point: T): T;
    magnitude(): T;
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
    isDimensionless(): boolean;
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
    __div__(rhs: T): T;
    __rdiv__(lhs: T): T;
    __vbar__(rhs: T): T;
    __rvbar__(lhs: T): T;
    __wedge__(rhs: T): T;
    __rwedge__(lhs: T): T;
    __lshift__(rhs: T): T;
    __rlshift__(lhs: T): T;
    __rshift__(rhs: T): T;
    __rrshift__(lhs: T): T;
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
    labels: [string, string, string, string, string, string, string];
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
    static MASS: Unit;
    /**
     *
     */
    static LENGTH: Unit;
    /**
     *
     */
    static TIME: Unit;
    /**
     *
     */
    static CHARGE: Unit;
    /**
     *
     */
    static CURRENT: Unit;
    /**
     *
     */
    static TEMPERATURE: Unit;
    /**
     *
     */
    static AMOUNT: Unit;
    /**
     *
     */
    static INTENSITY: Unit;
    /**
     * @param multiplier
     * @param dimensions
     * @param labels The label strings to use for each dimension.
     */
    constructor(multiplier: number, dimensions: Dimensions, labels: [string, string, string, string, string, string, string]);
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
 * Represents a multivector for a 3-dimensional vector space with a Euclidean metric.
 * </p>
 * <p>
 * Immutable, making it easy to reason about values.
 * </p>
 * <p>
 * Supports units of measure.
 * </p>
 */
declare class Euclidean3 implements GeometricMeasure<Euclidean3>, GeometricCoords, GeometricNumber<Euclidean3, Euclidean3, SpinorCoords, VectorCoords, Euclidean3, number, Unit>, GeometricOperators<Euclidean3, Unit>, TrigMethods<Euclidean3> {
    #private;
    static get BASIS_LABELS_GEOMETRIC(): string[][];
    static get BASIS_LABELS_HAMILTON(): string[][];
    static get BASIS_LABELS_STANDARD(): string[][];
    static get BASIS_LABELS_STANDARD_HTML(): string[][];
    /**
     * The current basis labels.
     */
    static BASIS_LABELS: string[][];
    static readonly zero: Euclidean3;
    static readonly one: Euclidean3;
    static readonly e1: Euclidean3;
    static readonly e2: Euclidean3;
    static readonly e3: Euclidean3;
    /**
     * kilogram in S.I. units.
     */
    static readonly MASS: Euclidean3;
    /**
     * @deprecated Use MASS instead.
     */
    static readonly kilogram: Euclidean3;
    /**
     * meter in S.I. units.
     */
    static readonly LENGTH: Euclidean3;
    /**
     * @deprecated Use LENGTH instead.
     */
    static readonly meter: Euclidean3;
    /**
     * second in S.I. units.
     */
    static readonly TIME: Euclidean3;
    /**
     * @deprecated Use TIME instead.
     */
    static readonly second: Euclidean3;
    /**
     * coulomb in S.I. units.
     */
    static readonly CHARGE: Euclidean3;
    /**
     * @deprecated Use CHARGE instead.
     */
    static readonly coulomb: Euclidean3;
    /**
     * ampere in S.I. units.
     */
    static readonly CURRENT: Euclidean3;
    /**
     * @deprecated Use CURRENT instead.
     */
    static readonly ampere: Euclidean3;
    /**
     * kelvin in S.I. units.
     */
    static readonly TEMPERATURE: Euclidean3;
    /**
     * @deprecated Use TEMPERATUE instead.
     */
    static readonly kelvin: Euclidean3;
    /**
     * mole in S.I. units
     */
    static readonly AMOUNT: Euclidean3;
    /**
     * @deprecated Use AMOUNT instead.
     */
    static readonly mole: Euclidean3;
    /**
     * candela in S.I. units
     */
    static readonly INTENSITY: Euclidean3;
    /**
     * @deprecated Use INTENSITY instead.
     */
    static readonly candela: Euclidean3;
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
    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>1</sub></b> basis vector.
     */
    get x(): number;
    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>2</sub></b> basis vector.
     */
    get y(): number;
    /**
     * The Cartesian coordinate corresponding to the <b>e<sub>3</sub></b> basis vector.
     */
    get z(): number;
    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub></b> basis bivector.
     */
    get xy(): number;
    /**
     * The coordinate corresponding to the <b>e<sub>2</sub>e<sub>3</sub></b> basis bivector.
     */
    get yz(): number;
    /**
     * The coordinate corresponding to the <b>e<sub>3</sub>e<sub>1</sub></b> basis bivector.
     */
    get zx(): number;
    /**
     * The coordinate corresponding to the <b>e<sub>1</sub>e<sub>2</sub>e<sub>3</sub></b> basis trivector.
     * The pseudoscalar coordinate of this multivector.
     */
    get b(): number;
    static fromCartesian(α: number, x: number, y: number, z: number, xy: number, yz: number, zx: number, β: number, uom: Unit): Euclidean3;
    get coords(): number[];
    coordinate(index: number): number;
    /**
     * Computes the sum of this multivector and another considered to be the rhs of the binary addition, `+`, operator.
     * This method does not change this multivector.
     */
    add(rhs: Euclidean3): Euclidean3;
    /**
     * Computes <code>this + Iβ</code>
     */
    addPseudo(β: Unit): Euclidean3;
    /**
     * Computes <code>this + α</code>
     */
    addScalar(α: Unit): Euclidean3;
    __add__(rhs: Unit | Euclidean3): Euclidean3;
    __radd__(lhs: Unit | Euclidean3): Euclidean3;
    adj(): Euclidean3;
    /**
     * @returns grade(log(this), 2)
     */
    angle(): Euclidean3;
    /**
     * Computes the <e>Clifford conjugate</em> of this multivector.
     * The grade multiplier is -1<sup>x(x+1)/2</sup>
     */
    conj(): Euclidean3;
    /**
     * @param t
     * @param controlBegin
     * @param controlEnd
     * @param endPoint
     */
    cubicBezier(t: number, controlBegin: GeometricCoords, controlEnd: GeometricCoords, endPoint: GeometricCoords): Euclidean3;
    /**
     *
     */
    direction(): Euclidean3;
    /**
     *
     */
    sub(rhs: Euclidean3): Euclidean3;
    __sub__(rhs: Unit | Euclidean3 | undefined): Euclidean3 | undefined;
    __rsub__(lhs: Unit | Euclidean3): Euclidean3;
    mul(rhs: Euclidean3): Euclidean3;
    __mul__(rhs: Euclidean3 | number): Euclidean3;
    __rmul__(lhs: Euclidean3 | number): Euclidean3;
    scale(α: number): Euclidean3;
    div(rhs: Euclidean3): Euclidean3;
    divByScalar(α: number): Euclidean3;
    __div__(rhs: Euclidean3 | number): Euclidean3;
    __rdiv__(lhs: Euclidean3 | number): Euclidean3;
    dual(): Euclidean3;
    scp(rhs: Euclidean3): Euclidean3;
    ext(rhs: Euclidean3): Euclidean3;
    __vbar__(rhs: Euclidean3 | number): Euclidean3;
    __rvbar__(lhs: Euclidean3 | number): Euclidean3;
    __wedge__(rhs: Euclidean3 | number): Euclidean3;
    __rwedge__(lhs: Euclidean3 | number): Euclidean3;
    lco(rhs: Euclidean3): Euclidean3;
    __lshift__(rhs: Euclidean3 | number): Euclidean3;
    __rlshift__(lhs: Euclidean3 | number): Euclidean3;
    rco(rhs: Euclidean3): Euclidean3;
    __rshift__(rhs: Euclidean3 | number): Euclidean3;
    __rrshift__(lhs: Euclidean3 | number): Euclidean3;
    pow(exponent: Euclidean3): Euclidean3;
    __bang__(): Euclidean3;
    /**
     * Unary plus(+).
     */
    __pos__(): Euclidean3;
    /**
     * @returns <code>-1 * this</code>
     */
    neg(): Euclidean3;
    /**
     * Unary minus (-).
     */
    __neg__(): Euclidean3;
    rev(): Euclidean3;
    /**
     * ~ (tilde) produces reversion.
     */
    __tilde__(): Euclidean3;
    /**
     * @param grade
     */
    grade(grade: number): Euclidean3;
    cross(vector: Euclidean3): Euclidean3;
    isDimensionless(): boolean;
    isOne(): boolean;
    isScalar(): boolean;
    isZero(): boolean;
    lerp(target: Euclidean3, α: number): Euclidean3;
    cos(): Euclidean3;
    cosh(): Euclidean3;
    distanceTo(point: Euclidean3): Euclidean3;
    equals(other: Euclidean3): boolean;
    exp(): Euclidean3;
    /**
     * Computes the <em>inverse</em> of this multivector, if it exists.
     */
    inv(): Euclidean3;
    /**
     *
     */
    log(): Euclidean3;
    /**
     * Computes the <em>square root</em> of the <em>squared norm</em>.
     */
    magnitude(): Euclidean3;
    /**
     * Intentionally undocumented.
     */
    magnitudeSansUnits(): number;
    /**
     * Computes the magnitude of this G3. The magnitude is the square root of the quadrance.
     */
    norm(): Euclidean3;
    /**
     * Computes the quadrance of this G3. The quadrance is the square of the magnitude.
     */
    quad(): Euclidean3;
    /**
     * @param t
     * @param controlPoint
     * @param endPoint
     */
    quadraticBezier(t: number, controlPoint: GeometricCoords, endPoint: GeometricCoords): Euclidean3;
    squaredNorm(): Euclidean3;
    /**
     * Intentionally undocumented
     */
    squaredNormSansUnits(): number;
    /**
     * @param σ
     */
    stress(σ: VectorCoords): Euclidean3;
    /**
     * Computes the <em>reflection</em> of this multivector in the plane with normal <code>n</code>.
     * @param n
     */
    reflect(n: VectorCoords): Euclidean3;
    rotate(R: SpinorCoords): Euclidean3;
    sin(): Euclidean3;
    sinh(): Euclidean3;
    slerp(target: Euclidean3, α: number): Euclidean3;
    sqrt(): Euclidean3;
    tan(): Euclidean3;
    /**
     * Intentionally undocumented.
     * @param dimensionLabels e.g. ["kg", "m", "s", "C", "K", "mol", "cd"]
     */
    toStringCustom(coordToString: (x: number) => string, dimensionLabels: [string, string, string, string, string, string, string], basisLabels: (string | string[])[]): string;
    toExponential(fractionDigits?: number): string;
    toFixed(fractionDigits?: number): string;
    toPrecision(precision?: number): string;
    toString(radix?: number): string;
    __eq__(rhs: Euclidean3): boolean;
    __ne__(rhs: Euclidean3): boolean;
    __ge__(rhs: Euclidean3): boolean;
    __gt__(rhs: Euclidean3): boolean;
    __le__(rhs: Euclidean3): boolean;
    __lt__(rhs: Euclidean3): boolean;
    /**
     * Creates a new G3 from the coordinates of m and the optional unit of measure, uom.
     */
    static copy(m: GeometricCoords, uom?: Unit): Euclidean3;
    static direction(vector: VectorCoords): Euclidean3;
    static fromSpinor(spinor: SpinorCoords): Euclidean3;
    static fromVector(vector: VectorCoords, uom?: Unit): Euclidean3;
    static random(uom?: Unit): Euclidean3;
    static scalar(α: number, uom?: Unit): Euclidean3;
    static vector(x: number, y: number, z: number, uom?: Unit): Euclidean3;
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

export { Dimensions, Euclidean3, QQ, Unit, mathcore };
export type { DivisionRingOperators, GeometricCoords, GeometricMeasure, GeometricNumber, GeometricOperators, SpinorCoords, TrigMethods, VectorCoords };
