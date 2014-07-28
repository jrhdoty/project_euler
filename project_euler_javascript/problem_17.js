/*
If the numbers 1 to 5 are written out in words: 
one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, 
how many letters would be used?


NOTE: Do not count spaces or hyphens. 
For example, 342 (three hundred and forty-two) contains 23 letters and 
115 (one hundred and fifteen) contains 20 letters. 
The use of "and" when writing out numbers is in compliance with British usage.
*/

var ones = {
  1: 'one',
  2: 'two', 
  3: 'three', 
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine'
};

var teens = {
  10: 'ten',
  11: 'eleven',
  12: 'twelve', 
  13: 'thirteen',
  14: 'fourteen', 
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen', 
  18: 'eighteen',
  19: 'nineteen'
};

var tens = {
  2: 'twenty',
  3: 'thirty', 
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy', 
  8: 'eighty',
  9: 'ninety'
};

var numberToWord = function(num){
  var str = num.toString();
  if ( str.length === 1 ){
    return ones[num];
  }
  if ( str.length === 2 ){
    if ( num < 20){
      return teens[num];
    }
    var tensPlace = Math.floor(num/10);
    return tens[tensPlace] + '-' + numberToWord(num-10*tensPlace);
  }
  if (str.length === 3){
    return  ones[str[0]] + ' hundred and ' + numberToWord(num-100*str[0]);
  }
  if (num === 1000){return 'one thousand';}
  throw 'number input is too large';
};

var numberToWordNoSpace = function(num){
  var str = num.toString();
  if ( num === 0 ){
    return '';
  }

  if ( str.length === 1 ){
    return ones[num];
  }
  if ( str.length === 2 ){
    if ( num < 20){
      return teens[num];
    }
    var tensPlace = Math.floor(num/10);
    return tens[tensPlace] + numberToWordNoSpace(num-10*tensPlace);
  }
  if (str.length === 3){
    var result = ones[str[0]] +'hundred';
    var remainder = num - 100*str[0];
    if (remainder > 0 ){result+='and';}
    return  result + numberToWordNoSpace(remainder);
  }
  if (num === 1000){return 'onethousand';}
  throw 'number input is too large';
};

var count = 0;
var result;
for ( var i = 1; i <= 1000; i++ ){
  result = numberToWordNoSpace(i);
  console.log(result);
  count += result.length;
}

console.log('count: ', count);
