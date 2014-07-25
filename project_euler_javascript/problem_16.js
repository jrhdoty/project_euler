  /*
  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2^1000?
  */

// for ( var i = 0; i < 20; i++){
//   console.log(2<<i);
// }

// console.log(2<<1000);

var reduce = function(arr, callback, accumulator){
  for ( var i = 0; i < arr.length; i++ ){
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
};

var addArrayNumbers = function(num1, num2){
  var result = [];
  var carry = 0;
  var place;
  while (num1.length > 0 || num2.length > 0){
    place = 0;
    if (num1.length > 0) place += num1.pop();
    if (num2.length > 0) place += num2.pop();
    place += carry;
    carry = 0;
    if ( place >= 10){
      carry = 1;
      place = place-10;
    }
    result.unshift(place);
  }
  if (carry > 0) result.unshift(carry);
  return result;
};


//implementations of big number multiplication and addition
var  multiplyArrayNumber = function(num1, num2){
  var results = [];
  var result  = [];
  var i, j, place, num;
  var carry = 0;

  for ( j = num2.length-1; j >= 0; j-- ){
    num = num2[j];
    carry = 0;
    for ( i = num1.length-1; i >= 0; i-- ){
      place = num1[i]*num;
      place += carry;
      carry = 0;
      if (place >= 10){
        place = place.toString().split('');
        carry = place.shift()*1;
        place = place[0]*1;
      }
      result.unshift(place);
    }
    if (carry > 0) result.unshift(carry);
    results.push(result);
    result = new Array(num2.length-j+1).join('0').split('').map(parseFloat);
  }
  return reduce(results, addArrayNumbers, results.pop());
};

//get result of 2^1000
var result = [2];
for (var i = 0; i < 999; i++){
  result = multiplyArrayNumber([2], result);
}

//add digits
console.log(reduce(result, function(a, b){
  return a+b;
}, result.pop()));
