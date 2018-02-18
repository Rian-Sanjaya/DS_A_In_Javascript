// FIND THE FIRST 20 NUMBERS OF THE FIBONACCI SEQUENCE
// 1, 2, 3, 5, 8, 13, 21, ...

function fibonacci(number) {
	var fibonacci = [];

	fibonacci[0] = 1;
	fibonacci[1] = 2;
	for (var i=2; i<number; i++) {
		fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
	}

	console.log(fibonacci);
} 

fibonacci(20);