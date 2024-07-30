/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  MeanMode                                                                            *
*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
*  The array will not be empty, will only contain positive integers, and will not      *
*  contain more than one mode.                                                         *
*                                                                                      *
*  Examples                                                                            *
*  Input 1: new int[] {1, 2, 3}                                                        *
*  Output 1: 0                                                                         *
*                                                                                      *
*  Input 2: new int[] {4, 4, 4, 6, 2}                                                  *
*  Output 2: 1                                                                         *
*                                                                                      *
*  SOLUTION                                                                            *
*  To solve this problem, we need to find both the mean and the mode of the array.     *
*  - The mean is the sum of all numbers divided by the count of numbers.               *
*  - The mode is the number that appears the most frequently in the array.             *
*  After calculating both, we compare them and return 1 if they are equal, otherwise 0.*
*                                                                                      *
*  Steps for solution                                                                  *
*  1) Calculate the mean by summing all elements and dividing by the number of elements.*
*  2) Calculate the mode by creating a frequency map of all elements and finding the   *
*     element with the highest frequency.                                              *
*  3) Compare the mean and mode, and return 1 if they are equal, otherwise return 0.   *
*                                                                                      *
***************************************************************************************/

function MeanMode(arr) {
    // Step 1: Calculate the mean
    const mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
  
    // Step 2: Calculate the mode
    const frequency = {};
    let mode = arr[0];
    let maxCount = 0;
  
    for (let num of arr) {
      frequency[num] = (frequency[num] || 0) + 1;
      if (frequency[num] > maxCount) {
        maxCount = frequency[num];
        mode = num;
      }
    }
  
    // Step 3: Compare the mean and mode
    return mean === mode ? 1 : 0;
  }
  
  // Example usage:
  console.log(MeanMode([1, 2, 3])); // Output: 0
  console.log(MeanMode([4, 4, 4, 6, 2])); // Output: 1
  