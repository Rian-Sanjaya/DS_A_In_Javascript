// For example, given array A such that:

//   A[0] = 9  A[1] = 3  A[2] = 9
//   A[3] = 3  A[4] = 9  A[5] = 7
//   A[6] = 9
// the function should return 7 (no pair)

function oddOccurencesInArray(A) {
	A.sort(function(a, b) {
		return a - b;
	});

	for (var i=0; i<A.length; i+=2) {
		if (A[i] !== A[i+1] || i === A.length-1)
			return A[i];
	}
}

function oddOccurencesInArray1(A) {
	var storage = {};

	for (var i=0; i<A.length; i++) {
		var el = A[i];
		if (el in storage) 
			storage[el] += 1;
		else
			storage[el] = 1;
	}

	for (var key in storage) {
		if (storage[key] % 2 === 1)
			return key;
	}
}

function solution(A) {
	let idx = [], match = false;
	for (i=0; i<A.length; i++) {
		if (idx.indexOf(i) === -1) {
			for (j=i+1; j<A.length; j++) {
				if (idx.indexOf(j) === -1) {
				    //console.log(A[i] + ' = ' + A[j]);
					if (A[i] === A[j]) {
						idx.push(i);
						idx.push(j);
						match = true;
						break;
					}
				}
			}
			//console.log(A[i] + ' = ' + match);
			if (match === false) {
			    return A[i];
			}
			match = false;
		}
	}
}