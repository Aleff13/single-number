
const test = require('node:test')
const assert = require('node:assert')
const se = require('../index.js')

test('get the single value from the array', (t) => {

  const singleValue = se.getSingleElement([1, 2, 3, 3, 2])

  assert.strictEqual(singleValue, '1');
  });

test('get the first single value from the array', (t) => {

  const singleValue = se.getSingleElement([1, 2, 3, 2])

  assert.strictEqual(singleValue, '1');
});

test('get the first single string from the array', (t) => {

  const singleValue = se.getSingleElement(['a', 'b', 'c', 'd', 'e', 'c', 'd', 'e', 'a'])

  assert.strictEqual(singleValue, 'b');
});