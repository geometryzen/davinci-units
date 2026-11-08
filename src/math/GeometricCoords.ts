import { PseudoCoord } from "./PseudoCoord";
import { ScalarCoord } from "./ScalarCoord";
import { SpinorCoords } from "./SpinorCoords";
import { VectorCoords } from "./VectorCoords";

/**
 *
 */
export interface GeometricCoords extends PseudoCoord, ScalarCoord, SpinorCoords, VectorCoords {}
