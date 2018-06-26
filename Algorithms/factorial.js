function factorial(num) {
    if (num === 0) return 1;

    for (var i=num-1; i>0; i--) {
        num *= i;
    }

    return num;
}