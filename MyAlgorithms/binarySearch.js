// 1. sort the list first from lowest to greatest
// 2. initialize first low and high index
// 3. loop while low <= hight
// 4. get the middle index "mid" (Math.floor( (low + high) / 2 ))
// 4. store the middle element to "guess" variable
// 5. compare guess with item search, if equal it is found, if guess > item then high = mid - 1, if guess < item then low = mid + 1

const items = [2, 6, 1, 4, 5, 3, 12, 9]

function binarySearch(list, item) {
  list.sort((a, b) => a - b)

  let low = 0
  let high = list.length
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if (guess === item) return true

    if (guess > item) high = mid - 1
    else low = mid + 1
  }

  return null
}

console.log(binarySearch(items, 12))