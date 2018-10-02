
module.exports = { quiz };


function quiz(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].includes('Y') || arr[i].includes('y')) {
            arr.splice(i, 1);
        }
        arr[i] = 'Is it ' + arr[i] + '?';
    }
    return arr;
}

  