function removeY(arr) {
    let newArr = [];
    let letterLower = ['y'];
    let letterUpper = ['Y'];
    for(let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if(!word.includes(letterLower) && !word.includes(letterUpper)) {
            newArr.push(word);
        }
    }
    return newArr;
}

module.exports = {
    removeY
};