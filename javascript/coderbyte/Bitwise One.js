/****************************************************************
 *              CODERBYTE BITWISE ONE CHALLENGE                 *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BitwiseOne(strArr) take the array of       *
 * strings stored in strArr, which will only contain two        *
 * strings of equal length that represent binary numbers, and   *
 * return a final binary string that performed the bitwise      *
 * OR operation on both strings. A bitwise OR operation places  *
 * a 0 in the new string where there are zeroes in both binary  *
 * strings, otherwise it places a 1 in that spot.               *
 * For example: if strArr is ["1001", "0100"] then your program *
 * should return the string "1101"                              *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["100", "000"]                                      *
 * Output 1: 100                                                *
 *                                                              *
 * Input 2: ["00011", "01010"]                                  *
 * Output 2: 01011                                              *
 *                                                              *
 * Solution                                                     *
 *                                                              *
 * Steps for solution                                           *
 * 1) Initialize an empty result string.                        *
 * 2) Loop through each character of the binary strings.        *
 * 3) Perform bitwise OR for each pair of bits and append to the result string.*
 * 4) Return the result string.                                 *
 ***************************************************************/

function BitwiseOne(strArr) {
    let result = "";
    const str1 = strArr[0];
    const str2 = strArr[1];
  
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === '1' || str2[i] === '1') {
        result += '1';
      } else {
        result += '0';
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(BitwiseOne(["1001", "0100"])); // Output: 1101
  console.log(BitwiseOne(["100", "000"]));   // Output: 100
  console.log(BitwiseOne(["00011", "01010"])); // Output: 01011
  