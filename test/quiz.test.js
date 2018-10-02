const assert = require('assert');
const { quiz } = require('../lib/quiz');

describe('quiz', () => {

    it('removes Y items from array and returns "is it + item" to the remainder.', () => {
        const result = quiz(['sky', 'hot', 'Yeti', 'green']);
        assert.deepEqual(result, ['Is it hot?', 'Is it green?']);
    });
});