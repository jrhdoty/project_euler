def problem_4()
=begin
	Find the largest palindrome made from the product of two 3-digit numbers.
=end
	#need to create the product of every 3 digit number
	greatest = -1
	for i in 100..999
		for k in i..999
			prod = i*k
			if problem_4_helper(prod) and prod > greatest
				greatest = prod
			end
		end
	end
	return greatest
end

	
def problem_4_helper(num)
=begin
	checks to see if num is palindrome
=end
	s = num.to_s
	len = s.length
	if len == 1
		return true
	end
	first = 0
	last = len-1
	while first < last
		if s[first] == s[last]
			first += 1
			last -= 1
		else
			return false
		end
	end
	return true
end




if __FILE__ == $0
	puts problem_4  
end