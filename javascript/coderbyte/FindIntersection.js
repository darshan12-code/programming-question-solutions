/****************************************************************
 *             CODERBYTE FIND INTERSECTION CHALLENGE            *
 *                                                              *
 * Problem Statement                                            *
 * Have the function FindIntersection(strArr) read the array of *
 * strings stored in strArr which will contain 2 elements: the  *
 * first element will represent a list of comma-separated       *
 * numbers sorted in ascending order, the second element will   *
 * represent a second list of comma-separated numbers           *
 * (also sorted).                                               *
 *                                                              *
 * Your goal is to return a comma-separated string containing   *
 * the numbers that occur in elements of strArr in sorted order.*
 * If there is no intersection, return the string false.        *
 *                                                              *
 * Examples                                                     *
 * Input 1: new string[] {"1, 3, 4, 7, 13", "1, 2, 4, 13, 15"}  *
 * Output 1: 1,4,13                                             *
 *                                                              *
 * Input 2: new string[] {"1, 3, 9, 10, 17, 18", "1, 4, 9, 10"} *
 * Output 2: 1,9,10                                             *
 *                                                              *
 * SOLUTION                                                     *
 * The solution involves splitting both strings into arrays of  *
 * numbers, converting them to sets, and finding the intersection*
 * of both sets. Finally, we return the intersection as a       *
 * comma-separated string.                                      *
 *                                                              *
 * Steps for solution                                           *
 * 1) Split each string into an array of numbers.               *
 * 2) Convert these arrays to sets for efficient lookup.        *
 * 3) Find the intersection of both sets.                       *
 * 4) If intersection is not empty, return it as a              *
 *    comma-separated string, otherwise return "false".         *
 *                                                              *
 ****************************************************************/

function FindIntersection(strArr) {
    // Step 1: Split each string into an array of numbers
    let list1 = strArr[0].split(', ').map(Number);
    let list2 = strArr[1].split(', ').map(Number);
    
    // Step 2: Convert these arrays to sets for efficient lookup
    let set1 = new Set(list1);
    let set2 = new Set(list2);
    
    // Step 3: Find the intersection of both sets
    let intersection = [...set1].filter(num => set2.has(num));
    
    // Step 4: Return the intersection as a comma-separated string or "false"
    return intersection.length ? intersection.join(',') : 'false';
  }
  
  // Example usage:
  console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"])); // Output: "1,4,13"
  console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"])); // Output: "1,9,10"
  console.log(FindIntersection(["1, 3, 5", "2, 4, 6"])); // Output: "false"
  