/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Number Addition                                                                     *
*  Using the JavaScript language, have the function NumberAddition(str) take the str   *
*  parameter, search for all the numbers in the string, add them together, then        *
*  return that final number. For example: if str is "88Hello 3World!" the output       *
*  should be 91. You will have to differentiate between single digit numbers and       *
*  multiple digit numbers like in the example above. So "55Hello" and "5Hello 5"       *
*  should return two different answers. Each string will contain at least one letter   *
*  or symbol.                                                                          *
*                                                                                      *
*  SOLUTION                                                                            *
*  To solve this problem, we need to find all the numbers in the given string, convert *
*  them to integers, add them together, and return the sum.                            *
*                                                                                      *
*  Steps for solution                                                                  *
*  1) Use a regular expression to match all sequences of digits in the string.         *
*  2) Convert the matched sequences to integers.                                       *
*  3) Sum all the integers.                                                            *
*  4) Return the sum.                                                                  *
*                                                                                      *
***************************************************************************************/

function NumberAddition(str) {
    // Step 1: Use a regular expression to find all sequences of digits
    const numbers = str.match(/\d+/g);
  
    // Step 2: Convert matched sequences to integers and sum them
    const sum = numbers ? numbers.reduce((acc, num) => acc + parseInt(num), 0) : 0;
  
    // Step 3: Return the sum
    return sum;
  }
  
  // Example usage:
  console.log(NumberAddition("88Hello 3World!")); // Output: 91
  console.log(NumberAddition("55Hello")); // Output: 55
  console.log(NumberAddition("5Hello 5")); // Output: 10
  console.log(NumberAddition("No numbers here!")); // Output: 0
  