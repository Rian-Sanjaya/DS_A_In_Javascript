// A = [1, 3, 6, 4, 1, 2], the function should return 5.
// A = [1, 2, 3], the function should return 4.
// A = [−1, −3], the function should return 1.

function missingInteger(A) {
	A.sort(function(a, b) {
		return a - b;
	});

	var min = 1;

	for (var i in A) {
		if (A[i] > -1 && A[i] === min) {
			min++;
		}
	}

	return min;
}