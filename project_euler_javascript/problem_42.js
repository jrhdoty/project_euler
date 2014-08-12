/*
The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); 
so the first ten triangle numbers are:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

By converting each letter in a word to a number corresponding to its alphabetical position 
and adding these values we form a word value. 
For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. 
If the word value is a triangle number then we shall call the word a triangle word.

Using words.txt (right click and 'Save Link/Target As...'), 
a 16K text file containing nearly two-thousand common English words, how many are triangle words?
*/

var fs = require('fs');


fs.readFile('./assets/problem_42_triangle_words.txt', function(err, data){
  if ( err ) { throw err; }
  data = data.toString();
  data = data.replace(/["]+/g, '');
  data = data.split(',');
  checkAllWords(data);
});

var wordValue = function(str){
  var sum = 0; 
  str = str.toLowerCase();
  for ( var i = 0; i < str.length; i++ ){
    sum+=str.charCodeAt(i)-96;
  }
  return sum;
};

var TriangleNumbers = function(){
  this.set = {};
  this.max = 0;
  this.maxValue = 0;
};

TriangleNumbers.prototype.isTriangleNumber = function(num){
  if (num <= this.maxValue){
    return !!this.set[num];
  } else {
    while ( num > this.maxValue){
      this.maxValue = this.generateTriangleNumber(++this.max);
      this.set[this.maxValue] = true;
    }
    return this.isTriangleNumber(num);
  }
};

TriangleNumbers.prototype.generateTriangleNumber = function(n){
  return (n*n+n)/2;
};

var checkAllWords = function(arr){
  var result = 0; 
  var tn = new TriangleNumbers();
  for ( var i = 0; i < arr.length; i++ ){
    if ( tn.isTriangleNumber(wordValue(arr[i]))){
      result++;
    }
  }
  console.log('number of triangle numbers: ', result);
};



