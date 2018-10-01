const assert = require('assert');
const changeString = require('../lib/change-string');

describe('Change String', () => {
    
    it('removes words with y in them from an array and returns and array of the remaining words in this format: "Is it &lt;word&gt;?"', done => {
        const words = ['sky', 'hot', 'Yeti', 'green'];
        changeString(words, (err, phrases) => {
            if(err) return done(err);

            const expected = ['Is it hot?', 'Is it green?'];
            assert.deepEqual(phrases, expected);
        });
    });

});