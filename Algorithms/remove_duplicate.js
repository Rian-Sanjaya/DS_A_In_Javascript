const arr = ['a', 'b', 'a', 'c', 'd', 'c', 'd', 'c', 'e'];

// result: ['a', 'b', 'c', 'd', 'e']

// method #1
function removeDuplicate(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate(arr));


// method #2
const result = arr.reduce((prev, curr) => {
  if (prev.indexOf(curr) === -1) {
    prev.push(curr);
  }
  return prev;
}, []);

console.log(result);