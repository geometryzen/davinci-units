import { ScalarCoord } from "./ScalarCoord";

/**
 * The even sub-algebra of the <em>Euclidean algebra 𝓖(3, 0)</em>.
 */
export interface SpinorCoords extends ScalarCoord {
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
