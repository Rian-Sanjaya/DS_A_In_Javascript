
const gcd = (a, b) => {
    if (!b) return a;
    return gcd(b, a % b);
}

// use while loop
// function gcd(a, b) {
//     var R;
//     while ((a % b) > 0)  {
//         R = a % b;
//         a = b;
//         b = R;
//     }
//     return b;
// }