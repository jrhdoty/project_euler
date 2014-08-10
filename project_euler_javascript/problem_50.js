/*
Consecutive prime sum
Problem 50
Published on 15 August 2003 at 06:00 pm [Server Time]
The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, 
contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

var filter = function(arr, predicate){
  var result = [];
  for ( var i = 0; i < arr.length; i++ ){
    if ( predicate(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
};

var range = function(min, max){
  var result = [];
  for ( var i = min; i < max; i++ ){
    result.push(i);
  }
  return result;
};

var primeSieve = function(min, max){
  var primes = range(2, max);
  var multiple, current;
  for ( var i = 0; i < primes.length; i++ ){
    current = primes[i];
    if ( current ){
      multiple = current*2;
      while ( multiple < max ){
        primes[multiple-2] = null;
        multiple += current;
      }
    }
  }
  return filter(primes, function(item){
    if (item && item >= min) return true;
    return false;
  });
};

var arrayToSet = function(arr){
  var set = {};
  for ( var i = 0; i < arr.length; i++ ){
    set[arr[i]] = true;
  }
  return set;
};














