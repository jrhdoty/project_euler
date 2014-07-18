/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

var memoize = function(func){
  var results = {};
  return function(input){
    if (results.hasOwnProperty(input)){
      return results[input];
    }
    return func(input);
  };
};

var isPrime = function(num){
  var max = Math.floor(Math.sqrt(num));
  for(var i = 2; i <= max; i++){
    if ( num%i === 0 ){
      return false;
    }
  }
  return true;
};

var isPrimeMem = memoize(isPrime);

var allPrimes = function(max){
  var primes = [];
  for ( var i = 2; i < max; i++ ){
    if (isPrimeMem(i)){
      primes.push(i);
    }
  }
  return primes;
};


var primes = allPrimes(2000000);

var result = 0;
for(var i = 0; i < primes.length; i++){
  result+=primes[i];
}

console.log('result is: ', result);




