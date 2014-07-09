/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

var primeFactors = function(num){
  if (num === 1 || num === 2){
     var result = {};
     result[num] = 1;
     return result;
    }
  var factors = {};
  var factor = 2;
  while( num > 1 ){
    if ( num%factor === 0 ){
      factors[factor] ? factors[factor] +=1 : factors[factor] = 1;
      num /= factor;
    } else {
      factor++;
    }
  }
  return factors;
};

var maxValues = function(obj){
  var result = {};
  var keys;
  for ( var i = 0; i < arguments.length; i++ ){
    keys = Object.keys(arguments[i]);
    for ( var j = 0; j < keys.length; j++ ){
      if ( !result[keys[j]] ){
        result[keys[j]] = arguments[i][keys[j]];
      } else {
        result[keys[j]] = Math.max(result[keys[j]], arguments[i][keys[j]]);
      }
    }
  }
  return result;
};


var smallestDivisible = function(arr){
  var factors = [];
  for ( var i = 0; i < arr.length; i++ ){
    factors.push(primeFactors(arr[i]));
  }
  factors = maxValues.apply(null, factors);
  var product = 1;
  var keys = Object.keys(factors);
  for ( i = 0; i < keys.length; i++){
    product *= Math.pow(keys[i], factors[keys[i]]);
  }
  return product;
};

var arr = [];
for(var i = 2 ; i <= 20; i++){
  arr.push(i);
}

console.log(smallestDivisible(arr));





