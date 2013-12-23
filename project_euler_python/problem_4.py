'''
Project Euler

Below is the solution to problem #4

A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.


'''
import math

def is_palindrome(string):
    length = len(string)/2
    count = 0
    while count <= length:
        if string[count] != string[-1 - count]:
            return False
        count += 1
    return True

def exhaustive(num_digits):
    min = int(math.pow(10, num_digits-1))
    max = int(math.pow(10, num_digits)-1)
    x = min
    y = min
    palindromes = []
    while x < max:
        while y < max:
            val = x * y
            if is_palindrome(str(val)):
                palindromes.append(val)
            y += 1
        x +=1
        y = x
    return palindromes
    


if __name__=="__main__":
    p = exhaustive(3)
    print max(p)
    

