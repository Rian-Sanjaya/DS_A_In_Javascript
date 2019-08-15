// 1. create a function that loop through the array "list" to find the smallest value
// 2. get the index of the smallest
// 3. push to a new array "newList"
// 4. remove the smallest from list
// 5. repeat 2 - 4 untill list.length < 1

function findSmallest(list) {
  let smallest = list[0]
  let indexOfSmallest = 0
  
  for (let i = 1; i < list.length; i++) {
    if (list[i] < smallest) { 
      smallest = list[i]
      indexOfSmallest = i
    }
  }

  return indexOfSmallest
}

function selectionSort(list) {
  let indexOfSmallest
  let newList = []

  while (list.length) {
    indexOfSmallest = findSmallest(list)
    newList.push(list[indexOfSmallest])
    list.splice(indexOfSmallest, 1)
  }

  return newList
}

const list = [2, 5, 3, 1, 4, 6]

console.log(selectionSort(list))