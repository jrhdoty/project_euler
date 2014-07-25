  /*
  2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 2^1000?
  */

// for ( var i = 0; i < 20; i++){
//   console.log(2<<i);
// }

// console.log(2<<1000);

//implementations of big number multiplication and addition
var  multiplyArrayNumber = function(num, arr){
  var result = [];
  var i, place;
  var carry = 0;
  for ( i = arr.length-1; i >= 0; i-- ){
    place = arr[i]*num;
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


var result = [2];
for (var i = 0; i < 999; i++){
  result = multiplyArrayNumber(2, result);
}

var output = 0;
for ( var i = 0; i < result.length; i++ ){
  output += result[i];
}

console.log(output);








