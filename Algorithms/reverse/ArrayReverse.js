function reverse(arr) {
  let max = parseInt(arr.length / 2);
  let len = arr.length;
  let front = 0;
  let end = 0;

  for (let i = 0; i <= max; i++) {
    front = arr[i];
    end = arr[(len - i) - 1];
    arr[i] = end;
    arr[(len - i) - 1] = front;
  }

  return arr;
}

const arr = ['b', 'a', 'g', 'u', 's']
reverse(arr)
reverse( ['b', 'a', 'g', 'u', 's'] ) 
reverse( ['a', 1, true, NaN, {}] )


// Reverse array 	
// Reverse an array in place, without creating another array.
// Condition:
// Cannot create another array or object. 
// Can create simple variable with primitive value.
// Cannot use built-in function like Array.prototype.reverse();
// You will be evaluated based on for-loop and optimized algorithm

// EXAMPLE: 
// const arr = [‘b’, ‘a’, ‘g’, ‘u’, ‘s’];
// reverse(arr); // [‘s’,’u’,’g’,’a’,’b’]
// reverse( [‘b’, ‘a’, ‘g’, ‘u’, ‘s’] ) // [‘s’,’u’,’g’,’a’,’b’]
// reverse( [‘a’, 1, true, NaN, {}] ) // [{}, NaN, true, 1, ‘a’]

// Test Case:
// function reverse(arr){
//      //  let a = [];     This is not allowed
//      //  let c = {};    This is not allowed

//      let firstLetter = ‘something’; // this is allowed
//      // implementation HERE
// }