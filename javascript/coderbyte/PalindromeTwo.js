/*Using the JavaScript language, have the function PalindromeTwo(str)
take the str parameter being passed and return the string true if the parameter is a palindrome, 
(the string is the same forward as it is backward) otherwise return the string false. 
The parameter entered may have punctuation and symbols but they should not affect whether the string is in fact a palindrome.
For example: "Anne, I vote more cars race Rome-to-Vienna" should return true. */

function PalindromeTwo(str) {
    // Step 1: Normalize the string
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    // Step 2: Check if the cleaned string is a palindrome
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr ? "true" : "false";
  }
  
  // Test cases
  console.log(PalindromeTwo("Anne, I vote more cars race Rome-to-Vienna")); // Output: true
  console.log(PalindromeTwo("No 'x' in Nixon")); // Output: true
  console.log(PalindromeTwo("Not a palindrome")); // Output: false
  