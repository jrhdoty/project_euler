/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

var memoize = function(func){
  var results = {};
  return function(val){
    if (results[val] === undefined) results[val] = func(val);
    return results[val];
  };
};

var collatzLength = function(num){
  if ( num === 1) return 1;

  if(num%2 === 0){
    return 1+ collatzLength(num/2);
  }
  return 1 + collatzLength(num*3+1);
};

var collatzMemo = memoize(collatzLength);


var max = -1;
var num = -1;
var result;
for(var i = 1; i < 1000000; i++){
  result = collatzMemo(i);
  if ( result > max ){
    max = result;
    num = i;
  }
}
console.log('num: ', num, " max: ", max);

