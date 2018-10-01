const assert = require('assert');
const why = require('../lib/why');

it('returns values as described in example', () => {
    const input = ['sky', 'hot', 'Yeti', 'green'];
    const expected = ['Is it hot?', 'Is it green?'];
    const output = why(input);
    assert.deepEqual(output, expected);
});