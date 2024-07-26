/****************************************************************
 *             CODERBYTE BINARY REVERSAL CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BinaryReversal(str) take the str parameter *
 * being passed, which will be a positive integer, take its     *
 * binary representation (padded to the nearest N * 8 bits),    *
 * reverse that string of bits, and then finally return the new *
 * reversed string in decimal form. For example: if str is "47" *
 * then the binary version of this integer is 101111 but we pad *
 * it to be 00101111. Your program should reverse this binary   *
 * string which then becomes: 11110100 and then finally return  *
 * the decimal version of this string, which is 244.            *
 *                                                              *
 * Examples                                                     *
 * Input 1: "213"                                               *
 * Output 1: 171                                                *
 *                                                              *
 * Input 2: "4567"                                              *
 * Output 2: 60296                                              *
 *                                                              *
 ***************************************************************/

function BinaryReversal(str) {
    // Step 1: Convert input string to integer
    let num = parseInt(str);

    // Step 2: Convert integer to binary string
    let binaryStr = num.toString(2);

    // Step 3: Pad binary string to the nearest multiple of 8 bits
    let paddedLength = Math.ceil(binaryStr.length / 8) * 8;
    let paddedBinaryStr = binaryStr.padStart(paddedLength, '0');

    // Step 4: Reverse the padded binary string
    let reversedBinaryStr = paddedBinaryStr.split('').reverse().join('');

    // Step 5: Convert the reversed binary string back to a decimal number
    let result = parseInt(reversedBinaryStr, 2);

    // Step 6: Return the final decimal number
    return result;
}

// Example usage:
console.log(BinaryReversal("47")); // Output: 244
console.log(BinaryReversal("213")); // Output: 171
console.log(BinaryReversal("4567")); // Output: 60296
