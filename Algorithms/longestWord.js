// Input: "This is a demo String find the largest word from it"
// Output: "largest"

// Input:  "Hello guys this is geeksforgeeks where students learn programming"
// Output: "geeksforgeeks"

function longestWord(str){ 
  // Split the string using regex 
  str = str.match(/[a-zA-Z0-9]+/gi); 
  // Creating a empty string to store largest word 
  let largest = ""; 
       
  // Creating a for...loop to iterate over the array 
  for(let i = 0; i < str.length; i++){ 
      // If the i'th item is greater than largest string 
      // then overwrite the largest string with the i'th value 
      if(str[i].length > largest.length){ 
      largest = str[i] 
      } 
  } 
  return largest; 
  } 
   
  console.log(longestWord("Hello guys this is geeksforgeeks where"+ 
                      " students learn programming")) 


  let longestWord = (string) => {
    let stringg = string.split(" ");
    let longest = 0;
    let longest_word = null;
    for (let i = 0; i < stringg.length; i++) {
      if (longest < stringg[i].length) {
        longest = stringg[i].length;
        longest_word = stringg[i];
      }
    }
    return longest_word;
  };
    
  console.log(
    longestWord(
  "Hello guys this is geeksforgeeks where students learn programming"
    )
  );