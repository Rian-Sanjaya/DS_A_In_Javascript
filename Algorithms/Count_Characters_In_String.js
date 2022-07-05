// str = 'aabsss'

// result 
// a: 2 
// b: 1
// s: 3

// method #1
const countStr = str => {
  return str.split('').reduce((prev, curr) => {
    prev[curr] ? prev[curr]++ : prev[curr] = 1;
    return obj;
  }, {});
};

const result = countStr('aabsss')

// iterate object #1
for (key in result) {
  console.log(`${key}: ${result[key]}`);
}

// iterate object #2
Object.keys(result).forEach(el => console.log(`${el}: ${result[el]}`));



// method #2
const countChars = (str) => {
  let chars = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i].trim() !== '')
      chars[str[i]] = (chars[str[i]] || 0) + 1;
  }

  // iterate object
  const arr = Object.keys(chars);
  for (let i = 0; i < arr.length; i++) {
    console.log(`${arr[i]}: ${chars[arr[i]]}`);
  } 
}

console.log(countChars('Aku seorang kapiten'));



// method 3
function countChrs(str) {
  // remove space in string
  const s = str.split(' ').join('');

  let obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
  }

  return obj;
}

const result1 = countChrs('Aku seorang kapiten');

for (char in result1) {
  console.log(`${char}: ${result1[char]}`)
}