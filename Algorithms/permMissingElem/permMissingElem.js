// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

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