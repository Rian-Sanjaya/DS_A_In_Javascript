const addPairs = (arr, num) => {
  let nums = []

  for (let i = 0; i < arr.length; i++) {
    if (nums.includes(arr[i])) return true
    nums.push(num - arr[i])
  }

  return false
}

const arr = [3, 4, 6, 9, 1]
console.log(addPairs(arr, 8))
