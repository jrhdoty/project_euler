=begin
	By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
	What is the 10001st prime number?
=end

def is_prime(n)
	root = Math.sqrt(n).floor
	
	(2..root).each do |i|
		if n % i == 0
			return false
		end
	end
	return true
end

def nth_prime(n)
	count = 0 
	num = 2
	lastPrime = -1

	while count < n
		if is_prime(num)
			lastPrime = num
			count +=1
		end
		num += 1
	end
	return lastPrime
end



if __FILE__ == $0
	puts "Testing is_prime function:\n"
	(2..15).each do |i|
		puts "#{i} is prime: #{is_prime(i)}"
	end

	puts "The 10001st prime number is #{nth_prime(10001)}"
end
