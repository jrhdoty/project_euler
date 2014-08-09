/*
Double-base palindromes
Problem 36
Published on 31 January 2003 at 06:00 pm [Server Time]
The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

function getBaseLog(x, y) {   //The following function returns the logarithm of y with base x (ie. logx y):
    return Math.log(y) / Math.log(x);
}

var generateRepeatArray = function(val, length){
  var result = [];
  for ( var i = 0; i < length; i++ ){
    result.push(val);
  }
  return result;
};

var numToBinary = function(num){
  var result = '';
  var next = Math.floor(getBaseLog(2, num));
  var binary = generateRepeatArray(0, next);
  binary[0] = 1;
  num -= Math.pow(2, next);

  while (num > 0){
    next = Math.floor(getBaseLog(2, num));
    binary[binary.length-next] = 1;
    num -= Math.pow(2, next);
  }
  return binary;
};

var isPalindrome = function(str){
  var start = 0; end = str.length-1;
  while(start < end){
    if ( str[start] !== str[end] ){
      return false;
    }
    start++;
    end--;
  }
  return true;
};

var results = [];
var sum = 0;
for (var i = 1; i < 1000000; i+=2){
  if (isPalindrome(i.toString())){
    if(isPalindrome(numToBinary(i).join(''))){
      results.push(i);
      sum += i;
    }
  }
}

// console.log(results);
console.log(sum);



