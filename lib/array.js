module.exports = class List {
    constructor(items) {
        this.items = items;
    }

    filter(callback) {
        let array = [];
        for(let i = 0; i < this.items.length; i++) {
            if(callback(this.items[i]) == 'y' || 'Y') {
                return false;
            } else {
                return array;
            }  
        }
    }
    

};    
// const result = words.filter(word => word.length > 6);