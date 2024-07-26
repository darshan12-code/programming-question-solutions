/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Division Stringified                                                                *
*  Using the JavaScript language, have the function DivisionStringified(num1,num2)     *
*  take both parameters being passed, divide num1 by num2, and return the result as    *
*  a string with properly formatted commas. If an answer is only 3 digits long,        *
*  return the number with no commas (ie. 2 / 3 should output "1"). For example:        *
*  if num1 is 123456789 and num2 is 10000 the output should be "12,345".               *
*                                                                                      *
*  SOLUTION                                                                            *
*  The solution involves performing the division, rounding the result, and formatting  *
*  the number with commas.                                                             *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Divide num1 by num2 and round the result to the nearest integer.               *
*    2) Convert the rounded result to a string.                                        *
*    3) Format the string with commas using a regular expression.                      *
*    4) Return the formatted string.                                                   *
*                                                                                      *
***************************************************************************************/

function DivisionStringified(num1, num2) {
    // Step 1: Divide num1 by num2 and round the result to the nearest integer
    let result = Math.round(num1 / num2);
    
    // Step 2: Convert the rounded result to a string
    let resultStr = result.toString();
    
    // Step 3: Format the string with commas using a regular expression
    resultStr = resultStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    // Step 4: Return the formatted string
    return resultStr;
  }
  
  // Example usage:
  console.log(DivisionStringified(123456789, 10000)); // Output: "12,345"
  console.log(DivisionStringified(2, 3)); // Output: "1"
  console.log(DivisionStringified(1234, 5)); // Output: "247"
  