'''
Project Euler

Below is the solution to problem 5

2520 is the smallest number that can be divided by each of the
 numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to 20?



'''


'''These functions were originally implemented to solve the general problem 
described in problem 1'''

def lcm(x, y):
    '''smallest common multiple of two numbers
    this implementation solves by reduction by the GCD'''
    return (x*y)/gcd(x, y)

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

def general_solution(nums):
    '''takes in a list of numbers and finds their smallest common multiple'''
    length = len(nums)
    if length < 2: 
        return 0
    
    multiple = lcm(nums[0], nums[1])
    count = 2
    while count < length:
        multiple = lcm(multiple, nums[count])
        count +=1
    return multiple

if __name__=="__main__":
    nums = [i+1 for i in range(20)]
    m = general_solution(nums)
    print m
