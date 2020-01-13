// Write a function that takes in an array and a number, and returns true if any pairs add up to the number.

// 1. cari apakah setiap element ada di obj key
// 2. kalau ada return true
// 3. kalau tidak ada tambahkan element sebagai obj key (valuenya true)


const addPairs = (arr, num) => {
  let obj = {}

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) return true
    obj[num - arr[i]] = true
  }

  return false
}

const arr = [2, 4, 9, 4, 8]

console.log(addPairs(arr, 8))
