=begin
	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

	a2 + b2 = c2
	For example, 32 + 42 = 9 + 16 = 25 = 52.

	There exists exactly one Pythagorean triplet for which a + b + c = 1000.
	Find the product abc.
=end

def brute_solution(val)
	a = 1
	b = 2
	c = val - 3

	while a < val/3
		while b < c
			if is_triple(a, b, c)
				return [a, b, c]
			end
			b +=1 
			c -=1
		end
		a += 1
		b = a+1
		c = val - (a+b)
	end
	return -1
end

def is_triple(a, b, c)
	if a**2 + b**2 == c**2
		return true
	end
	return false
end


if __FILE__ == $0
	puts "Test is_triple:"
	puts "3, 4, 5 is a triple: #{is_triple(3, 4, 5)}\n"
	puts "4, 5, 6 is a triple: #{is_triple(4, 5, 6)}\n"

	solution = brute_solution(1000)
	puts solution
	prod = 1
	solution.each do |i|
		prod *= i 
	end
	puts prod

end