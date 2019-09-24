function primeFactorsTo(n) {
  
  let store = [], prime = []
  
  for (let i = 2; i <= n; i++) {

    if (!store[i]) {
      prime.push(i)

      for (let j = i << 1; j <= n; j += i) {
        store[j] = true
      }
    }

  }

  return prime
}

console.log(primeFactorsTo(51))