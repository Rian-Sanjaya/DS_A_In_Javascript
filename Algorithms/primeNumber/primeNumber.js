function isPrime(n) {
    if (n < 2) return false;
    for (let i=2; i<n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function primeList(n) {
    var result = [];
    for (let i=2; i<=n; i++) {
      if (isPrime(i))
        result.push(i);
    } 
    return result;
}

console.log(primeList(15))