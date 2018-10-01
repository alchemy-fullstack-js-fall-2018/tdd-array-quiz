const assert = require('assert');
const List = require('../lib/array');

describe('this should remove any word with letters Y or y', () => {
    
    let list;

    beforeEach(() => {
        list = new List(['yellow, Yell, apple, green, mighty']);
    });

    it('this should return a new list array without words including y', () => {
        const mapResults = list.map(item => {
            
        });
        assert.deepEqual(mapResults, []);
    });
});