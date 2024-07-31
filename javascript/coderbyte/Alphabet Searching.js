/****************************************************************
 *             CODERBYTE ALPHABET SEARCHING CHALLENGE           *
 *                                                              *
 * Problem Statement                                            *
 * Have the function AlphabetSearching(str) take the string     *
 * parameter being passed and return the string true if every   *
 * single letter of the English alphabet exists in the string,  *
 * otherwise return the string false.                           *
 * For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv"    *
 * then your program should return the string true because every*
 * character in the alphabet exists in this string even though  *
 * some characters appear more than once.                       *
 *                                                              *
 * Examples                                                     *
 * Input 1: abcdefghijklmnopqrstuvwxyyyy                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: abc123456kmo                                        *
 * Output 2: false                                              *
 ***************************************************************/

function AlphabetSearching(str) {
    const alphabetSet=new Set('abcdefghijklmnopqrstuvwxyz');
    for(let char of str){
alphabetSet.delete(char);
if(alphabetSet.size===0){
  return true
}
    }
return false
}

// Test cases
console.log(AlphabetSearching("zacxyjbbkfgtbhdaielqrm45pnsowtuv")); // Output: "true"
console.log(AlphabetSearching("abcdefghijklm1234567890nopqrstuvwxyz")); // Output: "true"
console.log(AlphabetSearching("abcdefghijklmnopqrstuvwxyyyy")); // Output: "false"
console.log(AlphabetSearching("abc123456kmo")); // Output: "false"
