/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, 
which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and 
it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, 
the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as 
the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that the 
greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

var reduce = function(arr, func, acc){
  for ( var i = 0; i < arr.length; i++ ){
    acc = func(acc, arr[i]);
  }
  return acc;
};

var sum = function(a, b){
  return a+b;
};

var properDivisors = function(num){
  var divisors = [];
  for ( var i = 1; i < num; i++){
    if (num%i===0){divisors.push(i);}
  }
  return divisors;
};

var isPerfectNumber = function(num){
  var total = reduce(properDivisors(num), sum, 0);
  if ( total === num ){
    return 0; //0 if perfect
  } else if (total > num){
    return 1; //1 if abundant
  }
  return -1; //-1 if deficient
};

console.log(isPerfectNumber(12));

var abundantNumbers = [];
for ( var i = 12; i < 28123; i++){
  if ( isPerfectNumber(i) === 1){
    abundantNumbers.push(i);
  }
}

var allSums = {};
for ( var i = 0; i < abundantNumbers.length; i++ ){
  for ( var j = 0; j < abundantNumbers.length; j++){
    allSums[(abundantNumbers[i]+abundantNumbers[j])] = true;
  }
}

var nonSums = [];
for ( var i =1; i <= 28123; i++){
  if (!allSums[i]){
    nonSums.push(i);
  }
}

console.log(reduce(nonSums, sum, 0));




