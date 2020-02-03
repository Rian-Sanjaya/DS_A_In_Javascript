const addOne = () => {
	let num1 = 1

	return num2 => num1 + num2
}

const addToOne = addOne()

console.log(addToOne(3))
console.log(addToOne(5))