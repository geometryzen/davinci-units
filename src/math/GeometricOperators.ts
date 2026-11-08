import { LinearOperators } from "./LinearOperators";
import { RingOperators } from "./RingOperators";

/**
 * Special methods for operators on elements of geometric spaces.
 */
export interface GeometricOperators<T, UNIT> extends LinearOperators<T, UNIT>, RingOperators<T, UNIT> {
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
