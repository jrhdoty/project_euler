'''
Project Euler

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.

'''
import math


def simple_sum_squares(num):
    x = [math.pow((i+1), 2) for i in range(num)]
    sum = 0
    for item in x:
        sum += item
    return sum

def simple_square_sums(num):
    sum = ((num+1)*num)/2
    return math.pow(sum, 2)



if __name__=="__main__":

    y = [i+1 for i in range(10)]

    list_sums = []
    for item in y:
        list_sums.append(simple_sum_squares(item))
    print list_sums

    print simple_square_sums(3)

    print "The answer to problem 6 is: %f" % (simple_square_sums(100)-simple_sum_squares(100))



