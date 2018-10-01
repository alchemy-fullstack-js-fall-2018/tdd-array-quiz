const assert = require('assert');
const whyChecker = require('../lib/isitwhy');

describe('whyChecker', () => {
    it('should remove words that contain y or Y', () => {
        const removedYs = whyChecker(['YES', 'I\'m', 'yak', 'shaving']);
        assert.deepEqual(removedYs, ['I\'m', 'shaving']);
    });

});