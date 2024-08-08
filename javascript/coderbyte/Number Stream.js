/****************************************************************
 *              CODERBYTE NUMBER STREAM CHALLENGE               *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NumberStream(str) take the str parameter   *
 * being passed which will contain the numbers 2 through 9, and *
 * determine if there is a consecutive stream of digits of at   *
 * least N length where N is the actual digit value. If so,     *
 * return the string true, otherwise return the string false.   *
 * For example: if str is "6539923335" then your program should *
 * return the string true because there is a consecutive stream *
 * of 3's of length 3. The input string will always contain at  *
 * least one digit.                                             *
 ***************************************************************/

function NumberStream(str) {
    // Step 1: Iterate over the input string
    for (let i = 0; i < str.length; i++) {
      // Step 2: Get the current digit and convert it to a number
      let num = parseInt(str[i]);
  
      // Step 3: Check if the current digit is between 2 and 9
      if (num >= 2 && num <= 9) {
        // Step 4: Initialize a counter for consecutive digits
        let count = 1;
  
        // Step 5: Count consecutive digits
        for (let j = i + 1; j < str.length && str[j] == str[i]; j++) {
          count++;
        }
  
        // Step 6: Check if the count is at least the digit value
        if (count >= num) {
          return "true";
        }
      }
    }
  
    // Step 7: Return false if no consecutive stream is found
    return "false";
  }
  
  // Examples
  console.log(NumberStream("6539923335")); // Output: "true"
  console.log(NumberStream("555629338"));  // Output: "true"
  console.log(NumberStream("123456789"));  // Output: "false"
  console.log(NumberStream("44444"));      // Output: "true"
  console.log(NumberStream("12"));         // Output: "false"
  console.log(NumberStream("2233445566")); // Output: "true"
  