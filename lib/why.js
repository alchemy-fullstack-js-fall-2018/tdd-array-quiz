function why(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].includes('Y') || array[i].includes('y')) {
            array.splice(i, 1);
        }
        array[i] = 'Is it ' + array[i] + '?';
    }
    return array;
}
module.exports = why;