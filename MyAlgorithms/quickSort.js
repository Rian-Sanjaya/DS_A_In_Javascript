// 1. create a recursive function "quickSort" that accept a array parameter
// 2. get the middle element "pivot" by dividing array.length by 2 ( Math.floor(array.length/2) )
// 3. create new empty array for less half "less", and greater half "greater"
// 4. loop array, if element > pivot, push to greater, else push to less
// 5. return [ ... recursive function quickSort with less array, pivot, recursive function quickSort with greater

function quickSort(array) {
  
  if (array.length < 2) return array  // base case, if array length is 1 or 0, there is nothing to sort

  let pivotIndex = Math.floor(array.length / 2)
  let pivot = array[pivotIndex]
  let less = []
  let greater = []

  // for (let i in ...) getting the index of array as string
  for (let i in array) {
    // i is string, pivotIndex is number
    if (i != pivotIndex) {
      array[i] > pivot ? greater.push(array[i]) : less.push(array[i])
    }
  }

  return [
    ...quickSort(less),
    pivot,
    ...quickSort(greater)
  ]
}

console.log(quickSort([4, 3, 5, 1, 2, 6]))

// console.log(quickSort([9, 3, 7, 1, 2, 6, 5]))
