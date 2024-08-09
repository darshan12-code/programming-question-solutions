/****************************************************************
 *             CODERBYTE PALINDROME CHALLENGE                   *
 *                                                              *
 * Problem Statement                                            *
 * Have the function Palindrome(str) take the str parameter     *
 * being passed and return the string true if the parameter is  *
 * a palindrome, (the string is the same forward as it is       *
 * backward) otherwise return the string false. For example:    *
 * "racecar" is also "racecar" backwards. Punctuation & numbers *
 * will not be part of the string.                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: never odd or even                                   *
 * Output 1: true                                               *
 *                                                              *
 * Input 2: eye                                                 *
 * Output 2: true                                               *
 *                                                              *

 ***************************************************************/

function Palindrome(str) {
    let cleanedStr=str.replace(/\s/g,'').toLowerCase();
    let reverseStr=cleanedStr.split('').reverse().join('');
    return cleanedStr===reverseStr;
   }
   
   // Example usage:
   console.log(Palindrome("never odd or even")); // Output: true
   console.log(Palindrome("eye")); // Output: true
   console.log(Palindrome("xxoo")); // Output: false
   
   