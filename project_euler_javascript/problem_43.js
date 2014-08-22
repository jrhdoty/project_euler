/*Problem 43
The number, 1406357289, is a 0 to 9 pandigital number 
because it is made up of each of the digits 0 to 9 in some order, 
but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.
*/

var problem43 = {};

var range = function(min, max){
  var result = [];
  for ( var i = min; i < max; i++){
    result.push(i);
  }
  return result;
};

problem43.pandigitals = function(max){
  var results = [];
  var choices = range(0, max+1);
  var i;
  for ( i = 0; i < choices.length; i++){
    choices[i] = choices[i].toString();
  }

  var remaining, next;
  var pandigitalsRec = function(current, options){
    if (options.length === 0){
      results.push(current);
      return;
    }
    var next, remaining;
    for ( var i = 0; i < options.length; i++ ){
      remaining = options.slice(0);
      next = remaining.splice(i, 1);
      pandigitalsRec(current+next, remaining);
    }
  };

  for ( i = 1; i < choices.length; i++){
    remaining = choices.slice(0);
    next = remaining.splice(i, 1);
    pandigitalsRec(next, remaining);
  }

  return results;
};

problem43.isPrime = function(num){
  var max = Math.floor(Math.sqrt(num));
  for ( var i = 2; i <= max; i++ ){
    if (num % i === 0) return false;
  }
  return true;
};

var memoize = function(func){
  var results = {};
  return function(num){
    if ( results[num] === undefined ) results[num] = func(num);
    return results[num];
  };
};

problem43.getNPrimes = function(num){
  var results = [];
  var target = 2;
  while (results.length < num ){
    if ( problem43.isPrime(target) ){
      results.push(target);
    }
    target++;
  }
  return results;
};

problem43.getNPrimes = memoize(problem43.getNPrimes);

problem43.specialProperty = function(str){
  var primes = problem43.getNPrimes(str.length-3);
  var length = str.length - 2;
  var subStr;
  for ( var i = 1; i < length; i++ ){
    subStr = str.substring(i, i+3);
    if ( +subStr % primes[i-1] !== 0 ){
      return false;
    }
  }
  return true;
};

var reduce = function(arr, callback, acc){
  for ( var i = 0; i < arr.length; i++ ){
    acc = callback(arr[i], acc);
  }
  return acc;
};

var pandigitals = problem43.pandigitals(9);
var results = [];
for ( var i = 0; i < pandigitals.length; i++ ){
  if (problem43.specialProperty(pandigitals[i])) results.push(+pandigitals[i]);
}

console.log('Answer is: ', reduce(results, function(a, b){return a+b;}, 0));


module.exports = problem43;
