/****************************************************************
 *                 CODERBYTE ASCII CONVERSION CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ASCIIConversion(str) take the str parameter*
 * being passed and return a new string where every character,  *
 * aside from the space character, is replaced with its         *
 * corresponding decimal character code.                        *
 * For example: if str is "dog" then your program should return *
 * the string 100111103 because d = 100, o = 111, g = 103.      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "dog"                                               *
 * Output 1: "100111103"                                        *
 *                                                              *
 * Input 2: "hello world"                                       *
 * Output 2: "104101108108111 119111114108100"                  *
 ***************************************************************/
function ASCIIConversion(str) {
    let result = '';

    for (let char of str) {
        if (char === ' ') {
            result += ' ';
        } else {
            result += char.charCodeAt(0);
        }
    }

    return result;
}

// Examples
console.log(ASCIIConversion("dog"));          // Output: "100111103"
console.log(ASCIIConversion("hello world"));  // Output: "104101108108111 119111114108100"
