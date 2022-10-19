import Pseudo from './Pseudo';
import Scalar from './Scalar';
import SpinorE3 from './SpinorE3';
import VectorE3 from './VectorE3';

/**
 * @class GeometricE3
 * @extends Pseudo
 * @extends Scalar
 * @extends SpinorE3
 * @extends VectorE3
 */
interface GeometricE3 extends Pseudo, Scalar, SpinorE3, VectorE3 {
}

export default GeometricE3;
