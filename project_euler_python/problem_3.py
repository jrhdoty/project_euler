'''
Project Euler

Below is the solution to problem #3

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?

'''

def initial_approach(num):
    '''this is a quick and dirty way to solve the general problem of
    finding the largest prime factor of a composite number'''
    div = 2
    while div < num:
        if num % div == 0:
            num = num/div
        else:
            div += 1
    return num


if __name__=="__main__":
    i = initial_approach(600851475143)
    print i



