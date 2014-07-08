/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var isPalindrome = function(str){
  var start = 0;
  var finish = str.length-1;
  while(start <= finish){
    if(str[start] !== str[finish]){
      return false;
    }
    start++;
    finish--;
  }
  return true;
};

var allProducts = function(min, max){
  var result = [];
  for ( var i = min; i <= max; i++ ){
    for ( var j = i; j <= max; j++){
      result.push(i*j);
    }
  }
  return result;
};


var largestPalindrome = function(arr){
  var largest = -1;
  for( var i = 0; i < arr.length; i++ ){
    if (arr[i] > largest){
      if (isPalindrome(arr[i].toString())){
        largest = arr[i];
      }
    }
  }
  return largest;
};

console.log(largestPalindrome(allProducts(100, 999)));