
const test = require('node:test')
const assert = require('node:assert')
const se = require('../index.js')

test('should return a list of new coefficients when divisor is 2 and coefficients are [1, -3, -4, 12]', (t) => {

    const result = se.calculateReducedCoefficients(2, [1, -3, -4, 12])

    const expected = JSON.stringify([1, -1, -6, 0])
    assert.equal(true, expected === JSON.stringify(result));
});

test('should return a list of new coefficients when divisor is 1 and coefficients contain multiple zeros', (t) => {

    const result = se.calculateReducedCoefficients(1, [1, 0, 0, 0, -1])

    const expected = JSON.stringify([1, 1, 1, 1, 0])

    assert.equal(true, expected === JSON.stringify(result));
});

test('should return a list of reduced coefficients when divisor is 1 and coefficients are [1, 2, -1, -2]', (t) => {

    const result = se.calculateReducedCoefficients(1, [1, 2, -1, -2])

    const expected = JSON.stringify([1, 3, 2, 0])

    assert.equal(true, expected === JSON.stringify(result));
});

test('should return a list of reduced coefficients when divisor is 2 and coefficients are [1, -6, 11, -6]', (t) => {

    const result = se.calculateReducedCoefficients(2, [1, -6, 11, -6])

    const expected = JSON.stringify([1, -4, 3, 0])

    assert.equal(true, expected === JSON.stringify(result));
});

test('should return a list of reduced coefficients when divisor is 2 and coefficients contain a positive root', (t) => {

    const result = se.calculateReducedCoefficients(2, [3, 0, -6, 2])
    const expected = JSON.stringify([3, 6, 6, 14])

    assert.equal(true, expected === JSON.stringify(result));
});

test('should return a list of reduced coefficients when divisor is -2 and coefficients contain a negative root', (t) => {

    const result = se.calculateReducedCoefficients(-2, [1, 0, 0, 0, -16])
    const expected = JSON.stringify([1, -2, 4, -8, 0])

    assert.equal(true, expected === JSON.stringify(result));
});