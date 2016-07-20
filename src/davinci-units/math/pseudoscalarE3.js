import G3 = require('davinci-units/math/G3');
import Unit = require('davinci-units/math/Unit');

var pseudoscalarE3 = function(β: number, uom?: Unit): G3 {
    return new G3(0, 0, 0, 0, 0, 0, 0, β, uom);
};

export = pseudoscalarE3;
