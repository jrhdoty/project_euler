/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

var isTriplet = function(a, b, c){
  return a*a+b*b === c*c;
};

//generate all permutations of a+b+c === 1000 where a < b < c
var findTriplet = function( targetSum ){
  var a, b, c;
  for ( c = targetSum-3; c >= Math.floor(targetSum/3)+1; c-- ){
    b = Math.min(c-1, targetSum-c-1);
    a = targetSum-c-b;
    while (a < b){
      if ( isTriplet(a, b, c) ){
        return [a, b, c];
      }
      a++;
      b--;
    }
  }
  return null;
};

console.log( findTriplet(1000));
