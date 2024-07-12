// num = 5
// 5 * 4 * 3 * 2 * 1

function factorial(num) {
    if (num <= 0) return 1;

    return num * factorial(num - 1);
}

function factorial2(num) {
    if (num === 0) return 1;

    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }

    return num;
}

function fact(num) {
    if (num === 0) return 1

    let result = 1

    for (let i = 2; i <= num; i++) {
        result *= i
    }

    return result
}

console.log(factorial(7))
console.log(fact(7))
