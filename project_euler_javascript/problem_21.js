/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair 
and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; 
therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

var each = function(arr, callback){
  for ( var i = 0; i < arr.length; i++ ){
    callback(arr[i]);
  }
};

var range = function(min, max){
  var result = [];
  for ( var i = min; i < max; i++){
    result.push(i);
  }
  return result;
};

var reduce = function(arr, callback, acc){
  each(arr, function(item){
    acc = callback(acc, item);
  });
  return acc;
};

var sum = function(a, b){
  return a+b;
};


var properDivisors = function(num){
  var divisors = [];
  for ( var i = 1; i < num; i++ ){
    if ( num % i === 0 ){
      divisors.push(i);
    }
  }
  return divisors;
};

var sumProperDivisors = function(arr){
  var result = {};
  each(arr, function(item){
    result[item] = reduce(properDivisors(item), sum, 0);
  });
  return result;
};

var result = sumProperDivisors(range(1, 10000));
var proper = {};
var keys = Object.keys(result);

each(keys, function(item){
  if ( item*1 === result[result[item]] && item*1 !== result[item] ){
    proper[item] = true;
    proper[result[item]] = true;
  }
});

keys = Object.keys(proper);
summation = reduce(keys, function(acc, item){
  return acc + item*1;
}, 0);


console.log('sum: ', summation);



