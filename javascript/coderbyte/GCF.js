/****************************************************************
 *               CODERBYTE GREATEST COMMON FACTOR CHALLENGE     *
 *                                                              *
 * Problem Statement                                            *
 * Have the function GCF(arr) take the array of numbers         *
 * stored in arr which will always contain only two positive   *
 * integers, and return the greatest common factor of them.    *
 * For example: if arr is [45, 12] then your program should    *
 * return 3. There will always be two elements in the array    *
 * and they will be positive integers.                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: [45, 12]                                           *
 * Output 1: 3                                                *
 *                                                              *
 * Input 2: [100, 25]                                          *
 * Output 2: 25                                               *
 *                                                              *
 ***************************************************************/

function GCF(arr) {
    // Function to compute the greatest common factor using Euclidean algorithm
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    // Destructure the array into two variables
    const [num1, num2] = arr;

    // Compute and return the GCF
    return gcd(num1, num2);
}

// Examples
console.log(GCF([45, 12]));   // Output: 3
console.log(GCF([100, 25]));  // Output: 25
console.log(GCF([56, 98]));   // Output: 14
console.log(GCF([8, 32]));    // Output: 8
console.log(GCF([37, 42]));   // Output: 1
