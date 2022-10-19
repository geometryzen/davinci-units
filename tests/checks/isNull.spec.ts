import { assert } from 'chai'
import { isNull } from '../../src/checks/isNull'

describe("isNull", function () {
  it("should be a function", function () {
    assert.strictEqual(typeof isNull === 'function', true)
  })
  it("(null) should be true", function () {
    assert.strictEqual(isNull(null), true)
  })
  it("(void 0) should be false", function () {
    assert.strictEqual(isNull(void 0), false)
  })
  it("({}) should be false", function () {
    assert.strictEqual(isNull({}), false)
  })
  it("('') should be false", function () {
    assert.strictEqual(isNull(''), false)
  })
  it("(' ') should be false", function () {
    assert.strictEqual(isNull(' '), false)
  })
  it("(0) should be false", function () {
    assert.strictEqual(isNull(0), false)
  })
  it("(1) should be false", function () {
    assert.strictEqual(isNull(1), false)
  })
  it("(NaN) should be false", function () {
    assert.strictEqual(isNull(NaN), false)
  })
  it("(Infinity) should be false", function () {
    assert.strictEqual(isNull(Infinity), false)
  })
  it("(true) should be false", function () {
    assert.strictEqual(isNull(true), false)
  })
  it("(false) should be false", function () {
    assert.strictEqual(isNull(false), false)
  })
})
