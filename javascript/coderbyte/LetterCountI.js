/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Letter Count I                                                                      *
*  Have the function LetterCountI(str) take the str parameter being passed and return  *
*  the first word with the greatest number of repeated letters. For example:           *
*  "Today, is the greatest day ever!" should return greatest because it has 2 e's      *
*  (and 2 t's) and it comes before ever which also has 2 e's. If there are no words    *
*  with repeating letters return <b>-1</b>. Words will be separated by spaces.         *
*                                                                                      *
*  Examples                                                                            *
*  Input 1: Hello apple pie                                                            *
*  Output 1: Hello                                                                     *
*                                                                                      *
*  Input 2: No words                                                                   *
*  Output 2: -1                                                                        *
*                                                                                      *
*  SOLUTION                                                                            *
*  The solution involves splitting the input string into words and analyzing each word *
*  for repeated letters.                                                               *
*  Steps for solution                                                                  *
*    1) Split the input string into an array of words.                                 *
*    2) Define a helper function to count the maximum number of any repeated letter in *
*       a given word.                                                                  *
*    3) Loop through each word in the array and use the helper function to find the    *
*       word with the highest count of repeated letters.                               *
*    4) Keep track of the word with the highest count and return it if found.          *
*    5) If no word with repeating letters is found, return -1.                         *
*                                                                                      *
***************************************************************************************/
function LetterCountI(str) {
    // Step 1: Split the input string into an array of words
    const words = str.split(' ');
  
    // Step 2: Helper function to count the maximum number of any repeated letter in a word
    function maxRepeatedLetters(word) {
      const letterCounts = {};
      let maxCount = 0;
  
      for (const letter of word) {
        letterCounts[letter] = (letterCounts[letter] || 0) + 1;
        if (letterCounts[letter] > maxCount) {
          maxCount = letterCounts[letter];
        }
      }
  
      return maxCount > 1 ? maxCount : 0;
    }
  
    // Step 3: Loop through each word in the array to find the one with the highest count of repeated letters
    let maxRepeats = 0;
    let resultWord = -1;
  
    for (const word of words) {
      const repeats = maxRepeatedLetters(word);
      if (repeats > maxRepeats) {
        maxRepeats = repeats;
        resultWord = word;
      }
    }
  
    // Step 4: Return the result word or -1 if no repeating letters are found
    return resultWord;
  }
  
  // Example usage:
  console.log(LetterCountI("Today, is the greatest day ever!")); // Output: greatest
  console.log(LetterCountI("Hello apple pie")); // Output: Hello
  console.log(LetterCountI("No words")); // Output: -1
  