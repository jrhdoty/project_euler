=begin
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
=end

def square_of_sums(arr)
	sum = 0
	for i in arr
		sum += i
	end
	return sum**2
end

def sum_of_squares(arr)
	sum = 0
	for i in arr
		sum += i**2
	end
	return sum
end

if __FILE__ == $0
	arr = 1..100
	puts square_of_sums(arr)
	puts sum_of_squares(arr)
	puts square_of_sums(arr)-sum_of_squares(arr)
end