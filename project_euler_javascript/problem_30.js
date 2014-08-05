/*
Digit fifth powers
Problem 30
Published on 08 November 2002 at 06:00 pm [Server Time]
Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

var powerOfDigits = function(num, power){
  var str = num.toString();
  var result = 0;
  for ( var i = 0; i < str.length; i++ ){
    result += Math.pow(str[i]*1, power);

  }
  return result;
};

var maxPossiblePowerOfDigits = function(power){
  var max = Math.pow(9, power);
  var x = 1;
  while (max*x > Math.pow(10, x)){
    x+=1;
  }
  return x;
};


var results = [];
for ( var i = 2; i < Math.pow(10, maxPossiblePowerOfDigits(5)); i++){
  if (i === powerOfDigits(i, 5)){
    results.push(i);
  }
}

var sum = 0;
for ( var i = 0; i < results.length; i++){
  sum +=results[i];
}
console.log('sum: ' , sum);



