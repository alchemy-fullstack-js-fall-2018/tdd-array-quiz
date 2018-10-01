const assert = require('assert');
const Replacer = require('../lib/dont-ask.js');

describe('replacer', () => {

    it('removes words with "y" from array', done => {
        const replacer = new Replacer([]);
        
        const arr = ['sky', 'hot', 'green'];
        replacer.remove(arr, (err, newArr) => {
            if(err) return done(err);
            assert.deepEqual(newArr, ['hot', 'green']);
            done();
        });
    });
});
