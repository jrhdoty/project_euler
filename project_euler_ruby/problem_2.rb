def problem_2(max)
=begin
	find the sum of even valued terms <= max of the fib sequence
=end
	arr = [1]
	current = 1
	while current <= max
		n = current + arr.last
		arr << current
		current = n
	end
	return problem_2_helper arr
end
	
def problem_2_helper(arr)
=begin
	sum the even valued terms of an array
=end
	sum = 0
	for i in arr
		if i % 2 == 0
			sum += i
		end
	end
	return sum
end


if __FILE__ == $0
	puts problem_2 4000000
end