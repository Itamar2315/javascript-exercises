const removeFromArray = function(array, ...remove) { // didn't know about forEach() and includes() 

    const newArray = [];
    isInBothArrays:
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < remove.length; j++){
            if(remove[j] === array[i]){
                continue isInBothArrays;
            }
        }
        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
