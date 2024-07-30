// Min Window Substring
// Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example: if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d is "dae" located at the end of the string. So for this example your program should return the string dae.

// Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.
// Examples
// Input: ["ahffaksfajeeubsne", "jefaa"]
// Output: aksfaje
// Input: ["aaffhkksemckelloe", "fhea"]
// Output: affhkkse                                                         
function MinWindowSubstring(strArr) {
    const [N, K] = strArr;
    
    // Create a frequency map for characters in K
    const charCountK = {};
    for (const char of K) {
        if (charCountK[char] == null) charCountK[char] = 0;
        charCountK[char]++;
    }
    
    let left = 0, right = 0;
    let minLength = Infinity, minStart = 0;
    let charsNeeded = Object.keys(charCountK).length;
    let charsFound = 0;
    const windowCounts = {};

    while (right < N.length) {
        // Expand the window by adding the character at `right`
        const char = N[right];
        if (windowCounts[char] == null) windowCounts[char] = 0;
        windowCounts[char]++;
        
        // Check if the current character matches the requirement in K
        if (charCountK[char] && windowCounts[char] === charCountK[char]) {
            charsFound++;
        }
        
        // Contract the window from the left until it's no longer valid
        while (charsFound === charsNeeded) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minStart = left;
            }
            
            const leftChar = N[left];
            windowCounts[leftChar]--;
            if (charCountK[leftChar] && windowCounts[leftChar] < charCountK[leftChar]) {
                charsFound--;
            }
            left++;
        }
        
        // Move the `right` pointer to expand the window
        right++;
    }
    
    // Return the smallest valid window substring
    return minLength === Infinity ? "" : N.substring(minStart, minStart + minLength);
}

// Test cases
console.log(MinWindowSubstring(["aaabaaddae", "aed"])); // Output: "dae"
console.log(MinWindowSubstring(["aabdccdbcacd", "aad"])); // Output: "aabd"
