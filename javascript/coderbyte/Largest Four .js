/****************************************************************
 *                CODERBYTE LARGEST FOUR CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function LargestFour(arr) take the array of integers*
 * stored in arr, and find the four largest elements and return *
 * their sum.                                                   *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1, 1, 1, -5]                                       *
 * Output 1: -2                                                 *
 *                                                              *
 * Input 2: [0, 0, 2, 3, 7, 1]                                  *
 * Output 2: 13                                                 *
 *                                                              *
 ***************************************************************/

function LargestFour(arr) {
    // Sort the array in descending order
    arr.sort((a, b) => b - a);
    
    // Slice the first four elements or all if less than four
    const largestFour = arr.slice(0, 4);
    
    // Return the sum of these elements
    return largestFour.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(LargestFour([1, 1, 1, -5])); // Output: -2
console.log(LargestFour([0, 0, 2, 3, 7, 1])); // Output: 13
