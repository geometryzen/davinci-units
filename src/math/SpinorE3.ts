import Scalar from "./Scalar";

/**
 * The even sub-algebra of the <em>Euclidean algebra 𝓖(3, 0)</em>.
 * @class SpinorE3
 * @extends Scalar
 */
export interface SpinorE3 extends Scalar {
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
