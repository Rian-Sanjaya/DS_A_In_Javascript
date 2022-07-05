// str = 'Aku seorang kapiten';

// result
// 'ukA gnaroes netipak'


// method #1
function reverseWords(str) {
  const reverseWordArr = str.split(' ').map(word => word.split('').reverse().join(''));
  return reverseWordArr.join(' ');
}

const str1 = 'Aku seorang kapiten';

console.log(reverseWords(str));



// method #2
function reverseBySeperator(str, seperator) {
  return str.split(seperator).reverse().join(seperator)
}

const str2 = 'Welcome to the jungle'

const reverseStr = reverseBySeperator(str2, '')

const reverseWord = reverseBySeperator(reverseStr, ' ')

console.log(reverseWord)