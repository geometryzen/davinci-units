import { assert } from 'chai'
import { Dimensions } from '../../src/math/Dimensions'
import { QQ } from '../../src/math/QQ'
import { Unit } from '../../src/math/Unit'

const Rat0 = QQ.valueOf(0, 1)
const Rat1 = QQ.valueOf(1, 1)
const Rat2 = QQ.valueOf(2, 1)

const ONE = Unit.ONE
const KILOGRAM = Unit.KILOGRAM
const METER = Unit.METER
const SECOND = Unit.SECOND
const AMPERE = Unit.AMPERE
const COULOMB = Unit.COULOMB
const KELVIN = Unit.KELVIN
const MOLE = Unit.MOLE
const CANDELA = Unit.CANDELA

const NEWTON = KILOGRAM.mul(METER).div(SECOND).div(SECOND)
const JOULE = NEWTON.mul(METER)
const HERTZ = ONE.div(SECOND)
const WATT = JOULE.div(SECOND)
const VOLT = JOULE.div(COULOMB)
const WEBER = VOLT.mul(SECOND)
const TESLA = WEBER.div(METER).div(METER)
const OHM = VOLT.div(AMPERE)
const SIEMEN = AMPERE.div(VOLT)
const FARAD = COULOMB.div(VOLT)
const HENRY = KILOGRAM.mul(METER).mul(METER).div(COULOMB).div(COULOMB)
const PASCAL = NEWTON.div(METER).div(METER)

