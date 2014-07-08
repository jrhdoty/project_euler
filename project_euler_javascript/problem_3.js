/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/


var largestPrimeFactor = function(num){
  var denominator = 2;
  while(denominator < num){
    if(num % denominator === 0){
      num /= denominator;
    } else{
      denominator++;
    }
  }
  return num;
};

console.log(largestPrimeFactor(600851475143));
