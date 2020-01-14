const palindrme = (str) => {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  if (str.toLowerCase() === result.toLowerCase())
    return true
  else 
    return false
}

console.log(palindrme('kodOk kodoK koDok'))

function palindrome(str) {
    // remove spaces and convert to lowercase
    // ^ means anything not in this list of characters
    str = str.replace(/[^a-z0-9]+/gi, "");
    str = str.toLowerCase();
    // str.split(' ').join('').toLowerCase();

    var reverseArray = str.split("");
    reverseArray.reverse();
    var reverseStr = reverseArray.join("");
    
    if (str === reverseStr) {
      return true;
    } else {
      return false;
    }
    
  }
  
  console.log(palindrome("eye"))