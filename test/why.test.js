const assert = require('assert');
const why = require('../lib/why');

describe('why tests', () => {


    it('removes words with y and Y', () => {
        const attempt = why(['dog', 'doggy', 'Yes', 'No']);
        const expected = ['dog', 'No'];
        assert.deepEqual(attempt, expected);
    });
    
    it('replaces acceptable words with a question including the word', () => {
        const attempt = why(['dog', 'doggy', 'Yes', 'No']);
        const expected = ['Is it dog?', 'Is it No?'];
        assert.deepEqual(attempt, expected);
    });

    
});
