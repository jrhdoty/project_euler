'''
Project Euler

What is the 10 001st prime number?
'''

def is_prime(num, primes):
    for item in primes:
        if num%item == 0:
            return False
    return True

def list_primes(num_primes):
    primes = [2]
    num = 3
    while len(primes) < num_primes:
        if is_prime(num, primes):
            primes.append(num)
        num += 1
    return primes

if __name__=="__main__":
    
    primes = list_primes(10001)
    print primes[-1]
