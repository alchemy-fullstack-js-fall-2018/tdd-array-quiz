const assert = require('assert');
const List = require('../lib/array');

describe('this should remove any word with letters Y or y', () => {
    
    let list;

    beforeEach(() => {
        list = new List(['yellow, Yell, apple, green, mighty']);
    });

    it('this should return a new list array without words including y', () => {
        const filterResults = list.map(item => {
            
        });
        assert.deepEqual(filterResults, []);
    });

    it ('this should filter and return a new array', () => {
        const filterResults = list.filter(item => {
            return list;
        });
        assert.deepEqual(filterResults, ['apple, green']);
    });

});