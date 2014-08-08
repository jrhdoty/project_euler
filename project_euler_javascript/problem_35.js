/*
Circular primes
Problem 35
Published on 17 January 2003 at 06:00 pm [Server Time]
The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?
*/

var rotate = function(arr){
  arr.push(arr.shift());
  return arr;
};

var allRotations = function(num){
  var results = [];
  results.push(num);
  num = num.toString().split('');

  for ( var i = 0; i < num.length-1; i++ ){
    results.push(rotate(num).join('')*1);
  }
  return results;
};


var primeSieve = function(max){
  var nums = range(2, max);
  var next, counter;

  for (var i = 0; i < nums.length; i++){
    next = nums[i];
    if (next){
      counter = next+next;
      while(counter < max){

        nums[counter-2] = null;
        counter+=next;
      }
    }
  }
  return filter(nums, function(item){
    return (item);
  });
};

var range = function(min, max){
  var result = [];
  for ( var i = min; i < max; i++ ){
    result.push(i);
  }
  return result;
};

var filter = function(arr, predicate){
  var result = [];
  for ( var i = 0; i < arr.length; i++ ){
    if (predicate(arr[i])){result.push(arr[i]);}
  }
  return result;
};

//get all primes less than one million and put them in a hash table for faster lookup
var primes = primeSieve(1000000);
var primeTable = {};
for ( var i = 0; i < primes.length; i++ ){
  primeTable[primes[i]] = true;
}

//go through each prime and check if all of its rotations are prime
var rotations, isCircular = true, results = [];
for (var i = 0; i < primes.length; i++){
  rotations = allRotations(primes[i]);
  isCircular = true;
  for ( var j = 0; j< rotations.length; j++ ){
    if (!primeTable[rotations[j]]){
      isCircular = false;
    }
  }
  if(isCircular){results.push(primes[i]);}
}

console.log(results.length);







