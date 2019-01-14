// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

function rot13(str) { // LBH QVQ VG!
  var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var strRst = "";
  var pos;
  
  for (var i = 0; i < str.length; i++) {
    pos = alpha.indexOf(str[i].toUpperCase());
    if ( pos === -1) {
      strRst += str[i];
    } else {
      pos = pos - 13;
      if (pos < 0) {
        pos = 26 - (pos * -1); // (length of alpha+1) - pos
      }
      
      strRst += alpha.charAt(pos);
    }
  }
  
  return strRst;
}

// Change the inputs below to test
rot13("SERR CVMMN!");  // FREE PIZZA!
rot13("SERR PBQR PNZC"); // should decode to FREE CODE CAMP
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."); // should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.