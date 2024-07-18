const fibonacci = function(member) {
    if(member < 0){
        return "OOPS";
    }
    let fibo = [0, 1];
    for(let i = 2; i <= member; i++){
        fibo.push(fibo[i-2] + fibo[i-1]);
    }
    return fibo[member];

};

// Do not edit below this line
module.exports = fibonacci;
