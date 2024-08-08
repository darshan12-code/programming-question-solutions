/****************************************************************
 *             CODERBYTE ONE DECREMENTED CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OneDecremented(str) count how many times a *
 * digit appears that is exactly one less than the previous     *
 * digit. For example: if str is "5655984" then your program    *
 * should return 2 because 5 appears directly after 6 and 8     *
 * appears directly after 9. The input will always contain at   *
 * least 1 digit.	                                        *
 *                                                              *
 * Examples                                                     *
 * Input 1: "56"                                                *
 * Output 1: 0                                                  *
 *                                                              *
 * Input 2: "9876541110"                                        *
 * Output 2: 6                                                  *
 *                                                              *
 ***************************************************************/

function OneDecremented(str) {
    // Step 1: Initialize a counter to track the number of matches
    let count = 0;

    // Step 2: Iterate through the string starting from the second character
    for (let i = 1; i < str.length; i++) {
        // Step 3: Check if the current digit is one less than the previous digit
        if (parseInt(str[i]) === parseInt(str[i - 1]) - 1) {
            // Step 4: Increment the counter if the condition is met
            count++;
        }
    }

    // Step 5: Return the counter value
    return count;
}

// Examples
console.log(OneDecremented("56"));             // Output: 0
console.log(OneDecremented("9876541110"));     // Output: 6
console.log(OneDecremented("5655984"));        // Output: 2
console.log(OneDecremented("1234321"));        // Output: 3
console.log(OneDecremented("9081726354"));     // Output: 1
