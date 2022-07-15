// Compare and update the inventory stored in a 2D array against a second 2D array. 
// Update the current existing inventory item quantities (in arr1). 
// If an item cannot be found, add the new item and quantity into the inventory array (arr1). 
// The returned inventory array should be in alphabetical order by item.

// Example inventory lists
// result:
// [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

function updateInventory(arr1, arr2) {
    let flag = 0;

    arr2.forEach( item => {
        flag = 0;
  
        arr1.forEach( list => {
          if (item[1] === list[1]) {
            list[0] += item[0];
            flag = 1;
          }
        })
    
        if (flag === 0) {
            arr1.push(item);
        }
    });
  
    return arr1.sort( (a, b) => {
        if (a[1] > b[1]) return 1;
        
        if (a[1] < b[1]) return -1;

        return 0;
    });
}

