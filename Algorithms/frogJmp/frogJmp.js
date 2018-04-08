function frogJmp(X, Y, D) {
	var jumps = (Y - X) / D;
	if ( (Y - X) % D > 0 )
		return Math.trunc(jumps + 1);
	return jumps;
}