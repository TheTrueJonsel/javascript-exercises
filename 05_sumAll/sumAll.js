const sumAll = function(lowerBound, upperBound) {
    if((typeof lowerBound) !== "number" || (typeof upperBound) !== "number"){
        return "ERROR";
    }

    if(!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)){
        return "ERROR";
    }

    if(lowerBound < 0 || upperBound < 0){
        return "ERROR";
    }

    if(lowerBound > upperBound){
        let temp = lowerBound;
        lowerBound = upperBound;
        upperBound = temp;
    }

    return upperBound * (upperBound +1) / 2 - lowerBound * (lowerBound +1) / 2 + lowerBound;
};

// Do not edit below this line
module.exports = sumAll;
