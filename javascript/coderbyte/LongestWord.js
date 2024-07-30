/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Longest Word                                                                        *
*  Using the JavaScript language, have the function LongestWord(sen) take the sen      *
*  parameter being passed and return the largest word in the string. If there are     *
*  two or more words that are the same length, return the first word from the string  *
*  with that length. Ignore punctuation and assume sen will not be empty.              *
*                                                                                      *
*  SOLUTION                                                                            *
*    1) Remove anything in string that is not a-z, A-Z or blank                        *
*    2) Convert String to Array                                                        *
*    3) Sort Array in descending order based on length of word                         *
*    4) First entry in sorted array is solution                                        *
*                                                                                      *
***************************************************************************************/

function LongestWord(sen) {
    // Remove punctuation and split the string into words
    var arr = sen.replace(/[^a-zA-Z ]/g, "").split(" ");
    
    // Sort the array in descending order by length of words
    arr.sort(function(a, b) {
      return b.length - a.length;
    });
    
    // Return the first word in the sorted array
    return arr[0];
  }
  
  // Example usage:
  console.log(LongestWord("Hello there! How are you doing today?")); // Output: "Hello"
  console.log(LongestWord("I love programming!")); // Output: "programming"
  