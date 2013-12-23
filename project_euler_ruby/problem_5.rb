
def min_div(num_arr)
	max = 1
	for i in num_arr
		max = max * i
	end

	min_possible  = num_arr.max

	min = max
	for i in (num_arr.max...max).sort{ |a, b| b <=> a }
		if	!(num_arr.any? { |e| i % e != 0 })
			min = i
		end
	end
	puts min
end


if __FILE__ == $0

	min_div(1..20)
	puts 'end'

end