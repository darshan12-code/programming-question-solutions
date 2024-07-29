/****************************************************************
 *              CODERBYTE BITWISE TWO CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseTwo(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the              *
 * bitwise AND operation on both strings. A bitwise AND         *
 * operation places a 1 in the new string where there is a 1 in *
 * both locations in the binary strings, otherwise it places    *
 * a 0 in that spot.                                            *
 * For example: if strArr is ["10111", "01101"] then your       *
 * program should return the string "00101"                     *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 000                                                *
 *                                                              *
 * Input 2: ["10100", "11100"]                                  *
 * Output 2: 10100                                              *
 *                                                              *
 * Solution                                                     *
 *                                                              *
 * Steps for solution:                                          *
 * 1. Initialize an empty result string to store the result.    *
 * 2. Loop through each character of the strings.               *
 * 3. For each character, perform a bitwise AND operation.      *
 * 4. Append the result of the bitwise AND operation to the     *
 *    result string.                                            *
 * 5. Return the final result string.                           *
 ***************************************************************/

function BitwiseTwo(strArr) {
    const [str1, str2] = strArr;
    let result = "";

    for (let i = 0; i < str1.length; i++) {
        result += str1[i] === '1' && str2[i] === '1' ? '1' : '0';
    }

    return result;
}

// Example usage:
console.log(BitwiseTwo(["100", "000"])); // Output: 000
console.log(BitwiseTwo(["10100", "11100"])); // Output: 10100
console.log(BitwiseTwo(["10111", "01101"])); // Output: 00101
