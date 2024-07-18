const palindromes = function (string) {  
    let viableChars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const str = string.toLowerCase().split("")
    .filter((char) => viableChars.includes(char))
    .join("");
    const reversed = str.split("").reverse().join("");
    return str === reversed;
};

// Do not edit below this line
module.exports = palindromes;
