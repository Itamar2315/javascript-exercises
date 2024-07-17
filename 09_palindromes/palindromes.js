const palindromes = function (string) {
    let endIndex = string.length - 1;
    let startIndex = 0;
    while(startIndex != endIndex){
        if(string[startIndex] != string[endIndex]){
            return false;
        }
        startIndex++;
        endIndex--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
