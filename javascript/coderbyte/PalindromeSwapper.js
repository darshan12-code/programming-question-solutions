// For this challenge you will determine if a palindrome can be created in a string.
/*
have the function PalindromeSwapper(str) take the str parameter being passed and determine if a palindrome can be created by swapping two adjacent characters in the string. If it is possible to create a palindrome, then your program should return the palindrome, if not then return the string -1. The input string will only contain alphabetic characters. For example: if str is "rcaecar" then you can create a palindrome by swapping the second and third characters, so your program should return the string racecar which is the final palindromic string.
*/

function PalindromeSwapper(str){
    const isPalindrome=(s)=>{
      return s === s.split('').reverse().join('');
    }
    if(isPalindrome(str)){
        return 'palindrome'
    }
   
   for(i=0;i<=str.length-1;i++){
       let swapperStr=str.split('');
       [swapperStr[i],swapperStr[i+1]]=[swapperStr[i+1],swapperStr[i]];
       swapperStr=swapperStr.join('');
       if(isPalindrome(swapperStr))
       {
          return 'palindrome'
       }
   }
   return false
}
console.log(PalindromeSwapper('rcaecar'));