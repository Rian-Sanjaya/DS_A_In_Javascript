// function cache(a,b,obj) {
//   let name = `${a}${b}`

//   if (!obj.hasOwnProperty(name))
//     obj[name] = add(a,b)

//   return obj[name]
// }

// const add = (a,b) => a + b;
// const cachedAdd = (a,b) => cache(a,b,cacheObj);

// let cacheObj = {}

// cachedAdd(1,4)


// Cache function
// Create a function that implement cache to reduce execution time for a frequently used functions. for example: if function 'func' has not execute input 'inp1' before, then evaluate 'inp1' and give its evaluated value / return. else, if func has execute 'inp2' then return immediately (no need to re-evaluate 'inp2')

// EXAMPLE:

// const add = (a,b) => a + b;
// const cachedAdd = cache(add)

// Test Case:
// cachedAdd(1,4) // => run add(1,4) and return 5;
// cachedAdd(2,4) // => run add(2,4) and return 6;
// cachedAdd(1,4) // => return 5 without run add(1,4);

// function cache(){
//    // implement cache here
// }

function cache(callback) {
  let cacheObj = {}

  return (num1, num2) => {
    let key = `${num1}${num2}`

    if (!cacheObj[key]) {
      // console.log('no key')
      cacheObj[key] = callback(num1, num2)
    }

    // console.log(cacheObj)

    return cacheObj[key]
  }
}

const add = (a, b) => a + b
const cachedAdd = cache(add)

console.log(cachedAdd(1, 4))
console.log(cachedAdd(2, 5))
console.log(cachedAdd(1, 4))