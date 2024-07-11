function longestWord(str) {
  const arrWords = str.split(' ')
  let longest = ''

  for (let i = 0; i < arrWords.length; i++) {
    if (arrWords[i].length > longest.length) {
      longest = arrWords[i]
    }
  }

  return longest
}

const str = 'This is a demo String find the largest word from it'
console.log(longestWord(str))