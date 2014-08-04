/*
Euler discovered the remarkable quadratic formula:

n² + n + 41

It turns out that the formula will produce 40 primes for the consecutive values n = 0 to 39. 
However, when n = 40, 402 + 40 + 41 = 40(40 + 1) + 41 is divisible by 41, 
and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, 
which produces 80 primes for the consecutive values n = 0 to 79. 
The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, 
for the quadratic expression that produces the maximum number of primes for consecutive values of n, 
starting with n = 0.
*/

var isPrime = function(num){
  if (num < 2){
    return false;
  }
  if (num === 2){
    return true;
  }
  if ( num % 2 === 0){return false;}

  var root = Math.sqrt(num);
  for ( var i = 3; i < root; i+=2 ){
    if ( num % i === 0){
      return false;
    }
  }
  return true;
};

var memoize = function(func){
  var results = {};
  return function(item){
    if (results[item] === undefined){results[item] = func(item);}
    return results[item];
  };
};

var memoizedPrime = memoize(isPrime);

var checkQuadraticPrimeGenerator = function(a, b){
  //return number of primes generated 0-n
  var prime = true, n=0, result;
  while(prime){
    result = n*n + n*a + b;
    if ( memoizedPrime(result) ){
      n+=1;
    } else {
      prime = false;
    }
  }
  return n-1;
};

var max = -1, max_a, max_b, result;

for ( var a = -999; a <= 999; a++){
  for ( var b = -999; b <= 999; b++ ){
    result = checkQuadraticPrimeGenerator(a, b);
    if ( result > max ){
      max = result;
      max_a = a;
      max_b = b;
    }
  }
}


console.log('max product: ', max_a*max_b);






