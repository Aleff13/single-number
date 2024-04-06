
const test = require('node:test')
const assert = require('node:assert')
const getSingleElement = require('../index.js')

test('get the single value from the array', (t) => {

  const singleValue = getSingleElement([1, 2, 3, 3, 2])

  assert.strictEqual(singleValue, '1');
  });

test('get the first single value from the array', (t) => {

  const singleValue = getSingleElement([1, 2, 3, 2])

  assert.strictEqual(singleValue, '1');
});

test('get the first single string from the array', (t) => {

  const singleValue = getSingleElement(['a', 'b', 'c', 'd', 'e', 'c', 'd', 'e', 'a'])

  assert.strictEqual(singleValue, 'b');
});