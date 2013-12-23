'''
Below is the generalized solution to type of problem 
instantiated in PE problem #1

Add all the natural numbers below 
one thousand that are multiples of 3 or 5.

Given two numbers, find the sum of all numbers less than
a given maximum that are a multiple of one or the other (inclusive)

'''

'''
NOTES:

Add all the multiples of 3 < 1000
Add all the multiples of 5 < 1000
Subtract all the multiples of 15 < 1000

(How many multiples of 3 < 1000) * (Avg. value of multiples of 3 < 1000)

'''

def sum_mult(x, max):
    ''' returns the sum of the multiples of x that are < max '''
    max = max-1
    num_x_mult = (max)/x
    print num_x_mult
    print((x+num_x_mult*x)/2)
    sum_x = int((num_x_mult)*((x + num_x_mult*x)/2.0))
    return sum_x

def test_sum_mult():
    x =   raw_input("Number whose multiples will be summed: ")
    x =   int(x)
    max = raw_input("Exclusive Max Value: ")
    max = int(max)
    return sum_mult(x, max)

def lcm(x, y):
    '''smallest common multiple of two numbers
    this implementation solves by reduction by the GCD'''
    return ((x/gcd(x, y))*y)

def gcd(x, y):
    '''this is solved using euclid's method'''
    z = max(x, y)
    y = min(x, y)
    x = z
    x = x%y
    if x == 0:
        return y
    else:
        return gcd(y, x%y)


def general_solution(x, y, max):
    ''' Solution to PE problem 1
    Given two numbers, find the sum of all numbers less than
    a given maximum that are a multiple of one or the other (inclusive)
    '''
    sum_x = sum_mult(x, max)
    sum_y = sum_mult(y, max)
    sum_lcm = sum_mult(lcm(x, y), max)
    return ((sum_x + sum_y) - sum_lcm)
    
    
if __name__ == "__main__":
    print '''This module contains the solution to PE problem 1'''


    




