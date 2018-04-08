function permMissingElem(A) {
	A.sort( function(a, b) {
		return a - b;
	} );
	
	for (var i=0; i<A.length; i++) {
		if (A[i] !== i+1)
			return i+1;
	}
	return A.length+1;
}