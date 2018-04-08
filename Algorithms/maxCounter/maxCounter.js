function maxCounter(N, A) {
	var counter = new Array(N).fill(0);

	for (var i=0; i<A.length; i++) {
		if (A[i] <= N) {
			counter[A[i]-1]++;
		} else if (A[i] === N+1) {
			var max = counter.sort( function(a, b) { return b - a; } )[0];
			for (var j=0; j<counter.length; j++) {
				counter[j] = max;
			}
		}
	}

	return counter;
}