// Codeland Username Validation
// Have the function CodelandUsernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

// 1. The username is between 4 and 25 characters.
// 2. It must start with a letter.
// 3. It can only contain letters, numbers, and the underscore character.
// 4. It cannot end with an underscore character.

// If the username is valid then your program should return the string true, otherwise return the string false.
// Examples
// Input: "aa_"
// Output: false
// Input: "u__hello_world123"
// Output: true
function CodelandUsernameValidation(str) {
    // Check if the length is between 4 and 25 characters
    if (str.length < 4 || str.length > 25) {
      return false;
    }
  
    // Regular expression to check the username
    // ^[a-zA-Z] : start with a letter
    // [a-zA-Z0-9_]* : can contain letters, numbers, and underscores
    // [a-zA-Z0-9]$ : cannot end with an underscore
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[a-zA-Z0-9]$/;
  
    // Test the string against the regular expression
    return regex.test(str);
  }
  // Test cases
  console.log(CodelandUsernameValidation("aa_")); // Output: false
  console.log(CodelandUsernameValidation("u__hello_world123")); // Output: true
  console.log(CodelandUsernameValidation("user1")); // Output: true
  console.log(CodelandUsernameValidation("_user")); // Output: false
  console.log(CodelandUsernameValidation("user_")); // Output: false
  console.log(CodelandUsernameValidation("a".repeat(26))); // Output: false
  console.log(CodelandUsernameValidation("user_name_123")); // Output: true
  
  
  
  
  
  
  
  
  
  
  
  