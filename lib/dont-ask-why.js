function removeY(arr) {
    let newArr = [];
    let letter = 'y';
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if(word.includes(letter)) {
            newArr.push(word);
        }
    }
    return newArr;
}

module.exports = {
    removeY
};