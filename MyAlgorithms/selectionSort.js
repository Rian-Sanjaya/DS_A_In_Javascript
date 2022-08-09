function selectionSort(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    if (lowest !== i) {
      const temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
}

const list = [2, 5, 3, 1, 4, 6]

console.log(selectionSort(list))