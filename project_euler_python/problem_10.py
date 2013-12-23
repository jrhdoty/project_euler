'''
Project Euler

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
'''
import math


def sum_primes(max):
    '''returns sum of all primes <= max'''
    primes = [2]
    for i in [x+3 for x in range(max-3)]:
        root = math.sqrt(i)
        for prime in primes:
            if prime > root:
                primes.append(i)
                break
            if i%prime == 0:
                break
    return primes
            
            
if __name__=="__main__":
    max = 2000000-1
    primes = sum_primes(max)
    count = 0
    for prime in primes:
        count += prime
    print "The sum of all the primes below two million is: %d" % count
