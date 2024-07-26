/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Dash Insert                                                                         *
*  Using the JavaScript language, have the function DashInsert(str) insert dashes      *
*  ('-') between each two odd numbers in str. For example: if str is 454793 the        *
*  output should be 4547-9-3. Don't count zero as an odd number.                       *
*                                                                                      *
*  SOLUTION                                                                            *
*  To solve this problem, we need to iterate through the string, check each pair of    *
*  digits, and insert a dash if both are odd. We can use a loop to go through the      *
*  string and concatenate the result with dashes where necessary.                      *
*                                                                                      *
*  Steps for solution                                                                  *
*  1) Initialize an empty result string.                                               *
*  2) Loop through each character in the input string.                                 *
*  3) For each character, check if it and the next character are both odd.             *
*  4) If they are, add the character and a dash to the result string.                  *
*  5) If not, just add the character to the result string.                             *
*  6) After the loop, return the result string.                                        *
*                                                                                      *
***************************************************************************************/

function DashInsert(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i];
      if (i < str.length - 1 && isOdd(str[i]) && isOdd(str[i + 1])) {
        result += '-';
      }
    }
    return result;
  }
  
  function isOdd(char) {
    const num = parseInt(char);
    return num % 2 !== 0;
  }
  
  // Example usage:
  console.log(DashInsert("99946"));  // Output: 9-9-946
  console.log(DashInsert("56730"));  // Output: 567-30
  