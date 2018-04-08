function permCheck(A) {
	A.sort( function(a, b) {
		return a - b;
	} );

	for (var i=0; i<A.length; i++) {
		if (A[i] !== i+1) 
			return 0;
	}

	return 1;
}