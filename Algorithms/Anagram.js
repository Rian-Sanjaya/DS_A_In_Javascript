function isAnagram(first, second) {
  // for case insensitive  change to lower case
  let a = first.toLowerCase();
  let b = second.toLowerCase();

  a = a.split('').sort().join('');
  b = b.split('').sort().join('');

  return a === b;
}

const firstWord = 'Mary';
const secondWord = 'Army';

console.log(isAnagram(firstWord, secondWord));