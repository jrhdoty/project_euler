var expect = require('chai').expect;
var problem43 = require('./problem_43');

describe("Pandigital numbers with special property", function(){
  'use strict'
  var digits;

  beforeEach(function(){
    digits = 10;
  });

  describe("Prime checker", function(){
    it("should correctly identify a prime number", function(){
      expect(problem43.isPrime(11)).to.equal(true);
    });

    it("should correctly identify a composite number", function(){
      expect(problem43.isPrime(115)).to.equal(false);
    });
  });

  describe("N Primes", function(){
    it("Should correctly return an array of the first 5 primes", function(){
      var result = problem43.getNPrimes(5);
      var expectedResult = [2, 3, 5, 7, 11];
      expect(result.length).to.equal(expectedResult.length);

      for ( var i  = 0; i < expectedResult.length; i++){
        expect(result[i]).to.equal(expectedResult[i]);
      }
    });
  });

  describe ("Pandigitals", function(){
    it("should correctly return all pandigital permutations of an n digit number", function(){
      var numDigits = 4;
      var expectedLength = numDigits;
      for ( var i = numDigits; i > 1; i-- ){
        expectedLength*=i;
      }
      var result = problem43.pandigitals(numDigits);
      expect(result.length).to.equal(expectedLength);
    });
  });

  describe ( "Special property", function(){
    it("it should correctly tell that a number has special property", function(){
      expect(problem43.specialProperty('1406357289')).to.equal(true);
    });

    it("it should correctly tell that a number does not have special property", function(){
      expect(problem43.specialProperty('1116357289')).to.equal(false);
    });
  });

});