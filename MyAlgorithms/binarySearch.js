const arrays = [2, 6, 1, 4, 5, 3, 12, 9]

function binarySearch(arr, num) {
  // sort the arr first from lowest to greatest
  arr.sort((a, b) => a - b)

  // We'll use three pointers.
    // One at the start of the array, one at the end and another at the middle.
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)

  // while we haven't found the number and the start pointer is smaller or equal to the end pointer
  while (arr[middle] !== num && start <= end) {
    // If the desired number is smaller than the middle, discard the bigger half of the array
    if (num < arr[middle]) {
      end = middle - 1
      // If the desired number is bigger than the middle, discard the smaller half of the array
    } else {
      start = middle + 1
    }

    // Recalculate the middle value
    middle = Math.floor((start + end) / 2)
  }

  // If we've exited the loop it means we've either found the value or the array can't be devided further
  return arr[middle] === num ? middle : -1
}

console.log(binarySearch(arrays, 12))