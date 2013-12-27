=begin
	The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

	Find the sum of all the primes below two million.
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


def get_primes(max)
	primes = [2]
	(3...max).each do |i|
		if is_prime(i)
			primes << i
		end
	end
	return primes
end


def sum_items(arr)
	sum = 0
	arr.each {|i| sum += i}
	return sum
end


if __FILE__==$0
	puts sum_items(get_primes(2000000))
end


