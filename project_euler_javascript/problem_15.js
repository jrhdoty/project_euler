/*
Lattice Paths

Starting in the top left corner of a 2-2 grid, and only being able to move to the right and down, 
there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20x20 grid?
*/

//total number of combinations of 20 up's and 20 down's

var factorial = function(num){
  if (num === 1){
    return 1;
  }
  return num * factorial(num-1);
};

console.log(factorial(3));


var latticePaths = function(dim){
  dim = dim*2;
  return factorial(dim)/(factorial(dim/2)*factorial(dim/2)); //n choose k, n!/(k!(n-k)!)
};

console.log('latice path for 20: ', latticePaths(20));

