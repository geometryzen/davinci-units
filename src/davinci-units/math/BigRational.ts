import bigInt from './BigInteger';
import {Integer} from './BigInteger';
import {gcd, lcm, isInstance, one as BigIntegerOne} from './BigInteger';

class BigRational {
    numerator: Integer;
    denominator: Integer;
    constructor(public num: Integer, public denom: Integer) {
        // Alias properties kept for backwards compatability
        if (denom.isZero()) throw "Denominator cannot be 0.";
        this.numerator = this.num = num;
        this.denominator = this.denom = denom;
    }
    add(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        var v = interpret(n, d),
            multiple = lcm(this.denom, v.denom),
            a = multiple.divide(this.denom),
            b = multiple.divide(v.denom);

        a = this.num.times(a);
        b = v.num.times(b);
        return reduce(a.add(b), multiple);
    }
    plus(n: number | string | Integer, d?: number | string | Integer) {
        return this.add(n, d)
    }
    subtract(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        var v = interpret(n, d);
        return this.add(v.negate());
    }
    minus(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        return this.subtract(n, d)
    }

    multiply(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        var v = interpret(n, d);
        return reduce(this.num.times(v.num), this.denom.times(v.denom));
    }
    times(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        return this.multiply(n, d)
    }

    divide(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        var v = interpret(n, d);
        return reduce(this.num.times(v.denom), this.denom.times(v.num));
    }
    over(n: number | string | Integer | BigRational, d?: number | string | Integer) {
        return this.divide(n, d)
    }

    reciprocate() {
        return new BigRational(this.denom, this.num);
    }
    mod(n: number | string | Integer, d?: number | string | Integer) {
        var v = interpret(n, d);
        return this.minus(v.times(this.over(v).floor()));
    }
    pow(n: number | string | Integer) {
        const v = bigInt(n);
        const num = this.num.pow(v);
        const denom = this.denom.pow(v);
        return reduce(num, denom);
    }

    floor(toBigInt?: boolean): Integer | BigRational {
        const divmod = this.num.divmod(this.denom)
        let floor: Integer;
        if (divmod.remainder.isZero() || !divmod.quotient.sign) {
            floor = divmod.quotient;
        }
        else floor = divmod.quotient.prev();
        if (toBigInt) return floor;
        return new BigRational(floor, BigIntegerOne);
    }
    ceil(toBigInt?: boolean): Integer | BigRational {
        const divmod = this.num.divmod(this.denom);
        let ceil: Integer;
        if (divmod.remainder.isZero() || divmod.quotient.sign) {
            ceil = divmod.quotient;
        }
        else ceil = divmod.quotient.next();
        if (toBigInt) return ceil;
        return new BigRational(ceil, BigIntegerOne);
    }
    round(toBigInt?: boolean) {
        return this.add(1, 2).floor(toBigInt);
    }

    compareAbs(n: number | string | Integer, d?: number | string | Integer) {
        var v = interpret(n, d);
        if (this.denom.equals(v.denom)) {
            return this.num.compareAbs(v.num);
        }
        return this.num.times(v.denom).compareAbs(v.num.times(this.denom));
    }
    compare(n: number | string | Integer, d?: number | string | Integer) {
        var v = interpret(n, d);
        if (this.denom.equals(v.denom)) {
            return this.num.compare(v.num);
        }
        var comparison = this.denom.sign === v.denom.sign ? 1 : -1;
        return comparison * this.num.times(v.denom).compare(v.num.times(this.denom));
    }
    compareTo(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d);
    }

    equals(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d) === 0;
    }
    eq(n: number | string | Integer, d?: number | string | Integer) {
        return this.equals(n, d)
    }

    notEquals(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d) !== 0;
    }
    neq(n: number | string | Integer, d?: number | string | Integer) {
        return this.notEquals(n, d)
    }

    lesser(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d) < 0;
    }
    lt(n: number | string | Integer, d?: number | string | Integer) {
        return this.lesser(n, d)
    }

    lesserOrEquals(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d) <= 0;
    }
    leq(n: number | string | Integer, d?: number | string | Integer) {
        return this.lesserOrEquals(n, d)
    }

    greater(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d) > 0;
    }
    gt(n: number | string | Integer, d?: number | string | Integer) {
        return this.greater(n, d)
    }

    greaterOrEquals(n: number | string | Integer, d?: number | string | Integer) {
        return this.compare(n, d) >= 0;
    }
    geq(n: number | string | Integer, d?: number | string | Integer) {
        return this.greaterOrEquals(n, d)
    }

    abs() {
        if (this.isPositive()) return this;
        return this.negate();
    }
    negate() {
        if (this.denom.sign) {
            return new BigRational(this.num, this.denom.negate());
        }
        return new BigRational(this.num.negate(), this.denom);
    }
    isNegative() {
        return this.num.sign !== this.denom.sign && !this.num.isZero();
    }
    isPositive() {
        return this.num.sign === this.denom.sign && !this.num.isZero();
    }
    isZero() {
        return this.num.isZero();
    }

    toDecimal(digits = 10): string {
        var n = this.num.divmod(this.denom);
        var intPart = n.quotient.abs().toString();
        var remainder = bigRat(n.remainder.abs(), this.denom);
        var shiftedRemainder = remainder.times(bigInt("1e" + digits));
        var decPart = shiftedRemainder.num.over(shiftedRemainder.denom).toString();
        if (decPart.length < digits) {
            decPart = new Array(digits - decPart.length + 1).join("0") + decPart;
        }
        if (shiftedRemainder.num.mod(shiftedRemainder.denom).isZero()) {
            while (decPart.slice(-1) === "0") {
                decPart = decPart.slice(0, -1);
            }
        }
        if (this.isNegative()) {
            intPart = "-" + intPart;
        }
        if (decPart === "") {
            return intPart;
        }
        return intPart + "." + decPart;
    }

    toString() {
        return String(this.num) + "/" + String(this.denom);
    }

    valueOf() {
        return this.num.valueOf() / this.denom.valueOf();
    }
}

