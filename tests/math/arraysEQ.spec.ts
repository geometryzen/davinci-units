import { assert } from 'chai'
import { arraysEQ } from '../../src/math/arraysEQ'

describe("arraysEQ", function () {
  it("should require lengths to be equal", function () {
    assert.strictEqual(arraysEQ([1], [1]), true)
    assert.strictEqual(arraysEQ([], [1]), false)
  })
  it("should require elements to be equal", function () {
    assert.strictEqual(arraysEQ([1], [1]), true)
    assert.strictEqual(arraysEQ([1], ['1']), false)
  })
  //
  // Combinations of [], null, and undefined.
  // There will be 9 = 3 x 3 of them.
  //
  // 1
  it("(undefined, undefined) => true", function () {
    assert.strictEqual(arraysEQ(void 0, void 0), true)
    assert.strictEqual(arraysEQ(void 0, void 0), void 0 === void 0)
  })
  // 2
  it("(undefined, []) => false", function () {
    assert.strictEqual(arraysEQ(void 0, []), false)
    assert.strictEqual(arraysEQ(void 0, []), void 0 === [])
  })
  // 3
  it("([], undefined) => false", function () {
    assert.strictEqual(arraysEQ([], void 0), false)
    assert.strictEqual(arraysEQ([], void 0), [] === void 0)
  })
  // 4
  it("([], []) => true", function () {
    assert.strictEqual(arraysEQ([], []), true)
  })
  // 5
  it("(null, null) => true", function () {
    assert.strictEqual(arraysEQ(null, null), true)
    assert.strictEqual(arraysEQ(null, null), null === null)
  })
  // 6
  it("(null, []) => false", function () {
    assert.strictEqual(arraysEQ(null, []), false)
    assert.strictEqual(arraysEQ(null, []), null === [])
  })
  // 7
  it("([], null) => false", function () {
    assert.strictEqual(arraysEQ([], null), false)
    assert.strictEqual(arraysEQ([], null), [] === null)
  })
  // 8
  it("(null, undefined) => false", function () {
    assert.strictEqual(arraysEQ(null, void 0), false)
    assert.strictEqual(arraysEQ(null, void 0), null === void 0)
  })
  // 9
  it("(undefined, null) => false", function () {
    assert.strictEqual(arraysEQ(void 0, null), false)
    assert.strictEqual(arraysEQ(void 0, null), void 0 === null)
  })
})
function expect(arg0: any) {
  throw new Error("Function not implemented.")
}
