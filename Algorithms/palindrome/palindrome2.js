const palindrome = (str) => {
  return str === str.split('').reverse().join('')
}

const palind = (str) => {
  if (str.length < 3) return false

  if (palindrome(str)) return 'palindrome'

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    let newS = ''

    if (i === 0)
      newS = str.slice(i+1)
    else if (i === str.length - 1)
      newS = str.slice(0, str.length - 1)
    else
      newS = str.slice(0, i) + str.slice(i + 1)

    if (palindrome(newS)) return char
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    let newS = ''

    if (i === 0)
      newS = str.slice(i+1)
    else if (i === str.length - 1)
      newS = str.slice(0, str.length - 1)
    else
      newS = str.slice(0, i) + str.slice(i + 1)

    if (palindrome(newS)) return char

    for (let j = 0; j < newS.length; j++) {
      const char2 = newS[j]
      let newS2 = ''

      if (j === 0)
        newS2 = newS.slice(j+1)
      else if (j === newS.length - 1)
        newS2 = newS.slice(0, newS.length - 1)
      else
        newS2 = newS.slice(0, j) + newS.slice(j+1)

      if (palindrome(newS2)) return char + char2
    }
  }

  return 'not possible'
}

const str = 'akodomk'
console.log(palind(str))