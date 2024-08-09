/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Powers of Two                                                                       *
*  Using the JavaScript language, have the function PowersofTwo(num) take the num      *
*  parameter being passed which will be an integer and return the string true if       *
*  it's a power of two. If it's not return the string false. For example if the        *
*  input is 16 then your program should return the string true but if the input is     *
*  22 then the output should be the string false                                       *
*                                                                                      *
*  SOLUTION                                                                            *
*  To determine if a number is a power of two, we can keep dividing the number by      *
*  two until it becomes 1. If at any step, the number is not divisible by two, then    *
*  it is not a power of two.                                                           *
*                                                                                      *
*  Steps for solution                                                                  *
*  1) Check if the number is less than 1, if so, return false.                         *
*  2) While the number is greater than 1, divide the number by 2.                      *
*  3) If at any step, the number is not divisible by 2, return false.                  *
*  4) If the number becomes 1, return true.                                            *
*                                                                                      *
***************************************************************************************/

function PowersofTwo(num) { 
    // Step 1: Check if the number is less than 1
    if (num < 1) {
      return "false";
    }
    
    // Step 2: While the number is greater than 1, divide by 2
    while (num > 1) {
      // Step 3: If the number is not divisible by 2, return false
      if (num % 2 !== 0) {
        return "false";
      }
      num = num / 2;
    }
    
    // Step 4: If the number becomes 1, return true
    return "true";
  }
  
  // Example usage:
  console.log(PowersofTwo(16)); // Output: "true"
  console.log(PowersofTwo(22)); // Output: "false"
  console.log(PowersofTwo(1));  // Output: "true"
  console.log(PowersofTwo(0));  // Output: "false"
  