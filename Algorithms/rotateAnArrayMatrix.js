function rotate(matrix, direction) {
  const result = [];
  let subLength = matrix[0].length;
  let subArr = [];
  
  if (direction === 'clockwise') {
      for (let h = 0; h < subLength; h++) {
          for (let i = matrix.length - 1; i >= 0; i--) {
            subArr.push(matrix[i][h]);
          }
          result.push(subArr);
          subArr = [];
      }
  } else {
      for (let h = subLength - 1; h >= 0; h--) {
          for (let i = 0; i < matrix.length; i++) {
              subArr.push(matrix[i][h]);
          }
          result.push(subArr);
          subArr = [];
      }
  }
  
  return result;
}

function rotate(matrix, direction) {
  var result = [],
      n = matrix.length,
      m = matrix[0].length,
      i, j, row;
  
  for (i = 0; i < m; ++i) {
    row = [];
    for (j = 0; j < n; ++j) {
      row.push(direction === 'clockwise' ? matrix[n - j - 1][i] : matrix[j][m - i - 1]);
    }
    result.push(row);
  }
  
  return result;
}

const matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]];
              
console.log(rotate(matrix, 'clockwise'))