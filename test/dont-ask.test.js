const assert = require('assert');
const Replacer = require('../lib/dont-ask.js');

describe('replacer', () => {

    it('removes words with "y" from array', done => {
        const arr = ['sky', 'hot', 'Yeti', 'green'];
        const replacer = new Replacer(arr);

        replacer.remove()
    });
});
