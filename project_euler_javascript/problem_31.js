/*
Coin sums
Problem 31
Published on 22 November 2002 at 06:00 pm [Server Time]
In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:

1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can £2 be made using any number of coins?
*/

var coinSums = function(target, options){
  return  coinSumsRec(target, options, 0);
};

var coinSumsRec = function(target, options, index){
  if (target === 0){
    return 1;
  }
  if( index >= options.length || target < 0){
    return 0;
  }
  var result = 0;
  result += coinSumsRec(target - options[index], options, index);
  result += coinSumsRec(target, options, index+1);

  return result;
};

console.log(coinSums(200, [1, 2, 5, 10, 20, 50, 100, 200]));