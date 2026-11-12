import { G3 } from "./Euclidean3";

describe("G3", function () {
    const random = function () {
        const a = Math.random();
        const x = Math.random();
        const y = Math.random();
        const z = Math.random();
        return new G3(a, x, y, z, Math.random(), Math.random(), Math.random(), Math.random());
    };

    const zero = new G3(0, 0, 0, 0, 0, 0, 0, 0);
    const one = new G3(1, 0, 0, 0, 0, 0, 0, 0);
    const i = new G3(0, 1, 0, 0, 0, 0, 0, 0);
    const j = new G3(0, 0, 1, 0, 0, 0, 0, 0);
    const k = new G3(0, 0, 0, 1, 0, 0, 0, 0);
    const ij = new G3(0, 0, 0, 0, 1, 0, 0, 0);
    const jk = new G3(0, 0, 0, 0, 0, 1, 0, 0);
    const ki = new G3(0, 0, 0, 0, 0, 0, 1, 0);
    const I = new G3(0, 0, 0, 0, 0, 0, 0, 1);
    const mone = new G3(-1, 0, 0, 0, 0, 0, 0, 0);

    /*
    beforeEach(function() {
        jasmine.addMatchers({
            toBeNear: function(m) {
                return {
                    compare: function(actual: G3, expected: G3) {
                        const tolerance = (Math.pow(10, -2) / 2);
                        const pass = (Math.abs(actual.coordinate(0) - expected.coordinate(0)) < tolerance) &&
                            (Math.abs(actual.coordinate(1) - expected.coordinate(1)) < tolerance) &&
                            (Math.abs(actual.coordinate(2) - expected.coordinate(2)) < tolerance) &&
                            (Math.abs(actual.coordinate(3) - expected.coordinate(3)) < tolerance) &&
                            (Math.abs(actual.coordinate(4) - expected.coordinate(4)) < tolerance) &&
                            (Math.abs(actual.coordinate(5) - expected.coordinate(5)) < tolerance) &&
                            (Math.abs(actual.coordinate(6) - expected.coordinate(6)) < tolerance) &&
                            (Math.abs(actual.coordinate(7) - expected.coordinate(7)) < tolerance);
                        return { 'pass': pass };
                    }
                };
            }
        });
    });
    */

    it("constructor", function () {
        const α = Math.random();
        const x = Math.random();
        const y = Math.random();
        const z = Math.random();
        const xy = Math.random();
        const yz = Math.random();
        const zx = Math.random();
        const β = Math.random();

        const a = new G3(α, x, y, z, xy, yz, zx, β);

        expect(a.coordinate(0)).toBe(α);
        expect(a.coordinate(1)).toBe(x);
        expect(a.coordinate(2)).toBe(y);
        expect(a.coordinate(3)).toBe(z);
        expect(a.coordinate(4)).toBe(xy);
        expect(a.coordinate(5)).toBe(yz);
        expect(a.coordinate(6)).toBe(zx);
        expect(a.coordinate(7)).toBe(β);

        expect(a.coords[0]).toBe(α);
        expect(a.coords[1]).toBe(x);
        expect(a.coords[2]).toBe(y);
        expect(a.coords[3]).toBe(z);
        expect(a.coords[4]).toBe(xy);
        expect(a.coords[5]).toBe(yz);
        expect(a.coords[6]).toBe(zx);
        expect(a.coords[7]).toBe(β);
    });

    it("Should implement toString(), GEOMTERIC", function () {
        G3.BASIS_LABELS = G3.BASIS_LABELS_GEOMETRIC;
        const a = new G3(1, 2, 3, 4, 5, 6, 7, 8);
        expect(a.toString()).toBe("1+2*→+3*↑+4*⊙+5*↺+6*⬙+7*⊶+8*☐");
        const b = new G3(-1, -2, -3, -4, -5, -6, -7, -8);
        expect(b.toString()).toBe("-1+2*←+3*↓+4*⊗+5*↻+6*⬘+7*⊷+8*■");
    });

    it("Should implement toString(), STANDARD", function () {
        G3.BASIS_LABELS = G3.BASIS_LABELS_STANDARD;
        const a = new G3(1, 2, 3, 4, 5, 6, 7, 8);
        expect(a.toString()).toBe("1+2*e1+3*e2+4*e3+5*e12+6*e23+7*e31+8*I");
        const b = new G3(-1, -2, -3, -4, -5, -6, -7, -8);
        expect(b.toString()).toBe("-1-2*e1-3*e2-4*e3-5*e12-6*e23-7*e31-8*I");
    });

    it("Should implement toString(), HAMILTON", function () {
        G3.BASIS_LABELS = G3.BASIS_LABELS_HAMILTON;
        const a = new G3(1, 2, 3, 4, 5, 6, 7, 8);
        expect(a.toString()).toBe("1+2*i+3*j+4*k+5*ij+6*jk+7*ki+8*ijk");
        const b = new G3(-1, -2, -3, -4, -5, -6, -7, -8);
        expect(b.toString()).toBe("-1-2*i-3*j-4*k-5*ij-6*jk-7*ki-8*ijk");
    });

    it("Should implement add function", function () {
        const a = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
        const b = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());

        const c = a.add(b);

        expect(c.coordinate(0)).toBe(a.coordinate(0) + b.coordinate(0));
        expect(c.coordinate(1)).toBe(a.coordinate(1) + b.coordinate(1));
        expect(c.coordinate(2)).toBe(a.coordinate(2) + b.coordinate(2));
        expect(c.coordinate(3)).toBe(a.coordinate(3) + b.coordinate(3));
        expect(c.coordinate(4)).toBe(a.coordinate(4) + b.coordinate(4));
        expect(c.coordinate(5)).toBe(a.coordinate(5) + b.coordinate(5));
        expect(c.coordinate(6)).toBe(a.coordinate(6) + b.coordinate(6));
        expect(c.coordinate(7)).toBe(a.coordinate(7) + b.coordinate(7));
    });

    it("Should implement sub function", function () {
        const a = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
        const b = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());

        const c = a.sub(b);

        expect(c.coordinate(0)).toBe(a.coordinate(0) - b.coordinate(0));
        expect(c.coordinate(1)).toBe(a.coordinate(1) - b.coordinate(1));
        expect(c.coordinate(2)).toBe(a.coordinate(2) - b.coordinate(2));
        expect(c.coordinate(3)).toBe(a.coordinate(3) - b.coordinate(3));
        expect(c.coordinate(4)).toBe(a.coordinate(4) - b.coordinate(4));
        expect(c.coordinate(5)).toBe(a.coordinate(5) - b.coordinate(5));
        expect(c.coordinate(6)).toBe(a.coordinate(6) - b.coordinate(6));
        expect(c.coordinate(7)).toBe(a.coordinate(7) - b.coordinate(7));
    });

    it("div G3", function () {
        const u = new G3(1, 0, 0, 0, 0, 0, 0, 0);
        // const i = new G3(0, 1, 0, 0, 0, 0, 0, 0)
        // const j = new G3(0, 0, 1, 0, 0, 0, 0, 0)
        // const k = new G3(0, 0, 0, 1, 0, 0, 0, 0)
        // const ij = new G3(0, 0, 0, 0, 1, 0, 0, 0)
        // const jk = new G3(0, 0, 0, 0, 0, 1, 0, 0)
        // const ki = new G3(0, 0, 0, 0, 0, 0, 1, 0)
        // const I = new G3(0, 0, 0, 0, 0, 0, 0, 1)

        expect(u.div(u).a).toBe(1);
        expect(u.div(u).x).toBe(0);
        expect(u.div(u).y).toBe(0);
        expect(u.div(u).z).toBe(0);
        expect(u.div(u).xy).toBe(0);
        expect(u.div(u).yz).toBe(0);
        expect(u.div(u).zx).toBe(0);
        expect(u.div(u).b).toBe(0);

        //    expect(u.div(i).a).toBe(0);
        //    expect(u.div(i).x).toBe(1);
        //    expect(u.div(i).y).toBe(0);
        //    expect(u.div(i).z).toBe(0);
        //    expect(u.div(i).xy).toBe(0);
        //    expect(u.div(i).yz).toBe(0);
        //    expect(u.div(i).zx).toBe(0);
        //    expect(u.div(i).b).toBe(0);
    });

    it("grade(index) function", function () {
        const m = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());

        const w = m.grade(0);

        expect(w.coordinate(0)).toBe(m.coordinate(0));
        expect(w.coordinate(1)).toBe(0);
        expect(w.coordinate(2)).toBe(0);
        expect(w.coordinate(3)).toBe(0);
        expect(w.coordinate(4)).toBe(0);
        expect(w.coordinate(5)).toBe(0);
        expect(w.coordinate(6)).toBe(0);
        expect(w.coordinate(7)).toBe(0);

        const v = m.grade(1);

        expect(v.coordinate(0)).toEqual(0);
        expect(v.coordinate(1)).toEqual(m.coordinate(1));
        expect(v.coordinate(2)).toEqual(m.coordinate(2));
        expect(v.coordinate(3)).toEqual(m.coordinate(3));
        expect(v.coordinate(4)).toBe(0);
        expect(v.coordinate(5)).toBe(0);
        expect(v.coordinate(6)).toBe(0);
        expect(v.coordinate(7)).toBe(0);

        const b = m.grade(2);

        expect(b.coordinate(0)).toEqual(0);
        expect(b.coordinate(1)).toBe(0);
        expect(b.coordinate(2)).toBe(0);
        expect(b.coordinate(3)).toBe(0);
        expect(b.coordinate(4)).toEqual(m.coordinate(4));
        expect(b.coordinate(5)).toEqual(m.coordinate(5));
        expect(b.coordinate(6)).toEqual(m.coordinate(6));
        expect(b.coordinate(7)).toBe(0);

        const s = m.grade(3);

        expect(s.coordinate(0)).toEqual(0);
        expect(s.coordinate(1)).toBe(0);
        expect(s.coordinate(2)).toBe(0);
        expect(s.coordinate(3)).toBe(0);
        expect(s.coordinate(4)).toEqual(0);
        expect(s.coordinate(5)).toEqual(0);
        expect(s.coordinate(6)).toEqual(0);
        expect(s.coordinate(7)).toBe(m.coordinate(7));

        const z = m.grade(4);

        expect(z.coordinate(0)).toEqual(0);
        expect(z.coordinate(1)).toBe(0);
        expect(z.coordinate(2)).toBe(0);
        expect(z.coordinate(3)).toBe(0);
        expect(z.coordinate(4)).toEqual(0);
        expect(z.coordinate(5)).toEqual(0);
        expect(z.coordinate(6)).toEqual(0);
        expect(z.coordinate(7)).toEqual(0);
    });

    describe("multiplication", function () {
        it("associative", function () {
            const a = random();
            const b = random();
            const c = random();

            const ab = a.mul(b);
            const bc = b.mul(c);
            const lhs = ab.mul(c);
            const rhs = a.mul(bc);

            expect(lhs.coordinate(0)).toBeCloseTo(rhs.coordinate(0), 4);
            expect(lhs.coordinate(1)).toBeCloseTo(rhs.coordinate(1), 4);
            expect(lhs.coordinate(2)).toBeCloseTo(rhs.coordinate(2), 4);
            expect(lhs.coordinate(3)).toBeCloseTo(rhs.coordinate(3), 4);
            expect(lhs.coordinate(4)).toBeCloseTo(rhs.coordinate(4), 4);
            expect(lhs.coordinate(5)).toBeCloseTo(rhs.coordinate(5), 4);
            expect(lhs.coordinate(6)).toBeCloseTo(rhs.coordinate(6), 4);
            expect(lhs.coordinate(7)).toBeCloseTo(rhs.coordinate(7), 4);
        });
        it("left distributive", function () {
            const x = random();
            const y = random();
            const z = random();

            const xy = x.mul(y);
            const xz = x.mul(z);
            const lhs = x.mul(y.add(z));
            const rhs = xy.add(xz);

            expect(lhs.coordinate(0)).toBeCloseTo(rhs.coordinate(0), 4);
            expect(lhs.coordinate(1)).toBeCloseTo(rhs.coordinate(1), 4);
            expect(lhs.coordinate(2)).toBeCloseTo(rhs.coordinate(2), 4);
            expect(lhs.coordinate(3)).toBeCloseTo(rhs.coordinate(3), 4);
            expect(lhs.coordinate(4)).toBeCloseTo(rhs.coordinate(4), 4);
            expect(lhs.coordinate(5)).toBeCloseTo(rhs.coordinate(5), 4);
            expect(lhs.coordinate(6)).toBeCloseTo(rhs.coordinate(6), 4);
            expect(lhs.coordinate(7)).toBeCloseTo(rhs.coordinate(7), 4);
        });
        it("right distributive over addition", function () {
            const x = random();
            const y = random();
            const z = random();

            const yx = y.mul(x);
            const zx = z.mul(x);
            const lhs = y.add(z).mul(x);
            const rhs = yx.add(zx);

            expect(lhs.coordinate(0)).toBeCloseTo(rhs.coordinate(0), 4);
            expect(lhs.coordinate(1)).toBeCloseTo(rhs.coordinate(1), 4);
            expect(lhs.coordinate(2)).toBeCloseTo(rhs.coordinate(2), 4);
            expect(lhs.coordinate(3)).toBeCloseTo(rhs.coordinate(3), 4);
            expect(lhs.coordinate(4)).toBeCloseTo(rhs.coordinate(4), 4);
            expect(lhs.coordinate(5)).toBeCloseTo(rhs.coordinate(5), 4);
            expect(lhs.coordinate(6)).toBeCloseTo(rhs.coordinate(6), 4);
            expect(lhs.coordinate(7)).toBeCloseTo(rhs.coordinate(7), 4);
        });
        it("square of any vector is a real scalar", function () {
            const a = random().grade(1);
            const b = a.mul(a);

            expect(b.grade(1).a).toBeCloseTo(zero.a);
            expect(b.grade(2).a).toBeCloseTo(zero.a);
            expect(b.grade(3).a).toBeCloseTo(zero.a);
        });
    });

    describe("scalar product (scp)", function () {
        it("", function () {
            expect(one.scp(one).a).toBeCloseTo(one.a);
            expect(one.scp(i).a).toBeCloseTo(zero.a);
            expect(one.scp(j).a).toBeCloseTo(zero.a);
            expect(one.scp(k).a).toBeCloseTo(zero.a);
            expect(one.scp(ij).a).toBeCloseTo(zero.a);
            expect(one.scp(jk).a).toBeCloseTo(zero.a);
            expect(one.scp(ki).a).toBeCloseTo(zero.a);
            expect(one.scp(I).a).toBeCloseTo(zero.a);

            expect(i.scp(one).a).toBeCloseTo(zero.a);
            expect(i.scp(i).a).toBeCloseTo(one.a);
            expect(i.scp(j).a).toBeCloseTo(zero.a);
            expect(i.scp(k).a).toBeCloseTo(zero.a);
            expect(i.scp(ij).a).toBeCloseTo(zero.a);
            expect(i.scp(jk).a).toBeCloseTo(zero.a);
            expect(i.scp(ki).a).toBeCloseTo(zero.a);
            expect(i.scp(I).a).toBeCloseTo(zero.a);

            expect(j.scp(one).a).toBeCloseTo(zero.a);
            expect(j.scp(i).a).toBeCloseTo(zero.a);
            expect(j.scp(j).a).toBeCloseTo(one.a);
            expect(j.scp(k).a).toBeCloseTo(zero.a);
            expect(j.scp(ij).a).toBeCloseTo(zero.a);
            expect(j.scp(jk).a).toBeCloseTo(zero.a);
            expect(j.scp(ki).a).toBeCloseTo(zero.a);
            expect(j.scp(I).a).toBeCloseTo(zero.a);

            expect(k.scp(one).a).toBeCloseTo(zero.a);
            expect(k.scp(i).a).toBeCloseTo(zero.a);
            expect(k.scp(j).a).toBeCloseTo(zero.a);
            expect(k.scp(k).a).toBeCloseTo(one.a);
            expect(k.scp(ij).a).toBeCloseTo(zero.a);
            expect(k.scp(jk).a).toBeCloseTo(zero.a);
            expect(k.scp(ki).a).toBeCloseTo(zero.a);
            expect(k.scp(I).a).toBeCloseTo(zero.a);

            expect(ij.scp(one).a).toBeCloseTo(zero.a);
            expect(ij.scp(i).a).toBeCloseTo(zero.a);
            expect(ij.scp(j).a).toBeCloseTo(zero.a);
            expect(ij.scp(k).a).toBeCloseTo(zero.a);
            expect(ij.scp(ij).a).toBeCloseTo(mone.a);
            expect(ij.scp(jk).a).toBeCloseTo(zero.a);
            expect(ij.scp(ki).a).toBeCloseTo(zero.a);
            expect(ij.scp(I).a).toBeCloseTo(zero.a);

            expect(jk.scp(one).a).toBeCloseTo(zero.a);
            expect(jk.scp(i).a).toBeCloseTo(zero.a);
            expect(jk.scp(j).a).toBeCloseTo(zero.a);
            expect(jk.scp(k).a).toBeCloseTo(zero.a);
            expect(jk.scp(ij).a).toBeCloseTo(zero.a);
            expect(jk.scp(jk).a).toBeCloseTo(mone.a);
            expect(jk.scp(ki).a).toBeCloseTo(zero.a);
            expect(jk.scp(I).a).toBeCloseTo(zero.a);

            expect(ki.scp(one).a).toBeCloseTo(zero.a);
            expect(ki.scp(i).a).toBeCloseTo(zero.a);
            expect(ki.scp(j).a).toBeCloseTo(zero.a);
            expect(ki.scp(k).a).toBeCloseTo(zero.a);
            expect(ki.scp(ij).a).toBeCloseTo(zero.a);
            expect(ki.scp(jk).a).toBeCloseTo(zero.a);
            expect(ki.scp(ki).a).toBeCloseTo(mone.a);
            expect(ki.scp(I).a).toBeCloseTo(zero.a);

            expect(I.scp(one).a).toBeCloseTo(zero.a);
            expect(I.scp(i).a).toBeCloseTo(zero.a);
            expect(I.scp(j).a).toBeCloseTo(zero.a);
            expect(I.scp(k).a).toBeCloseTo(zero.a);
            expect(I.scp(ij).a).toBeCloseTo(zero.a);
            expect(I.scp(jk).a).toBeCloseTo(zero.a);
            expect(I.scp(ki).a).toBeCloseTo(zero.a);
            expect(I.scp(I).a).toBeCloseTo(mone.a);
        });
    });

    describe("exterior product", function () {
        it("", function () {
            expect(one.ext(one).a).toBeCloseTo(one.a);
            expect(one.ext(i).a).toBeCloseTo(i.a);
            expect(one.ext(j).a).toBeCloseTo(j.a);
            expect(one.ext(k).a).toBeCloseTo(k.a);
            expect(one.ext(ij).a).toBeCloseTo(ij.a);
            expect(one.ext(jk).a).toBeCloseTo(jk.a);
            expect(one.ext(ki).a).toBeCloseTo(ki.a);
            expect(one.ext(I).a).toBeCloseTo(I.a);

            expect(i.ext(one).a).toBeCloseTo(i.a);
            expect(i.ext(i).a).toBeCloseTo(zero.a);
            expect(i.ext(j).a).toBeCloseTo(ij.a);
            expect(i.ext(k).a).toBeCloseTo(zero.sub(ki).a);
            expect(i.ext(ij).a).toBeCloseTo(zero.a);
            expect(i.ext(jk).a).toBeCloseTo(I.a);
            expect(i.ext(ki).a).toBeCloseTo(zero.a);
            expect(i.ext(I).a).toBeCloseTo(zero.a);

            expect(j.ext(one).a).toBeCloseTo(j.a);
            expect(j.ext(i).a).toBeCloseTo(zero.sub(ij).a);
            expect(j.ext(j).a).toBeCloseTo(zero.a);
            expect(j.ext(k).a).toBeCloseTo(jk.a);
            expect(j.ext(ij).a).toBeCloseTo(zero.a);
            expect(j.ext(jk).a).toBeCloseTo(zero.a);
            expect(j.ext(ki).a).toBeCloseTo(I.a);
            expect(j.ext(I).a).toBeCloseTo(zero.a);

            expect(k.ext(one).a).toBeCloseTo(k.a);
            expect(k.ext(i).a).toBeCloseTo(ki.a);
            expect(k.ext(j).a).toBeCloseTo(zero.sub(jk).a);
            expect(k.ext(k).a).toBeCloseTo(zero.a);
            expect(k.ext(ij).a).toBeCloseTo(I.a);
            expect(k.ext(jk).a).toBeCloseTo(zero.a);
            expect(k.ext(ki).a).toBeCloseTo(zero.a);
            expect(k.ext(I).a).toBeCloseTo(zero.a);

            expect(ij.ext(one).a).toBeCloseTo(ij.a);
            expect(ij.ext(i).a).toBeCloseTo(zero.a);
            expect(ij.ext(j).a).toBeCloseTo(zero.a);
            expect(ij.ext(k).a).toBeCloseTo(I.a);
            expect(ij.ext(ij).a).toBeCloseTo(zero.a);
            expect(ij.ext(jk).a).toBeCloseTo(zero.a);
            expect(ij.ext(ki).a).toBeCloseTo(zero.a);
            expect(ij.ext(I).a).toBeCloseTo(zero.a);

            expect(jk.ext(one).a).toBeCloseTo(jk.a);
            expect(jk.ext(i).a).toBeCloseTo(I.a);
            expect(jk.ext(j).a).toBeCloseTo(zero.a);
            expect(jk.ext(k).a).toBeCloseTo(zero.a);
            expect(jk.ext(ij).a).toBeCloseTo(zero.a);
            expect(jk.ext(jk).a).toBeCloseTo(zero.a);
            expect(jk.ext(ki).a).toBeCloseTo(zero.a);
            expect(jk.ext(I).a).toBeCloseTo(zero.a);

            expect(ki.ext(one).a).toBeCloseTo(ki.a); // 49
            expect(ki.ext(i).a).toBeCloseTo(zero.a); // 50
            expect(ki.ext(j).a).toBeCloseTo(I.a); // 51
            expect(ki.ext(k).a).toBeCloseTo(zero.a); // 52
            expect(ki.ext(ij).a).toBeCloseTo(zero.a); // 53
            expect(ki.ext(jk).a).toBeCloseTo(zero.a); // 54
            expect(ki.ext(ki).a).toBeCloseTo(zero.a); // 55
            expect(ki.ext(I).a).toBeCloseTo(zero.a); // 56

            expect(I.ext(one).a).toBeCloseTo(I.a); // 57
            expect(I.ext(i).a).toBeCloseTo(zero.a); // 58
            expect(I.ext(j).a).toBeCloseTo(zero.a); // 59
            expect(I.ext(k).a).toBeCloseTo(zero.a); // 60
            expect(I.ext(ij).a).toBeCloseTo(zero.a); // 61
            expect(I.ext(jk).a).toBeCloseTo(zero.a); // 62
            expect(I.ext(ki).a).toBeCloseTo(zero.a); // 63
            expect(I.ext(I).a).toBeCloseTo(zero.a); // 64
        });
    });

    describe("left contraction", function () {
        it("", function () {
            expect(one.lco(one).a).toBeCloseTo(one.a);
            expect(one.lco(i).a).toBeCloseTo(i.a);
            expect(one.lco(j).a).toBeCloseTo(j.a);
            expect(one.lco(k).a).toBeCloseTo(k.a);
            expect(one.lco(ij).a).toBeCloseTo(ij.a);
            expect(one.lco(jk).a).toBeCloseTo(jk.a);
            expect(one.lco(ki).a).toBeCloseTo(ki.a);
            expect(one.lco(I).a).toBeCloseTo(I.a);

            expect(i.lco(one).a).toBeCloseTo(zero.a);
            expect(i.lco(i).a).toBeCloseTo(one.a);
            expect(i.lco(j).a).toBeCloseTo(zero.a);
            expect(i.lco(k).a).toBeCloseTo(zero.a);
            expect(i.lco(ij).a).toBeCloseTo(j.a);
            expect(i.lco(jk).a).toBeCloseTo(zero.a);
            expect(i.lco(ki).a).toBeCloseTo(zero.sub(k).a);
            expect(i.lco(I).a).toBeCloseTo(jk.a);

            expect(j.lco(one).a).toBeCloseTo(zero.a);
            expect(j.lco(i).a).toBeCloseTo(zero.a);
            expect(j.lco(j).a).toBeCloseTo(one.a);
            expect(j.lco(k).a).toBeCloseTo(zero.a);
            expect(j.lco(ij).a).toBeCloseTo(zero.sub(i).a);
            expect(j.lco(jk).a).toBeCloseTo(k.a);
            expect(j.lco(ki).a).toBeCloseTo(zero.a);
            expect(j.lco(I).a).toBeCloseTo(ki.a);

            expect(k.lco(one).a).toBeCloseTo(zero.a);
            expect(k.lco(i).a).toBeCloseTo(zero.a);
            expect(k.lco(j).a).toBeCloseTo(zero.a);
            expect(k.lco(k).a).toBeCloseTo(one.a);
            expect(k.lco(ij).a).toBeCloseTo(zero.a);
            expect(k.lco(jk).a).toBeCloseTo(zero.sub(j).a);
            expect(k.lco(ki).a).toBeCloseTo(i.a);
            expect(k.lco(I).a).toBeCloseTo(ij.a);

            expect(ij.lco(one).a).toBeCloseTo(zero.a);
            expect(ij.lco(i).a).toBeCloseTo(zero.a);
            expect(ij.lco(j).a).toBeCloseTo(zero.a);
            expect(ij.lco(k).a).toBeCloseTo(zero.a);
            expect(ij.lco(ij).a).toBeCloseTo(zero.sub(one).a);
            expect(ij.lco(jk).a).toBeCloseTo(zero.a);
            expect(ij.lco(ki).a).toBeCloseTo(zero.a);
            expect(ij.lco(I).a).toBeCloseTo(zero.sub(k).a);

            expect(jk.lco(one).a).toBeCloseTo(zero.a);
            expect(jk.lco(i).a).toBeCloseTo(zero.a);
            expect(jk.lco(j).a).toBeCloseTo(zero.a);
            expect(jk.lco(k).a).toBeCloseTo(zero.a);
            expect(jk.lco(ij).a).toBeCloseTo(zero.a);
            expect(jk.lco(jk).a).toBeCloseTo(zero.sub(one).a);
            expect(jk.lco(ki).a).toBeCloseTo(zero.a);
            expect(jk.lco(I).a).toBeCloseTo(zero.sub(i).a);

            expect(ki.lco(one).a).toBeCloseTo(zero.a); // 49
            expect(ki.lco(i).a).toBeCloseTo(zero.a); // 50
            expect(ki.lco(j).a).toBeCloseTo(zero.a); // 51
            expect(ki.lco(k).a).toBeCloseTo(zero.a); // 52
            expect(ki.lco(ij).a).toBeCloseTo(zero.a); // 53
            expect(ki.lco(jk).a).toBeCloseTo(zero.a); // 54
            expect(ki.lco(ki).a).toBeCloseTo(zero.sub(one).a); // 55
            expect(ki.lco(I).a).toBeCloseTo(zero.sub(j).a); // 56

            expect(I.lco(one).a).toBeCloseTo(zero.a); // 57
            expect(I.lco(i).a).toBeCloseTo(zero.a); // 58
            expect(I.lco(j).a).toBeCloseTo(zero.a); // 59
            expect(I.lco(k).a).toBeCloseTo(zero.a); // 60
            expect(I.lco(ij).a).toBeCloseTo(zero.a); // 61
            expect(I.lco(jk).a).toBeCloseTo(zero.a); // 62
            expect(I.lco(ki).a).toBeCloseTo(zero.a); // 63
            expect(I.lco(I).a).toBeCloseTo(zero.sub(one).a); // 64
        });
    });

    describe("right contraction", function () {
        it("", function () {
            expect(one.rco(one).a).toBeCloseTo(one.a); //  1
            expect(one.rco(i).a).toBeCloseTo(zero.a); //  2
            expect(one.rco(j).a).toBeCloseTo(zero.a); //  3
            expect(one.rco(k).a).toBeCloseTo(zero.a); //  4
            expect(one.rco(ij).a).toBeCloseTo(zero.a); //  5
            expect(one.rco(jk).a).toBeCloseTo(zero.a); //  6
            expect(one.rco(ki).a).toBeCloseTo(zero.a); //  7
            expect(one.rco(I).a).toBeCloseTo(zero.a); //  8

            expect(i.rco(one).a).toBeCloseTo(i.a); //  9
            expect(i.rco(i).a).toBeCloseTo(one.a); // 10
            expect(i.rco(j).a).toBeCloseTo(zero.a); // 11
            expect(i.rco(k).a).toBeCloseTo(zero.a); // 12
            expect(i.rco(ij).a).toBeCloseTo(zero.a); // 13
            expect(i.rco(jk).a).toBeCloseTo(zero.a); // 14
            expect(i.rco(ki).a).toBeCloseTo(zero.a); // 15
            expect(i.rco(I).a).toBeCloseTo(zero.a); // 16

            expect(j.rco(one).a).toBeCloseTo(j.a); // 17
            expect(j.rco(i).a).toBeCloseTo(zero.a); // 18
            expect(j.rco(j).a).toBeCloseTo(one.a); // 19
            expect(j.rco(k).a).toBeCloseTo(zero.a); // 20
            expect(j.rco(ij).a).toBeCloseTo(zero.a); // 21
            expect(j.rco(jk).a).toBeCloseTo(zero.a); // 22
            expect(j.rco(ki).a).toBeCloseTo(zero.a); // 23
            expect(j.rco(I).a).toBeCloseTo(zero.a); // 24

            expect(k.rco(one).a).toBeCloseTo(k.a); // 25
            expect(k.rco(i).a).toBeCloseTo(zero.a); // 26
            expect(k.rco(j).a).toBeCloseTo(zero.a); // 27
            expect(k.rco(k).a).toBeCloseTo(one.a); // 28
            expect(k.rco(ij).a).toBeCloseTo(zero.a); // 29
            expect(k.rco(jk).a).toBeCloseTo(zero.a); // 30
            expect(k.rco(ki).a).toBeCloseTo(zero.a); // 31
            expect(k.rco(I).a).toBeCloseTo(zero.a); // 32

            expect(ij.rco(one).a).toBeCloseTo(ij.a); // 33
            expect(ij.rco(i).a).toBeCloseTo(zero.sub(j).a); // 34
            expect(ij.rco(j).a).toBeCloseTo(i.a); // 35
            expect(ij.rco(k).a).toBeCloseTo(zero.a); // 36
            expect(ij.rco(ij).a).toBeCloseTo(zero.sub(one).a); // 37
            expect(ij.rco(jk).a).toBeCloseTo(zero.a); // 38
            expect(ij.rco(ki).a).toBeCloseTo(zero.a); // 39
            expect(ij.rco(I).a).toBeCloseTo(zero.a); // 40

            expect(jk.rco(one).a).toBeCloseTo(jk.a); // 41
            expect(jk.rco(i).a).toBeCloseTo(zero.a); // 42
            expect(jk.rco(j).a).toBeCloseTo(zero.sub(k).a); // 43
            expect(jk.rco(k).a).toBeCloseTo(j.a); // 44
            expect(jk.rco(ij).a).toBeCloseTo(zero.a); // 45
            expect(jk.rco(jk).a).toBeCloseTo(zero.sub(one).a); // 46
            expect(jk.rco(ki).a).toBeCloseTo(zero.a); // 47
            expect(jk.rco(I).a).toBeCloseTo(zero.a); // 48

            expect(ki.rco(one).a).toBeCloseTo(ki.a); // 49
            expect(ki.rco(i).a).toBeCloseTo(k.a); // 50
            expect(ki.rco(j).a).toBeCloseTo(zero.a); // 51
            expect(ki.rco(k).a).toBeCloseTo(zero.sub(i).a); // 52
            expect(ki.rco(ij).a).toBeCloseTo(zero.a); // 53
            expect(ki.rco(jk).a).toBeCloseTo(zero.a); // 54
            expect(ki.rco(ki).a).toBeCloseTo(zero.sub(one).a); // 55
            expect(ki.rco(I).a).toBeCloseTo(zero.a); // 56

            expect(I.rco(one).a).toBeCloseTo(I.a); // 57
            expect(I.rco(i).a).toBeCloseTo(jk.a); // 58
            expect(I.rco(j).a).toBeCloseTo(ki.a); // 59
            expect(I.rco(k).a).toBeCloseTo(ij.a); // 60
            expect(I.rco(ij).a).toBeCloseTo(zero.sub(k).a); // 61
            expect(I.rco(jk).a).toBeCloseTo(zero.sub(i).a); // 62
            expect(I.rco(ki).a).toBeCloseTo(zero.sub(j).a); // 63
            expect(I.rco(I).a).toBeCloseTo(zero.sub(one).a); // 64
        });
    });
    describe("Operator Overloading", function () {
        const x = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
        const y = new G3(Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random());
        it("+", function () {
            const e = x.add(y);
            const a = x.__add__(y);
            const b = y.__radd__(x);
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
            expect(e.a).toBe(b.a);
            expect(e.x).toBe(b.x);
            expect(e.y).toBe(b.y);
            expect(e.z).toBe(b.z);
            expect(e.xy).toBe(b.xy);
            expect(e.yz).toBe(b.yz);
            expect(e.zx).toBe(b.zx);
            expect(e.b).toBe(b.b);
        });
        it("-", function () {
            const e = x.sub(y);
            const a = x.__sub__(y);
            const b = y.__rsub__(x);
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
            expect(e.a).toBe(b.a);
            expect(e.x).toBe(b.x);
            expect(e.y).toBe(b.y);
            expect(e.z).toBe(b.z);
            expect(e.xy).toBe(b.xy);
            expect(e.yz).toBe(b.yz);
            expect(e.zx).toBe(b.zx);
            expect(e.b).toBe(b.b);
        });
        describe("*", function () {
            it("G3 * G3", function () {
                const e = x.mul(y);
                const a = x.__mul__(y);
                const b = y.__rmul__(x);
                expect(e.a).toBe(a.a);
                expect(e.x).toBe(a.x);
                expect(e.y).toBe(a.y);
                expect(e.z).toBe(a.z);
                expect(e.xy).toBe(a.xy);
                expect(e.yz).toBe(a.yz);
                expect(e.zx).toBe(a.zx);
                expect(e.b).toBe(a.b);
                expect(e.a).toBe(b.a);
                expect(e.x).toBe(b.x);
                expect(e.y).toBe(b.y);
                expect(e.z).toBe(b.z);
                expect(e.xy).toBe(b.xy);
                expect(e.yz).toBe(b.yz);
                expect(e.zx).toBe(b.zx);
                expect(e.b).toBe(b.b);
            });
        });
        it("/", function () {
            const e = x.div(y);
            const a = x.__div__(y);
            const b = y.__rdiv__(x);
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
            expect(e.a).toBe(b.a);
            expect(e.x).toBe(b.x);
            expect(e.y).toBe(b.y);
            expect(e.z).toBe(b.z);
            expect(e.xy).toBe(b.xy);
            expect(e.yz).toBe(b.yz);
            expect(e.zx).toBe(b.zx);
            expect(e.b).toBe(b.b);
        });
        it("^", function () {
            const e = x.ext(y);
            const a = x.__wedge__(y);
            const b = y.__rwedge__(x);
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
            expect(e.a).toBe(b.a);
            expect(e.x).toBe(b.x);
            expect(e.y).toBe(b.y);
            expect(e.z).toBe(b.z);
            expect(e.xy).toBe(b.xy);
            expect(e.yz).toBe(b.yz);
            expect(e.zx).toBe(b.zx);
            expect(e.b).toBe(b.b);
        });
        it("<<", function () {
            const e = x.lco(y);
            const a = x.__lshift__(y);
            const b = y.__rlshift__(x);
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
            expect(e.a).toBe(b.a);
            expect(e.x).toBe(b.x);
            expect(e.y).toBe(b.y);
            expect(e.z).toBe(b.z);
            expect(e.xy).toBe(b.xy);
            expect(e.yz).toBe(b.yz);
            expect(e.zx).toBe(b.zx);
            expect(e.b).toBe(b.b);
        });
        it(">>", function () {
            const e = x.rco(y);
            const a = x.__rshift__(y);
            const b = y.__rrshift__(x);
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
            expect(e.a).toBe(b.a);
            expect(e.x).toBe(b.x);
            expect(e.y).toBe(b.y);
            expect(e.z).toBe(b.z);
            expect(e.xy).toBe(b.xy);
            expect(e.yz).toBe(b.yz);
            expect(e.zx).toBe(b.zx);
            expect(e.b).toBe(b.b);
        });
        it("Unary +", function () {
            const e = zero.add(x);
            const a = x.__pos__();
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
        });
        it("Unary -", function () {
            const e = zero.sub(x);
            const a = x.__neg__();
            expect(e.a).toBe(a.a);
            expect(e.x).toBe(a.x);
            expect(e.y).toBe(a.y);
            expect(e.z).toBe(a.z);
            expect(e.xy).toBe(a.xy);
            expect(e.yz).toBe(a.yz);
            expect(e.zx).toBe(a.zx);
            expect(e.b).toBe(a.b);
        });
        describe("eq", function () {
            const zero = G3.zero;
            const one = G3.one;
            it("(one, one) => true", function () {
                expect(one.__eq__(one)).toBeTruthy();
            });
            it("(zero, one) => false", function () {
                expect(zero.__eq__(one)).toBeFalsy();
            });
            it("(x, x) => true", function () {
                expect(x.__eq__(x)).toBeTruthy();
            });
            /*
            it("(meter, second) => false", function() {
                expect(function() { meter.__eq__(second) }).toThrowError("Dimensions mismatch in equality expression: length === time");
            })
            */
        });
        describe("ne", function () {
            const zero = G3.zero;
            const one = G3.one;
            it("(one, one) => false", function () {
                expect(one.__ne__(one)).toBeFalsy();
            });
            it("(zero, one) => true", function () {
                expect(zero.__ne__(one)).toBeTruthy();
            });
            it("(x, x) => false", function () {
                expect(x.__ne__(x)).toBeFalsy();
            });
            /*
            it("(meter, second) => false", function() {
                expect(function() { meter.__ne__(second) }).toThrowError("Dimensions mismatch in inequality expression: length !== time");
            })
            */
        });
        describe("ge", function () {
            const zero = G3.zero;
            const one = G3.one;
            it("(one, one) => true", function () {
                expect(one.__ge__(one)).toBeTruthy();
            });
            it("(zero, one) => false", function () {
                expect(zero.__ge__(one)).toBeFalsy();
            });
            /*
            it("(one, zero) => true", function() {
                expect(one.__ge__(zero)).toBeTruthy();
            })
            it("(meter, second) => false", function() {
                expect(function() { meter.__ge__(second) }).toThrowError("Dimensions mismatch in comparison expression: length >= time");
            })
            it("(i, one) => Error", function() {
                expect(function() { i.__ge__(one) }).toThrowError("left operand (i) in comparison expression must be a scalar.");
            })
            it("(one, i) => Error", function() {
                expect(function() { one.__ge__(i) }).toThrowError("right operand (i) in comparison expression must be a scalar.");
            })
            */
        });
        describe("gt", function () {
            const zero = G3.zero;
            const one = G3.one;
            it("(one, one) => false", function () {
                expect(one.__gt__(one)).toBeFalsy();
            });
            it("(zero, one) => false", function () {
                expect(zero.__gt__(one)).toBeFalsy();
            });
            it("(one, zero) => true", function () {
                expect(one.__gt__(zero)).toBeTruthy();
            });
            /*
            it("(meter, second) => false", function() {
                expect(function() { meter.__gt__(second) }).toThrowError("Dimensions mismatch in comparison expression: length > time");
            })
            it("(i, one) => Error", function() {
                expect(function() { i.__gt__(one) }).toThrowError("left operand (i) in comparison expression must be a scalar.");
            })
            it("(one, i) => Error", function() {
                expect(function() { one.__gt__(i) }).toThrowError("right operand (i) in comparison expression must be a scalar.");
            })
            */
        });
        describe("le", function () {
            const zero = G3.zero;
            const one = G3.one;
            it("(one, one) => true", function () {
                expect(one.__le__(one)).toBeTruthy();
            });
            it("(zero, one) => true", function () {
                expect(zero.__le__(one)).toBeTruthy();
            });
            it("(one, zero) => false", function () {
                expect(one.__le__(zero)).toBeFalsy();
            });
            /*
            it("(meter, second) => false", function() {
                expect(function() { meter.__le__(second) }).toThrowError("Dimensions mismatch in comparison expression: length <= time");
            })
            it("(i, one) => Error", function() {
                expect(function() { i.__le__(one) }).toThrowError("left operand (i) in comparison expression must be a scalar.");
            })
            it("(one, i) => Error", function() {
                expect(function() { one.__le__(i) }).toThrowError("right operand (i) in comparison expression must be a scalar.");
            })
            */
        });
        describe("lt", function () {
            const zero = G3.zero;
            const one = G3.one;
            it("(one, one) => false", function () {
                expect(one.__lt__(one)).toBeFalsy();
            });
            it("(zero, one) => true", function () {
                expect(zero.__lt__(one)).toBeTruthy();
            });
            it("(one, zero) => false", function () {
                expect(one.__lt__(zero)).toBeFalsy();
            });
            /*
            it("(meter, second) => false", function() {
                expect(function() { meter.__lt__(second) }).toThrowError("Dimensions mismatch in comparison expression: length < time");
            })
            it("(i, one) => Error", function() {
                expect(function() { i.__lt__(one) }).toThrowError("left operand (i) in comparison expression must be a scalar.");
            })
            it("(one, i) => Error", function() {
                expect(function() { one.__lt__(i) }).toThrowError("right operand (i) in comparison expression must be a scalar.");
            })
            */
        });
    });
    describe("norm", function () {
        it("returns a number", function () {
            expect(typeof zero.norm()).toBe("object");
        });
    });
    describe("quad", function () {
        it("returns a number", function () {
            expect(typeof zero.quad()).toBe("object");
        });
        it("squaredNorm(0)", function () {
            expect(zero.scale(2).squaredNorm().a).toBe(0);
        });
        it("squaredNorm(2)", function () {
            expect(one.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*e1)", function () {
            expect(i.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*e2)", function () {
            expect(j.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*e3)", function () {
            expect(k.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*e1e2)", function () {
            expect(ij.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*e2e3)", function () {
            expect(jk.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*e3e1)", function () {
            expect(ki.scale(2).squaredNorm().a).toBe(4);
        });
        it("squaredNorm(2*I)", function () {
            expect(I.scale(2).squaredNorm().a).toBe(4);
        });
    });
});
