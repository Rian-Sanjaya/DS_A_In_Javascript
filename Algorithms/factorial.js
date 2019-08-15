// num = 5
// 5 * 4 * 3 * 2 * 1

function factorial(num) {
    if (num === 0) return 1;

    for (let i = num - 1; i > 0; i--) {
        num *= i;
    }

    return num;
}