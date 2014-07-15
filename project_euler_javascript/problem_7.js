/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

var isPrime = function(num){
  if(num === 2){return true;}

  var max = Math.floor(Math.sqrt(num));
  for ( var i = 2; i <= max; i++ ){
    if ( num % i === 0 ){
      return false;
    }
  }
  return true;
};

var num = 2;
var count = 0;

while(count < 10001){
  if (isPrime(num)){
    count++;
  }
  num++;
}

console.log(--num);

