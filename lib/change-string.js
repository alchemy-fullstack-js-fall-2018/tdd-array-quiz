function changeString(words, callback) {
    let phrases = [];
    for(let i = 0; i < words.length; i++) {
        const word = words[i].split('');
        if(word.indexOf('y') === -1 && word.indexOf('Y') === -1) {
            phrases.push(`Is it ${word.join('')}?`);
        }
    }
    callback(phrases);
}

module.exports = changeString;