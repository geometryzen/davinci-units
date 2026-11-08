import { RingOperators } from "./RingOperators";

/**
 *
 */
export interface DivisionRingOperators<T, UNIT> extends RingOperators<T, UNIT> {
    __div__(rhs: T): T;
    __rdiv__(lhs: T): T;
}
