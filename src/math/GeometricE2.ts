import Pseudo from './Pseudo';
import Scalar from './Scalar';
import SpinorE2 from './SpinorE2';
import VectorE2 from './VectorE2';

/**
 * @class GeometricE2
 * @extends Pseudo
 * @extends Scalar
 * @extends SpinorE2
 * @extends VectorE2
 */
interface GeometricE2 extends Pseudo, Scalar, SpinorE2, VectorE2 {
}

export default GeometricE2;
