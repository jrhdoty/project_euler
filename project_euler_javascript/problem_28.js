/*
Number spiral diagonals
Problem 28
Published on 11 October 2002 at 06:00 pm [Server Time]
Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way
*/

var spiralDiagonals = function(n){
  var result = [];
  if (n < 1){return result;}
  result.push(1);

  for ( var i = 0; i < Math.floor(n/2); i++){
    for ( var j =0; j < 4; j++){
        result.push(result[result.length-1]+2*(i+1));
    }
  }
  return result;
};

var reduce = function(arr, callback, acc){
  for (var i = 0; i < arr.length; i++){
    acc = callback(acc, arr[i]);
  }
  return acc;
};

var sum = function(a, b){
  return a+b;
};

console.log(reduce(spiralDiagonals(1001), sum, 0));








