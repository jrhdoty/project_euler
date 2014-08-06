/*
Digit factorials
Problem 34
Published on 03 January 2003 at 06:00 pm [Server Time]
145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

var memoize = function(func){
  var results = {};
  return function(item){
    if ( results[item] === undefined){
      results[item] = func(item);
    }
    return results[item];
  };
};

var factorial = function(n){
  var result = 1;
  while (n>1){
    result *= n--;
  }
  return result;
};

var factMem = memoize(factorial);

var sumFactorials = function(num){
  var str = num.toString();
  var result = 0;
  for ( var i = 0; i < str.length; i++ ){
    result += factMem(str[i]*1);
  }
  return result;
};

var start  = new Date().getTime();

var max = 10000000;
var result = 0;
for ( var i = 10; i < max; i++){
  if (i === sumFactorials(i)){
    console.log('match');
    result += i;
  }
}

console.log(result);
var end = new Date().getTime();
console.log("Time: ",end-start);