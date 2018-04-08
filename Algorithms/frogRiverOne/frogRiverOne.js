function frogRiverOne(X, A) {
	var counter = {},
		post = 0;
	
	for (var i=0; i<A.length; i++) {
		if (!counter[A[i]]) {
			counter[A[i]] = A[i];
			post++;
			if (post === X)
				return i;
		}
	}

	return -1;
}