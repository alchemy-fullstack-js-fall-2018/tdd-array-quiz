module.exports = class Replacer {
    constructor(arr) {
        this.arr = arr;
    }

    remove(arr, callback) {
        let newArr = [];
        for(let i = 0; i < arr.length; i++) {
            if(!arr[i].includes('y')) {
                newArr.push(arr[i]);
            }
        }

        callback(newArr);
    }
};
