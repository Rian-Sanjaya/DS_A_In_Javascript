// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘

// He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit 
// (horizontally or vertically, but not diagonally). 
// E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

// try out all possible (*) variations.

// * possible in sense of: the observed PIN itself and all variations considering the adjacent digits

function getPins(observed) {
  const arrObserved = observed.split('');
  const variations = {
    1: ["1", "2", "4"],
    2: ["1", "2", "3", "5"],
    3: ["2", "3", "6"],
    4: ["1", "4", "5", "7"],
    5: ["2", "4", "5", "6", "8"],
    6: ["3", "5", "6", "9"],
    7: ["4", "7", "8"],
    8: ["0", "5", "7", "8", "9"],
    9: ["6", "8", "9"],
    0: ["0", "8"],
  };
  const pins = [];

  for (const k in arrObserved) {
    pins.push(variations[arrObserved[k]]);
  }

  // console.log(pins);

  const posibles = pins.reduce((a, b) => {
    const result = [];
    for (const i in a) {
      for (const j in b) {
        result.push(a[i] + b[j]);
      }
    }
    // console.log('result: ', result);
    return result;
  })

  return posibles;
}

const pins = "1357";
console.log(getPins(pins));
