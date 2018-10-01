const assert = require('assert');
const why = require('../lib/why');

describe('why tests', () => {

    const attempt = why(['dog', 'doggy', 'Yes', 'No']);

    it('removes words with y and Y', () => {
        assert.ok(!attempt.includes('doggy'));
    });
    
    it('replaces acceptable words with a question including the word', () => {
        let expected = ['Is it dog?', 'Is it No?'];
        assert.deepEqual(attempt, expected);
    });

    
});
