import Pseudo from "./Pseudo";
import Scalar from "./Scalar";
import { SpinorE2 } from "./SpinorE2";
import { VectorE2 } from "./VectorE2";

/**
 * @class GeometricE2
 * @extends Pseudo
 * @extends Scalar
 * @extends SpinorE2
 * @extends VectorE2
 */
export interface GeometricE2 extends Pseudo, Scalar, SpinorE2, VectorE2 {}
