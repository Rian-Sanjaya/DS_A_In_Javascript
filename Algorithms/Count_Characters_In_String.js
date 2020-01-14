const countChars = (str) => {
    let chars = {}
  
    for (let i = 0; i < str.length; i++) {
      if (str[i].trim() !== '')
        chars[str[i]] = (chars[str[i]] || 0) + 1
    }
  
    const arr = Object.keys(chars)
    for (let i = 0; i < arr.length; i++) {
      console.log(`${arr[i]}: ${chars[arr[i]]}`)
    } 
  }
  
  console.log(countChars('Aku seorang kapiten'))