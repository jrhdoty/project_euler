/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

//lets reuse big number operators from PE 16

var reduce = function(arr, callback, accumulator){
  for ( var i = 0; i < arr.length; i++ ){
    accumulator = callback(accumulator, arr[i]);
  }
  return accumulator;
};

var map = function(arr, callback){
  var result = [];
  for (var i = 0; i < arr.length; i++){
    result.push(callback(arr[i]));
  }
  return result;
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

var result = [1];
for (var i = 100; i > 0; i--){
  var next = i.toString().split('');
  next = map(next, function(i){
    return i*1;
  });
  result = multiplyArrayNumber(result, next);
}
var sum = function(a, b){
  return a+b;
};

console.log(reduce(result, sum, 0));



