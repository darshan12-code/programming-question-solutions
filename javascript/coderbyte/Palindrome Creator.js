/****************************************************************
 *             CODERBYTE PALINDROME CREATOR CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PalindromeCreator(str) take the str        *
 * parameter being passed and determine if it is possible to    *
 * create a palindromic string of at least 3 characters by      *
 * removing 1 or 2 characters. For example: if str is "abjchba" *
 * then you can remove the characters "jc" to produce "abhba"   *
 * which is a palindrome. For this example, your program should *
 * return the two characters that were removed with no delimiter*
 * and in the order they appear in the string, so "jc". If 1 or *
 * 2 characters cannot be removed to produce a palindrome, then *
 * return the string "not possible". If the input string is     *
 * already a palindrome, your program should return the string  *
 * "palindrome". The input will only contain lowercase          *
 * alphabetic characters. Your program should always attempt to *
 * create the longest palindromic substring by removing 1 or 2  *
 * characters.                                                  *
 *                                                              *
 * Examples                                                     *
 * Input 1: "abjchba"                                           *
 * Output 1: "jc"                                               *
 *                                                              *
 * Input 2: "abac"                                              *
 * Output 2: "b"                                                *
 *                                                              *
 ***************************************************************/

function PalindromeCreator(str) {
    // Helper function to check if a string is a palindrome
    function isPalindrome(s) {
      return s === s.split('').reverse().join('');
    }
  
    // If the string is already a palindrome
    if (isPalindrome(str)) {
      return "palindrome";
    }
  
    // Try removing one character
    for (let i = 0; i < str.length; i++) {
      let tempStr = str.slice(0, i) + str.slice(i + 1);
      if (isPalindrome(tempStr)) {
        return str[i];
      }
    }
  
    // Try removing two characters
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j < str.length; j++) {
        let tempStr = str.slice(0, i) + str.slice(i + 1, j) + str.slice(j + 1);
        if (isPalindrome(tempStr)) {
          return str[i] + str[j];
        }
      }
    }
  
    // If no palindrome can be formed
    return "not possible";
  }
  
  // Test cases
  console.log(PalindromeCreator("abjchba")); // Output: "jc"
  console.log(PalindromeCreator("abac"));    // Output: "b"
  console.log(PalindromeCreator("racecar")); // Output: "palindrome"
  console.log(PalindromeCreator("abcdef"));  // Output: "not possible"
  