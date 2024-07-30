/****************************************************************
 *             CODERBYTE NEXT PALINDROME CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function NextPalindrome(num) take the num parameter *
 * being passed and return the next largest palindromic number. *
 * The input can be any positive integer. For example: if num   *
 * is 24, then your program should return 33 because that is the*
 * next largest number that is a palindrome.                    *
 *                                                              *
 * Examples                                                     *
 * Input 1: 24                                                  *
 * Output 1: 33                                                 *
 *                                                              *
 * Input 2: 123                                                 *
 * Output 2: 131                                                *
 *                                                              *
 * Solution                                                     *
 *                                                              *
 * Steps for solution:                                          *
 * 1. Increment the number by 1 to start checking from the next *
 *    number.                                                   *
 * 2. Convert the number to a string and check if it reads the  *
 *    same forward and backward.                                *
 * 3. If it is a palindrome, return the number.                 *
 * 4. If not, increment the number and repeat the process.      *
 *                                                              *
 ***************************************************************/

function NextPalindrome(num) {
    // Helper function to check if a number is a palindrome
    function isPalindrome(n) {
        let str = n.toString();
        return str === str.split('').reverse().join('');
    }

    // Increment num to find the next palindrome
    num++;
    while (!isPalindrome(num)) {
        num++;
    }
    
    return num;
}

// Example usage:
console.log(NextPalindrome(24)); // Output: 33
console.log(NextPalindrome(123)); // Output: 131
console.log(NextPalindrome(999)); // Output: 1001
