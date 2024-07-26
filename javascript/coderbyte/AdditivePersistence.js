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
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize an empty result string.                                             *
*    2) Loop through the string, checking pairs of characters for consecutive odd      *
*       numbers.                                                                       *
*    3) Append characters and dashes as needed to the result string.                   *
*    4) Return the result string.                                                      *
*                                                                                      *
***************************************************************************************/

function DashInsert(str) {
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
      result += str[i];
      if (i < str.length - 1 && parseInt(str[i]) % 2 !== 0 && parseInt(str[i + 1]) % 2 !== 0) {
        result += '-';
      }
    }
    
    return result;
  }
  
  // Example usage:
  console.log(DashInsert("454793")); // Output: "4547-9-3"
  console.log(DashInsert("99946"));  // Output: "9-9-946"
  console.log(DashInsert("56730"));  // Output: "567-30"
  