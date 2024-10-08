/****************************************************************
 *              CODERBYTE ARRAY MATCHING CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayMatching(strArr) read the array of    *
 * strings stored in strArr which will contain only two elements*
 * both of which will represent an array of positive integers.  *
 * For example: if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], *
 * then both elements in the input represent two integer arrays *
 * and your goal for this challenge is to add the elements in   *
 * corresponding locations from both arrays. For the example    *
 * input your program should do the following additions:        *
 * [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then             *
 * equals [6, 4, 13, 17]. Your program should finally return    *
 * this resulting array in a string format with each element    *
 * separated by a hyphen: 6-4-13-17.                            *
 * If the two arrays do not have the same amount of elements,   *
 * then simply append the remaining elements onto the new array *
 * (example shown below). Both arrays will be in the            *
 * format: [e1, e2, e3, ...] where at least one element will    *
 * exist in each array.                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]                   *
 * Output 1: 7-4-6-10-6                                         *
 *                                                              *
 * Input 2: ["[1, 2, 1]", "[2, 1, 5, 2]"]                       *
 * Output 2: 3-3-6-2                                            *
 *                                                              *
 ***************************************************************/

function ArrayMatching(strArr) { 
    // Step 1: Parse input arrays from the strings
    let arr1 = JSON.parse(strArr[0]);
    let arr2 = JSON.parse(strArr[1]);
  
    // Step 2: Initialize the result array
    let result = [];
  
    // Step 3: Add corresponding elements from both arrays
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
      let val1 = i < arr1.length ? arr1[i] : 0;
      let val2 = i < arr2.length ? arr2[i] : 0;
      result.push(val1 + val2);
    }
  
    // Step 4: Format the result as a hyphen-separated string
    return result.join('-');
  }
  
  // Example usage:
  console.log(ArrayMatching(["[5, 2, 3]", "[2, 2, 3, 10, 6]"])); // Output: 7-4-6-10-6
  console.log(ArrayMatching(["[1, 2, 1]", "[2, 1, 5, 2]"])); // Output: 3-3-6-2
  