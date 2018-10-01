
module.exports = function why(words) {

    return words.reduce((acc, curr) => {
        
        if(curr.split('').every(item => item.toLowerCase() !== 'y')){
            acc.push(`Is it ${curr}?`);
        }
        return acc;
    }, []);

};


