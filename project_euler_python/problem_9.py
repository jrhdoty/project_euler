'''
Project Euler

A Pythagorean triplet is a set of three natural numbers, a<b<c, for which,

a^2 + b^2 = c2=^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
'''
import math

def is_p_triplet(a, b, c):
    if math.pow(a, 2) + math.pow(b, 2) == math.pow(c, 2):
        return True
    return False

def pythagorean_triplet(val):
    '''returns the pythagorean triplet such that a + b + c = val if it exists,
    else returns null'''
    count = 3
    c = val-count
    a = 1
    b = 2
    while(a < (val/3)):
        while(b < c):
            if is_p_triplet(a, b, c):
                return [a, b, c]
            b+=1
            c-=1
        count +=2
        a+=1
        b=a+1
        c = val-count
    

if __name__=="__main__":
    print pythagorean_triplet(1000)
  



            


