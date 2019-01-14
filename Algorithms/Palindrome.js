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
  
  palindrome("eye");