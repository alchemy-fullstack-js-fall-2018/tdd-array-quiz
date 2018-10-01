const assert = require('assert');
const why = require('../lib/why');

describe('dont ask why', () => {

    it('removes any words that has y and puts is it infront', () => {
        const input = ['sky', 'hot', 'Yeti', 'green'];
        assert.deepEqual(why(input), ['Is it hot?', 'Is it green?']);
    });

});