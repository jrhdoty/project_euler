/*
Goldbach's other conjecture
Problem 46
Published on 20 June 2003 at 06:00 pm [Server Time]
It was proposed by Christian Goldbach that every odd composite number 
can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

var primeSieve = function(min, max){
  var primes = range(2, max);
  var current, next;
  var end = Math.sqrt(max);
  for ( var i = 0; i < end; i++ ){
    current = primes[i];
    if ( current ){
      next = current*2;
      while (next < max){
        primes[next-2] = null;
        next += current;
      }
    }
  }
  return filter(primes, function(item){
    if ( item && item < max ){
      return true;
    }
    return false;
  });
};

var isPrime = function(num){
  var max = Math.sqrt(num);
  for ( var i = 2; i <= max; i++ ){
    if ( num % i === 0){
      return false;
    }
  }
  return true;
};

var range = function(min, max){
  var result = [];
  for ( var i = min; i < max; i++){
    result.push(i);
  }
  return result;
};

var filter = function(arr, predicate){
  var results = [];
  for ( var i = 0; i < arr.length; i++ ){
    if ( predicate(arr[i])){
      results.push(arr[i]);
    }
  }
  return results;
};

var arrayToSet = function(arr){
  var set = {};
  for ( var i = 0; i < arr.length; i++ ){
    set[arr[i]] = true;
  }
  return set;
};

var goldbachs = function(target){
  var primes = primeSieve(2, target-1);
  var square = 1;
  var value;
  for ( var i = 0; i < primes.length; i++ ){
    square = 1;
    value = primes[i]+square*square*2;
    while (value <= target){
      if ( value === target ){
        return true;
      }
      square++;
      value = primes[i]+square*square*2;
    }
  }
  return false;
};

var found = false;
var target = 3;
while (!found){
  if ( !isPrime(target) && !goldbachs(target) ){
    found = true;
  } else {
    target += 2;
  }
}

console.log('target is: ', target);



