function isInt(value){
    return !isNaN(value) && Number(value) === value;
}

const sumAll = function(smallerInt, biggerInt) {
    if(!Number.isInteger(smallerInt) || !Number.isInteger(biggerInt)){
        return "ERROR";
    }
    if(smallerInt < 0 || biggerInt < 0){
        return "ERROR";
    }
    let sum = 0;
    
    if(smallerInt > biggerInt)
    {
        const temp = biggerInt;
        biggerInt = smallerInt;
        smallerInt = temp;

    }
    
    for(let i = smallerInt; i <= biggerInt; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
