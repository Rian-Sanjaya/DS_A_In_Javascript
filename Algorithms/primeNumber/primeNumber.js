function isPrime(n) {
    if (n < 2) return false;
    for (var i=2; i<n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function primeList(n) {
    var result = [];
    for (var i=2; i<=n; i++) {
      if (isPrime(i))
        result.push(i);
    } 
    return result;
}
