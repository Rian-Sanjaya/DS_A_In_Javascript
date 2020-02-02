const prime = n => {
	let result = []

	if (n >= 2) {
		if (n === 2) result.push(n)

		for (let i = 2; i <= n; i++) {
			let isPrime = true

			for (j = 2; j < i; j++) {
				if (i % j === 0) {
					isPrime = false
					break
				}
			}

			if (isPrime) result.push(i)
		}
	}

	return result
}

// console.log(prime(1))
// console.log(prime(2))
console.log(prime(10))