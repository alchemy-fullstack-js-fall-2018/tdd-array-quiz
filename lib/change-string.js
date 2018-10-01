function changeString(words, callback) {
    let phrases = [];
    for(let i = 0; i < words.length; i++) {
        const word = words[i].split('');
        for(let j = 0; j < word.length; j++) {
            if(word[i] === 'y' || word[i] === 'Y') {
                return;
            }
        }
        phrases.push(word);

    }
}

module.exports = changeString;