function reduce(n: Integer, d: Integer) {
    var divisor = gcd(n, d),
        num = n.over(divisor),
        denom = d.over(divisor);
    if (denom.isNegative()) {
        return new BigRational(num.negate(), denom.negate());
    }
    return new BigRational(num, denom);
}


function interpret(n: number | string | Integer | BigRational, d?: number | string | Integer) {
    return bigRat(n, d);
}

function parseDecimal(n: string): BigRational {
    var parts = n.split(/e/i);
    if (parts.length > 2) {
        throw new Error("Invalid input: too many 'e' tokens");
    }
    if (parts.length > 1) {
        var isPositive = true;
        if (parts[1][0] === "-") {
            parts[1] = parts[1].slice(1);
            isPositive = false;
        }
        if (parts[1][0] === "+") {
            parts[1] = parts[1].slice(1);
        }
        var significand = parseDecimal(parts[0]);
        var exponent = new BigRational(bigInt(10).pow(parts[1]), BigIntegerOne);
        if (isPositive) {
            return significand.times(exponent);
        } else {
            return significand.over(exponent);
        }
    }
    parts = n.trim().split(".");
    if (parts.length > 2) {
        throw new Error("Invalid input: too many '.' tokens");
    }
    if (parts.length > 1) {
        var isNegative = parts[0][0] === '-';
        if (isNegative) parts[0] = parts[0].slice(1);
        var intPart = new BigRational(bigInt(parts[0]), BigIntegerOne);
        var length = parts[1].length;
        while (parts[1][0] === "0") {
            parts[1] = parts[1].slice(1);
        }
        var exp = "1" + Array(length + 1).join("0");
        var decPart = reduce(bigInt(parts[1]), bigInt(exp));
        intPart = intPart.add(decPart);
        if (isNegative) intPart = intPart.negate();
        return intPart;
    }
    return new BigRational(bigInt(n), BigIntegerOne);
}

export default function bigRat(a: number | string | Integer | BigRational, b?: number | string | Integer): BigRational {
    if (!a) {
        return new BigRational(bigInt(0), BigIntegerOne);
    }
    if (b) {
        return reduce(bigInt(<any>a), bigInt(b));
    }
    if (isInstance(a)) {
        return new BigRational(<Integer>a, BigIntegerOne);
    }
    if (a instanceof BigRational) return <any>a;

    var num: Integer;
    var denom: Integer;

    var text = String(a);
    var texts = text.split("/");
    if (texts.length > 2) {
        throw new Error("Invalid input: too many '/' tokens");
    }
    if (texts.length > 1) {
        var parts = texts[0].split("_");
        if (parts.length > 2) {
            throw new Error("Invalid input: too many '_' tokens");
        }
        if (parts.length > 1) {
            var isPositive = parts[0][0] !== "-";
            num = bigInt(parts[0]).times(texts[1]);
            if (isPositive) {
                num = num.add(parts[1]);
            } else {
                num = num.subtract(parts[1]);
            }
            denom = bigInt(texts[1]);
            return reduce(num, denom);
        }
        return reduce(bigInt(texts[0]), bigInt(texts[1]));
    }
    return parseDecimal(text);
}

export const zero = bigRat(0);
export const one = bigRat(1);
export const minusOne = bigRat(-1);
