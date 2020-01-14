// FIND THE FIRST 20 NUMBERS OF THE FIBONACCI SEQUENCE
// 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(number) {
	var fibonacci = [];

	if (number > 0) 
		fibonacci[0] = 0;

	if (number > 1)
		fibonacci[1] = 1;

	for (var i=2; i<number; i++) {
		fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
	}

	return fibonacci;
} 

console.log(fibonacci(20))