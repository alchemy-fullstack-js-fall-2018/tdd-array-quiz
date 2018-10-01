module.exports = function why(arr) {
    
    return arr
        .filter(word => !word.includes('Y') && !word.includes('y'))
        .map(word => 'Is it ' + word + '?');
        
};
