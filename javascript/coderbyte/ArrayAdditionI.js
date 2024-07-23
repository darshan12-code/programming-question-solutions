/****************************************************************
 *             CODERBYTE ARRAY ADDITION I CHALLENGE             *
 *                                                              *
 * Problem Statement                                            *
 * Have the function ArrayAdditionI(arr) take the array of      *
 * numbers stored in arr and return the string true if any      *
 * combination of numbers in the array (excluding the largest   *
 * number) can be added up to equal the largest number in the   *
 * array, otherwise return the string false.                    *
 * For example: if arr contains [4, 6, 23, 10, 1, 3] the output *
 * should return true because 4 + 6 + 10 + 3 = 23. The array    *
 * will not be empty, will not contain all the same elements,   *
 * and may contain negative numbers.                            *
 *                                                              *
 * Examples                                                     *
 * Input 1: [5,7,16,1,2]                                        *
 * Output 1: false                                              *
 *                                                              *
 * Input 2: [3,5,-1,8,12]                                       *
 * Output 2: true                                               *
 *                                                              ** 
 *  SOLUTION                                                                            *
*  To get the largest number I am going to sort the array in ascending order which     *
*  leaves the largest number at the end of the array. I can get largest number using   *
*  pop() function. To get the total I am going to use two nested loops. The outer      *
*  loop goes through every number in the array. The inner loop then adds all the other *
*  numbers in the array and then compares the total to the largest number. If a match  *
*  is found then return true else return false.                                        *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Sort array in ascending order.                                                 *
*    2) Remove largest number from array and store in largest                          *
*    3) Loop through each number in array                                              *
*    4) Add every other number to this number and see if total matches largest         *
*    5) If match return True else return False
*                                                                                      *
***************************************************************************************/
function ArrayAdditionI(arr) {
    // Sort array in ascending order
    arr.sort((a, b) => a - b);
    
    // Remove the largest number
    const largest = arr.pop();
    
    // Helper function to check combinations
    function canSum(target, numbers) {
      if (target === 0) return true;
      if (target < 0 || numbers.length === 0) return false;
  
      const [first, ...rest] = numbers;
      // Check if we can reach the target either by including or excluding the current number
      return canSum(target - first, rest) || canSum(target, rest);
    }
  
    return canSum(largest, arr);
  }
  
  
  // Example usage:
  console.log(ArrayAdditionI([4, 6, 23, 10, 1, 3])); // Output: true
  console.log(ArrayAdditionI([5, 7, 16, 1, 2])); // Output: false
  console.log(ArrayAdditionI([3, 5, -1, 8, 12])); // Output: true
  console.log(ArrayAdditionI([5, 10, 15])); // Output: true
  console.log(ArrayAdditionI([2, 4, 16, 24])); // Output: false