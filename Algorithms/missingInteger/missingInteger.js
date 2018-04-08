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