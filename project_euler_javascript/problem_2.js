//this is the iterative solution
var sum = 0;
var prev = 1;
var next = 2;
while(next < 4000000){
	if (next%2==0){sum+=next;}
	n = next + prev
	prev = next
	next = n
};

console.log(sum);

//this is the recursive solution
function fib(prev, next, max, sum){
	if (typeof sum === 'undefined') { sum = 0;}
	if (next > 4000000){return sum;} //base case
	if (next%2==0){sum+=next;}

	return fib(next, next+prev, max, sum);
};


console.log(fib(1, 1, 4000000));