/****************************************************************
 *             CODERBYTE QUESTIONS MARKS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function QuestionsMarks(str) which takes the str    *
 * string parameter, which will contain single digit numbers,   *
 * letters, & question marks, & check if there are exactly 3    *
 * question marks between every pair of two numbers that add up *
 * to 10. If so, then your program should return the string     *
 * true, otherwise it should return the string false. If there  *
 * aren't any two numbers that add up to 10 in the string, then *
 * your program should return false as well.                    *
 *                                                              *
 * Test Cases                                                   *
 * For example: if str is "arrb6???4xxbl5???eee5" then your     *
 * program should return true because there are exactly 3       *
 * question marks between 6 and 4, and 3 question marks between *
 * 5 and 5 at the end of the string.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: aa6?9                                               *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: acc?7??sss?3rr1??????5                              *
 * Output 2: true                                               *
 *                                                              *
 * Input 3: 5??aaaaaaaaaaaaaaaaaaa?5?5                          *
 * Output 3: false                                              *
 *                                                              *
 * Input 4: 9???1???9???1???9                                   *
 * Output 4: true                                               *
 *                                                              *
 * SOLUTION                                                     *
 * Steps for solution                                           *
 * 1) Initialize variables to keep track of previous number     *
 *    and the count of question marks.                          *
 * 2) Iterate through each character in the string.             *
 * 3) If the character is a digit, check if it and the previous *
 *    number add up to 10. If they do, check the question mark  *
 *    count. If valid, set a flag to true. If not, return false.*
 * 4) If the character is a question mark, increment the count. *
 * 5) If the character is neither a digit nor a question mark,  *
 *    reset the count of question marks.                        *
 * 6) After iteration, return true if valid pairs were found,   *
 *    otherwise return false.                                   *
 ***************************************************************/

function QuestionsMarks(str) {
    let previousNumber = null;
    let questionMarkCount = 0;
    let validPairFound = false;
  
    for (let char of str) {
      if (/\d/.test(char)) { // Check if character is a digit
        let currentNumber = parseInt(char);
  
        if (previousNumber !== null && previousNumber + currentNumber === 10) {
          if (questionMarkCount === 3) {
            validPairFound = true;
          } else {
            return false;
          }
        }
  
        previousNumber = currentNumber;
        questionMarkCount = 0; // Reset question mark count
      } else if (char === '?') {
        questionMarkCount++;
      }
    }
  
    return validPairFound;
  }
  
  // Example usage:
  console.log(QuestionsMarks("arrb6???4xxbl5???eee5")); // Output: true
  console.log(QuestionsMarks("aa6?9")); // Output: false
  console.log(QuestionsMarks("acc?7??sss?3rr1??????5")); // Output: true
  console.log(QuestionsMarks("5??aaaaaaaaaaaaaaaaaaa?5?5")); // Output: false
  console.log(QuestionsMarks("9???1???9???1???9")); // Output: true
  