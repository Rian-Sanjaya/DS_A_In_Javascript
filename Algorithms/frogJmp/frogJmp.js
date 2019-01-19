// Write a function:

// int solution(int X, int Y, int D);

// that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

// For example, given:

//   X = 10
//   Y = 85
//   D = 30
// the function should return 3, because the frog will be positioned as follows:

// after the first jump, at position 10 + 30 = 40
// after the second jump, at position 10 + 30 + 30 = 70
// after the third jump, at position 10 + 30 + 30 + 30 = 100

function frogJmp(X, Y, D) {
	var jumps = (Y - X) / D;
	if ( (Y - X) % D > 0 )
		return Math.trunc(jumps + 1);
	return jumps;
}