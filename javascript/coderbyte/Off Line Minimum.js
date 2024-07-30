/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  OffLine Minimum                                                                     *
*  Using the JavaScript language, have the function OffLineMinimum(strArr) take the    *
*  strArr parameter being passed which will be an array of integers ranging from       *
*  1...n and the letter "E" and return the correct subset based on the following       *
*  rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] *
*  where the I's stand for integers and the E means take out the smallest integer      *
*  currently in the whole set. When finished, your program should return that new set  *
*  with integers separated by commas. For example: if strArr is                        *
*  ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.    *                                                  *
*                                                                                      *
*  SOLUTION                                                                            *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize an empty array currentIntegers to store the current integers.       *
*    2) Initialize an empty array result to store the results.                         *
*    3) Loop through each element in the input array:                                  *
*        a) If the element is an integer, add it to the currentIntegers array.         *
*        b) If the element is "E":                                                     *
*           - Find the smallest integer in currentIntegers.                            *
*           - Remove the smallest integer from currentIntegers.                        *
*           - Add the smallest integer to the result array.                            *
*    4) Return the result array joined with commas.                                    *
***************************************************************************************/

function OffLineMinimum(strArr) { 
    let currentIntegers = [];
    let result = [];
  
    strArr.forEach(item => {
      if (!isNaN(item)) {
        currentIntegers.push(parseInt(item));
      } else if (item === "E") {
        let min = Math.min(...currentIntegers);
        result.push(min);
        currentIntegers.splice(currentIntegers.indexOf(min), 1);
      }
    });
  
    return result.join(",");
  }
  
  // Example usage:
  console.log(OffLineMinimum(["5", "4", "6", "E", "1", "7", "E", "E", "3", "2"])); // Output: "4,1,5"
  console.log(OffLineMinimum(["1", "2", "3", "E", "4", "E", "5", "E"])); // Output: "1,2,3"
  