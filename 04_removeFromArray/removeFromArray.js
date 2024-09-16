const removeFromArray = function(array, ...remove) {
    let result = []
    outer: for(let element of array){
        for(let currentElement of remove){
            if(element === currentElement){
                continue outer;
            } 
        }
        result.push(element);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
