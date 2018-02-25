function greatestCommonDivisor1(num1, num2) {
	let divisor = 1,
		greatesDivisor;

	while (num1 >= divisor && num2 >= divisor) {
		if (num1 % divisor === 0 && num2 % divisor === 0) {
			greatestDivisor = divisor;
		}

		divisor++;
	}

	return greatestDivisor;
}

greatestCommonDivisor1(24, 54);