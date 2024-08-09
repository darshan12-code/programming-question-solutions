/****************************************************************
 *                CODERBYTE POWER SET COUNT CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function PowerSetCount(arr) take the array of       *
 * integers stored in arr, and return the length of the power   *
 * set (the number of all possible sets) that can be generated. *
 * For example: if arr is [1, 2, 3], then the following sets   *
 * form the power set:                                         *
 * []                                                           *
 * [1]                                                          *
 * [2]                                                          *
 * [3]                                                          *
 * [1, 2]                                                      *
 * [1, 3]                                                      *
 * [2, 3]                                                      *
 * [1, 2, 3]                                                  *
 * You can see above all possible sets, along with the empty    *
 * set, are generated. Therefore, for this input, your program  *
 * should return 8.                                            *
 *                                                              *
 * Solution                                                     *
 *                                                              *
 * Steps for solution:                                         *
 * 1. Calculate the length of the input array.                  *
 * 2. The length of the power set of an array is given by       *
 *    2^n, where n is the number of elements in the array.       *
 * 3. Return the result of 2 raised to the power of the length  *
 *    of the array.                                             *
 *                                                              *
 ***************************************************************/

function PowerSetCount(arr) {
    return Math.pow(2,arr.length)
 }
 
 // Example usage:
 console.log(PowerSetCount([1, 2, 3])); // Output: 8
 console.log(PowerSetCount([1, 2, 3, 4])); // Output: 16
 console.log(PowerSetCount([5, 6])); // Output: 4
 