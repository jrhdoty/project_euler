/*
Distinct primes factors
Problem 47
Published on 04 July 2003 at 06:00 pm [Server Time]
The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?
*/

var primeFactors = function(num){
  var factors = {};
  var current = 2;
  while (num > 1){
    if (num % current === 0){
      factors[current] ? factors[current] += 1 : factors[current] = 1;
      num/=current;
    } else{
      current += 1;
    }
  }
  return factors;
};

var numPrimeFactors = function(num){
  return Object.keys(primeFactors(num)).length;
};


//consecutive numbers with x distinct primes
var cndp = function(numberConsecutive, numPrimes){
  var found = false;
  var current = 2;
  var i;
  while ( !found ){
    found = true;
    for ( i = current; i < numberConsecutive+current; i++ ){
      if ( numPrimeFactors(i) !== numPrimes ){
        found = false;
        break;
      }
    }
    if ( found ){
      var result = [];
      for ( i = current; i < numberConsecutive+current; i++){
        result.push(i);
      }
      return result;
    }
    current++;
  }
};

console.log(cndp(4, 4));








