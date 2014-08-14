/*
Permuted multiples
Problem 52
Published on 12 September 2003 at 06:00 pm [Server Time]
It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.
*/

var matchingDigits = function(values){
  var digits = stringToObject(values[0].toString());
  var i = 1, equal = true, j;
  while ( equal && i < values.length){
    next = stringToObject(values[i].toString());
    equal = compareObjects(next, digits);
    i++
  }
  return equal;
};

var compareObjects = function(obj1, obj2){
  var keys1 = Object.keys(obj1);
  var keys2 = Object.keys(obj2);
  if ( keys1.length !== keys2.length ){return false;}

  for ( var i = 0; i < keys1.length; i++ ){
    if ( obj1[keys1[i]] !== obj2[keys1[i]]){return false;}
  }
  return true;
};

var stringToObject = function(str){
  var result = {};
  for ( var i = 0; i < str.length; i++ ){
    result[str[i]] ? result[str[i]]++ : result[str[i]] = 1;
  }
  return result;
};

var permutedMultiples = function(mult){
  var found = false;
  var multiples;
  var current = 2;
  while (!found){
    multiples = [current];
    for ( var i = 2; i <= mult; i++){
      multiples.push(current*i);
    }
    found = matchingDigits(multiples);
    current++;
  }
  return multiples;
};

var result = permutedMultiples(6);
console.log(result);










