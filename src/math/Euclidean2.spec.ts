import { assert } from "chai";
import { G2 } from "./Euclidean2";

describe("G2", function () {
    describe("constructor", function () {
        it("preserves coordinates", function () {
            const a = Math.random()
            const x = Math.random()
            const y = Math.random()
            const b = Math.random()
            const M = new G2(a, x, y, b);
            assert.strictEqual(M.a, a);
            assert.strictEqual(M.x, x);
            assert.strictEqual(M.y, y);
            assert.strictEqual(M.b, b);
        });
    });
});
