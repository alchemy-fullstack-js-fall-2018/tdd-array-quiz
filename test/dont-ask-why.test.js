const assert = require('assert');
const { removeY } = require('../lib/dont-ask-why');

describe('remove Y', () => {
    it('removes words that contain y or Y', () => {
        const result = removeY(['sky', 'hot', 'Yeti', 'green']);
        assert.equal(result, ['hot', 'green']);
    });
});