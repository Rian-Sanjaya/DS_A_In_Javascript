function updateInv(arr1, arr2) {
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