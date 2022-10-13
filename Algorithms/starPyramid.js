// 1 
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5 

function starPyramid1(n) {
  let output = '';
  
  for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
          output += j + ' ';
      }
      console.log(output);
      output = '';
  }
}

starPyramid1(5)


//     *    
//    ***   
//   *****  
//  ******* 
// *********

function starPyramid2(n) {
  let space = '';
  let star = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      space += ' ';
    }

    for (let k = 1; k <= (2 * i) - 1; k++) {
      star += '*';
    }

    console.log(space + star + space);
    space = '';
    star = '';
  }
}

starPyramid2(5);