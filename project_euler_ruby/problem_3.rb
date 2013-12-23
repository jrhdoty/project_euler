

def primefactors(n)
	d = 2
	factors = []
	while n > 1
		if n % d == 0
			factors.push(d)
			n = n/d
		end
		d = d + 1
	end
	return factors
end

if __FILE__ == $0

	f = primefactors(600851475143)
	puts f.last
end