'''
Project Euler

Below is the solution to problem #2

By considering the terms in the Fibonacci sequence whose
values do not exceed four million, find the sum of the even-valued
terms

'''

'''
Notes:

1, 1, 2, 3, 5, 8, 13, 21, 34...

odd, odd, even, odd, odd, even....

'''

def fib_seq_iterative(max):
    ''' iterative fib sequence function '''
    seq = [1, 1]
    while seq[-1] <= max:
        seq.append(seq[-2]+seq[-1])
    if seq[-1] < max:
        return seq
    else:
        return seq[:-1]

def fib_seq_rec_wrapper(max):
    ''' wrapper to the recursive fib seq function '''
    seq = [1, 1]
    seq.extend(fib_seq_rec(1, 1, max))
    return seq

def fib_seq_rec(prev1, prev2, max):
    ''' recursive fib sequence function '''
    next = prev1+prev2
    if next > max:
        return []
    next = [next]
    next.extend(fib_seq_rec(prev2, next[0], max))
    return next

def sum_evens(seq):
    count = 0
    for i in seq:
        if i% 2 == 0:
            count += i
    return count

if __name__=="__main__":
    print "This module contains functions to solve Project Euler Problem 2"



    


