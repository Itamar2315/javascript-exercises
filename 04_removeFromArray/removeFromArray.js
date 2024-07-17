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
/* TOP solution:
const removeFromArray = function (array, ...args) {
    // create a new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
      // push every element into the new array
      // UNLESS it is included in the function arguments
      // so we create a new array with every item, except those that should be removed
      if (!args.includes(item)) {
        newArray.push(item);
      }
    });
    // and return that array
    return newArray;
  };
  
  // A simpler, but more advanced way to do it is to use the 'filter' function,
  // which basically does what we did with the forEach above.
  
  // const removeFromArray = function(array, ...args) {
  //   return array.filter(val => !args.includes(val))
  // }
  */
  

// Do not edit below this line
module.exports = removeFromArray;
