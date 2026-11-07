import { assert } from "chai";
import { arraysEQ } from "../../src/math/arraysEQ";

describe("arraysEQ", function () {
    it("should require lengths to be equal", function () {
        assert.strictEqual(arraysEQ([1], [1]), true);
        assert.strictEqual(arraysEQ([], [1]), false);
    });
    it("should require elements to be equal", function () {
        assert.strictEqual(arraysEQ([1], [1]), true);
    });
    //
    // Combinations of [], null, and undefined.
    // There will be 9 = 3 x 3 of them.
    //
    // 1
    it("(undefined, undefined) => true", function () {
        assert.strictEqual(arraysEQ(void 0, void 0), true);
    });
    // 2
    it("(undefined, []) => false", function () {
        assert.strictEqual(arraysEQ(void 0, []), false);
    });
    // 3
    it("([], undefined) => false", function () {
        assert.strictEqual(arraysEQ([], void 0), false);
    });
    // 4
    it("([], []) => true", function () {
        assert.strictEqual(arraysEQ([], []), true);
    });
    // 5
    it("(null, null) => true", function () {
        assert.strictEqual(arraysEQ(null, null), true);
    });
    // 6
    it("(null, []) => false", function () {
        assert.strictEqual(arraysEQ(null, []), false);
    });
    // 7
    it("([], null) => false", function () {
        assert.strictEqual(arraysEQ([], null), false);
    });
    // 8
    it("(null, undefined) => false", function () {
        assert.strictEqual(arraysEQ(null, void 0), false);
    });
    // 9
    it("(undefined, null) => false", function () {
        assert.strictEqual(arraysEQ(void 0, null), false);
    });
});
