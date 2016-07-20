// math
import VectorE1 from './davinci-units/math/VectorE1';
import VectorE2 from './davinci-units/math/VectorE2';
import VectorE3 from './davinci-units/math/VectorE3';
import VectorE4 from './davinci-units/math/VectorE4';
import {Dimensions} from './davinci-units/math/Dimensions';
import G1 from './davinci-units/math/G1';
import GeometricE1 from './davinci-units/math/GeometricE1';
import {G2} from './davinci-units/math/G2';
import G3 from './davinci-units/math/G3';
import gauss from './davinci-units/math/gauss';
import GeometricNumber from './davinci-units/math/GeometricNumber';
import LinearNumber from './davinci-units/math/LinearNumber';
import mathcore from './davinci-units/math/mathcore';
import Measure from './davinci-units/math/Measure';
import Mutable from './davinci-units/math/Mutable';
import {QQ} from './davinci-units/math/QQ';
import SpinorE1 from './davinci-units/math/SpinorE1';
import SpinorE2 from './davinci-units/math/SpinorE2';
import SpinorE3 from './davinci-units/math/SpinorE3';
import {Unit} from './davinci-units/math/Unit';

import config from './davinci-units/config';

/**
 *
 */
const units = {
    /**
     * The publish date of the latest version of the library.
     */
    get LAST_MODIFIED() { return config.LAST_MODIFIED },

    /**
     * The semantic version of the library.
     */
    get VERSION() { return config.VERSION },

    get Dimensions() { return Dimensions },
    get Unit() { return Unit },
    get G2() { return G2 },
    get G3() { return G3 },
    get QQ() { return QQ },

    // universal math functions
    get cos() { return mathcore.cos },
    get cosh() { return mathcore.cosh },
    get exp() { return mathcore.exp },
    get log() { return mathcore.log },
    get norm() { return mathcore.norm },
    get quad() { return mathcore.quad },
    get sin() { return mathcore.sin },
    get sinh() { return mathcore.sinh },
    get sqrt() { return mathcore.sqrt },

}
export default units;
