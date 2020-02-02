// SORT ALPHABETIC ASCENDING

let animals = ['dog', 'cat', 'tiger', 'lion']

// animals.sort()

animals.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
// COMPARE A AND B, SWAP ONLY IF IT IS RETURN TRUE

console.log(animals)

// SORT ALPHABETIC DESCENDING

let superheroes = ['batman', 'avenger', 'spiderman', 'hulk']

superheroes.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)

console.log(superheroes)

// SORT NUMBER ASCENDING

let num1 = [3, 2, 5, 1, 6]

// num1.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)

// BASED ON LOGIC SWAP ONLY IF IT RETURN TRUE
// WE CAN SORT ARRAY NUMBER WITH SHORTEN EXPRESSION

num1.sort((a, b) => a - b)
// A = 3, B = 2 
// 3 - 2 = 1
// 1 IS TRUE SO SWAP THE NUMBER
// A = 3, B = 5
// 3 - 5 = -1
// -1 IS FALSE, SO DO NOT SWAP (SWAP ONLY IF IT RETURN TRUE)

console.log(num1)

// SORT NUMBER DESCENDING

let num2 = [3, 2, 5, 1, 6]

// num2.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)

num2.sort((a, b) => b - a)
// A = 3, B = 2
// 2 - 3 = -1 (FALSE, DO NOT SWAP)
// A = 3, B = 5 
// 5 - 3 = 2 (TRUE, SWAP) 

console.log(num2)