describe("Unit", function () {
    const symbols = ["kg", "m", "s", "C", "K", "mol", "cd"];

    it("Construction", function () {
        const meter = new Unit(1, new Dimensions(Rat0, Rat1, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        assert.strictEqual(meter.multiplier, 1);
    });

    it("toString", function () {
        const dimensionless = new Unit(1234, new Dimensions(Rat0, Rat0, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        assert.strictEqual(ONE.toString(void 0, true), "");
        assert.strictEqual(METER.toString(void 0, true), "m");
        assert.strictEqual(KILOGRAM.toString(void 0, true), "kg");
        assert.strictEqual(SECOND.toString(void 0, true), "s");
        assert.strictEqual(AMPERE.toString(10, true), "A");
        assert.strictEqual(COULOMB.toString(10, true), "C");
        assert.strictEqual(KELVIN.toString(10, true), "K");
        assert.strictEqual(MOLE.toString(10, true), "mol");
        assert.strictEqual(CANDELA.toString(10, true), "cd");
        assert.strictEqual(dimensionless.toString(10, true), "1234");
    });
    it("mul", function () {
        const meter = new Unit(1, new Dimensions(Rat0, Rat1, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        const centimeter = meter.__mul__(0.01);
        const inch = centimeter.__mul__(2.54);
        const foot = inch.__mul__(12);
        const yard = foot.__mul__(3);
        const mile = yard.__mul__(1760);
        const micron = meter.__mul__(1e-6);
        const nanometer = meter.__mul__(1e-9);

        assert.strictEqual(meter.toFixed(4, true), "m");
        assert.strictEqual(centimeter.toString(), "0.01 m");
        assert.strictEqual(inch.toFixed(4).toString(), "0.0254 m");
        assert.strictEqual(foot.toFixed(4).toString(), "0.3048 m");
        assert.strictEqual(yard.toFixed(4).toString(), "0.9144 m");
        assert.strictEqual(mile.toFixed(3).toString(), "1609.344 m");
        assert.strictEqual(micron.toString(), "0.000001 m");
        assert.strictEqual(nanometer.toString(), "1e-9 m");

        // TODO
        // expect(inch.multiplier).toBeCloseTo(0.0254, 4);
        // expect(foot.multiplier).toBeCloseTo(0.3048, 4);
        // expect(yard.multiplier).toBeCloseTo(0.9144, 4);
        // expect(mile.multiplier).toBeCloseTo(1609.344, 4);
        assert.strictEqual(micron.multiplier * 1e6, 1);
        assert.strictEqual(nanometer.multiplier * 1e9, 1);
    });
    it("mul by number", function () {
        const meter = new Unit(1, new Dimensions(Rat0, Rat1, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        const yard = meter.__mul__(2.54 * 36 / 100);
        assert.strictEqual(yard.toString(), "0.9144 m");
    });
    it("mul by Unit", function () {
        const meter = new Unit(1, new Dimensions(Rat0, Rat1, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        const second = new Unit(1, new Dimensions(Rat0, Rat0, Rat1, Rat0, Rat0, Rat0, Rat0), symbols);
        const areaUnit = meter.mul(second);
        assert.strictEqual(meter.toString(void 0, true), "m");
        assert.strictEqual(second.toString(void 0, true), "s");
        assert.strictEqual(areaUnit.toString(void 0, true), "m s");
    });
    it("div by Unit", function () {
        const meter = new Unit(1, new Dimensions(Rat0, Rat1, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        const second = new Unit(1, new Dimensions(Rat0, Rat0, Rat1, Rat0, Rat0, Rat0, Rat0), symbols);
        const speedUnit = meter.div(second);
        assert.strictEqual(meter.toString(void 0, true), "m");
        assert.strictEqual(second.toString(void 0, true), "s");
        assert.strictEqual(speedUnit.toString(10, true), "m/s");
    });
    it("pow by number", function () {
        const meter = new Unit(1, new Dimensions(Rat0, Rat1, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        const square = meter.pow(Rat2);
        // const radian = new Unit(1, new Dimensions(Rat0, Rat0, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        assert.strictEqual(meter.toString(void 0, true), "m");
        assert.strictEqual(square.toString(void 0, true), "m ** 2");
    });
    it("inverse", function () {
        // const dimensionless = new Unit(1234, new Dimensions(Rat0, Rat0, Rat0, Rat0, Rat0, Rat0, Rat0), symbols);
        assert.strictEqual(ONE.inv().toString(void 0, true), "");
        assert.strictEqual(METER.inv().toString(void 0, true), "m ** -1");
        assert.strictEqual(KILOGRAM.inv().toString(void 0, true), "kg ** -1");
        assert.strictEqual(SECOND.inv().toString(10, true), "Hz");
        assert.strictEqual(AMPERE.inv().toString(void 0, true), "s C ** -1");
        assert.strictEqual(KELVIN.inv().toString(void 0, true), "K ** -1");
        assert.strictEqual(MOLE.inv().toString(void 0, true), "mol ** -1");
        assert.strictEqual(CANDELA.inv().toString(void 0, true), "cd ** -1");
    });
    it("electric current", function () {
        assert.strictEqual(AMPERE.toString(10, true), "A");
    });
    it("electric charge", function () {
        assert.strictEqual(COULOMB.toString(10, true), "C");
    });
    it("force", function () {
        assert.strictEqual(NEWTON.toString(10, true), "N");
    });
    it("energy", function () {
        assert.strictEqual(JOULE.toString(10, true), "J");
    });
    it("frequency", function () {
        assert.strictEqual(HERTZ.toString(10, true), "Hz");
    });
    it("power", function () {
        assert.strictEqual(WATT.toString(10, true), "W");
    });
    it("electric potential", function () {
        assert.strictEqual(VOLT.toString(10, true), "V");
    });
    it("electric field strength", function () {
        assert.strictEqual(VOLT.div(METER).toString(10, true), "V/m");
    });
    it("magnetic flux", function () {
        assert.strictEqual(WEBER.toString(10, true), "Wb");
    });
    it("magnetic flux density", function () {
        assert.strictEqual(TESLA.toString(10, true), "T");
    });
    it("electrical resistance", function () {
        assert.strictEqual(OHM.toString(10, true), "Ω");
    });
    it("electrical conductance", function () {
        assert.strictEqual(SIEMEN.toString(10, true), "S");
    });
    it("electrical capacitance", function () {
        assert.strictEqual(FARAD.toString(10, true), "F");
    });
    it("electrical inductance", function () {
        assert.strictEqual(WEBER.div(AMPERE).toString(10, true), "H");
        assert.strictEqual(HENRY.toString(10, true), "H");
    });
    it("electric permittivity", function () {
        assert.strictEqual(FARAD.div(METER).toString(10, true), "F/m");
    });
    it("electric permeability", function () {
        assert.strictEqual(HENRY.div(METER).toString(10, true), "H/m");
    });
    it("pressure, stress", function () {
        assert.strictEqual(PASCAL.toString(10, true), "Pa");
    });
    it("angular momentum", function () {
        assert.strictEqual(JOULE.mul(SECOND).toString(10, true), "J·s");
    });
    it("dynamic viscosity", function () {
        assert.strictEqual(PASCAL.mul(SECOND).toString(10, true), "Pa·s");
    });
    it("moment of force", function () {
        // FIXME
        // assert.strictEqual(NEWTON.mul(METER).toString(), "N·m");
        assert.strictEqual(NEWTON.mul(METER).toString(10, true), "J");
    });
    it("surface tension", function () {
        assert.strictEqual(NEWTON.div(METER).toString(10, true), "N/m");
    });
    it("heat flux density", function () {
        assert.strictEqual(WATT.div(METER).div(METER).toString(10, true), "W/m ** 2");
    });
    it("heat capacity, entropy", function () {
        assert.strictEqual(JOULE.div(KELVIN).toString(10, true), "J/K");
    });
    it("energy density", function () {
        // This could be a J/m ** 3 but that's a pressure too.
        assert.strictEqual(JOULE.div(METER).div(METER).div(METER).toString(10, true), "Pa");
    });
    it("specific energy", function () {
        assert.strictEqual(JOULE.div(KILOGRAM).toString(10, true), "J/kg");
    });
    it("molar energy", function () {
        assert.strictEqual(JOULE.div(MOLE).toString(10, true), "J/mol");
    });
    it("electric charge density", function () {
        assert.strictEqual(COULOMB.div(METER).div(METER).div(METER).toString(10, true), "C/m ** 3");
    });
    it("exposure (x-rays and γ-rays)", function () {
        assert.strictEqual(COULOMB.div(KILOGRAM).toString(10, true), "C/kg");
    });

    describe("Operator Overloading", function () {

        var m = METER;

        describe("Binary +", function () {

            it("m.__add__(m)", function () {
                var actual = m.__add__(m);
                assert.strictEqual(actual.multiplier, 2);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });
            it("m.__radd__(m)", function () {
                var actual = m.__radd__(m);
                assert.strictEqual(actual.multiplier, 2);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

        });

        describe("Binary -", function () {

            it("m.__sub__(m)", function () {
                var actual = m.__sub__(m);
                assert.strictEqual(actual.multiplier, 0);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("m.__rsub__(m)", function () {
                var actual = m.__rsub__(m);
                assert.strictEqual(actual.multiplier, 0);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

        });

        describe("Binary *", function () {

            it("m.__mul__(m)", function () {
                var actual = m.__mul__(m);
                assert.strictEqual(actual.toString(void 0, true), "m ** 2");
                assert.strictEqual(actual.multiplier, 1);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 2);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("m * 5", function () {
                var actual = m.__mul__(5);
                assert.strictEqual(actual.toString(), "5 m");
                assert.strictEqual(actual.multiplier, 5);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("m.__rmul__(m)", function () {
                var actual = m.__rmul__(m);
                assert.strictEqual(actual.multiplier, 1);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 2);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("5 * m", function () {
                var actual = m.__rmul__(5);
                assert.strictEqual(actual.multiplier, 5);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

        });

        describe("Binary /", function () {

            it("m.__div__(m)", function () {
                var actual = m.__div__(m);
                assert.strictEqual(actual.toString(void 0, true), "");
                assert.strictEqual(actual.multiplier, 1);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 0);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("m / 5", function () {
                var actual = m.__div__(5);
                assert.strictEqual(actual.toString(), "0.2 m");
                assert.strictEqual(actual.multiplier, 1 / 5);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("m.__rdiv__(m)", function () {
                var actual = m.__rdiv__(m);
                assert.strictEqual(actual.multiplier, 1);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, 0);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

            it("5 / m", function () {
                var actual = m.__rdiv__(5);
                assert.strictEqual(actual instanceof Unit, true);
                assert.strictEqual(actual.multiplier, 5);
                assert.strictEqual(actual.dimensions.M.numer, 0);
                assert.strictEqual(actual.dimensions.M.denom, 1);
                assert.strictEqual(actual.dimensions.L.numer, -1);
                assert.strictEqual(actual.dimensions.L.denom, 1);
                assert.strictEqual(actual.dimensions.T.numer, 0);
                assert.strictEqual(actual.dimensions.T.denom, 1);
            });

        });

    });

});
