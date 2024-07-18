const add = function(...args) {
  let total = 0;
  args.forEach(num => {
    total += num;
  });
  return total
	
};

const subtract = function(...args) {
  let total = args[0];
  for(let i = 1; i < args.length; i++){
    total -= args[i];
  }
  return total;
};

const sum = function(array) {
	let total = 0;
  array.forEach(num => {
    total += num;
  });
  return total;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(num => {
    total *= num;
  });
  return total
};

const power = function(num, powerOf) {
  return Math.pow(num, powerOf)
};

const factorial = function(num) {
  let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i
  }
  return total;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
