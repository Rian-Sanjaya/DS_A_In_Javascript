// FIND FIBONACCI SEQUENCE UP TO MAX NUMBER

function fibonacciMax(max) {
	let fibonacci = [],
		sum, i = 2;

	if (max > 0) {
		fibonacci[0] = 0;

		if (max > 1) {
			fibonacci[1] = 1;

			while (1) {
				sum = fibonacci[i-2] + fibonacci[i-1];
				if (sum <= max) {
					fibonacci.push(sum);
				} else {
					break;
				}
				i++;
			}

		}
	}

	return fibonacci;
}

fibonacciMax(20);