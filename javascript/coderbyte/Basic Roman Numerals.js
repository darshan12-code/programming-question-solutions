/****************************************************************
 *             CODERBYTE BASIC ROMAN NUMERALS CHALLENGE         *
 *                                                              *
 * Problem Statement                                            *
 * Have the function BasicRomanNumerals(str) read str which     *
 * will be a string of Roman numerals. The numerals being used  *
 * are: I for 1, V for 5, X for 10, L for 50, C for 100, D for  *
 * 500 and M for 1000. In Roman numerals, to create a number    *
 * like 11 you simply add a 1 after the 10, so you get XI. But  *
 * to create a number like 19, you use the subtraction notation *
 * which is to add an I before an X or V (or add an X before    *
 * an L or C). So 19 in Roman numerals is XIX.                  *
 *                                                              *
 * The goal of your program is to return the decimal equivalent *
 * of the Roman numeral given. For example: if str is "XXIV"    *
 * your program should return 24                                *
 *                                                              *
 * Examples                                                     *
 * Input 1: "IV"                                                *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: "XLVI"                                              *
 * Output 2: 46                                                 *
 *                                                              *
 * Input 3: "MCMXCIV"                                          *
 * Output 3: 1994                                              *
 *                                                              *
 * Input 4: "MMXXIV"                                           *
 * Output 4: 2024                                              *
 ***************************************************************/

function BasicRomanNumerals(str) {
    // Define the value of each Roman numeral
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let total = 0;
    let prevValue = 0;

    // Iterate over each character in the string from left to right
    for (const char of str) {
        const value = values[char];
        // Add value if it is greater than or equal to the previous value
        // Subtract value if it is less than the previous value (i.e., a subtractive notation)
        total += value > prevValue ? value - 2 * prevValue : value;
        prevValue = value;
    }

    return total;
}

// Test cases
console.log(BasicRomanNumerals("IV"));    // Output: 4
console.log(BasicRomanNumerals("XLVI"));  // Output: 46
console.log(BasicRomanNumerals("MCMXCIV")); // Output: 1994
console.log(BasicRomanNumerals("MMXXIV")); // Output: 2024
