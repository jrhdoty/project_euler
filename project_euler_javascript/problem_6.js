/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

var sumOfSquares = function(min, max){
  var result = 0;
  for(var i = min; i <= max; i++){
    result += i*i;
  }
  return result;
};


var squareOfSums = function(min, max){
  var result = 0;
    for(var i = min; i <= max; i++){
    result += i;
  }
  return result*result;
};

console.log(squareOfSums(1, 100) - sumOfSquares(1, 100) );