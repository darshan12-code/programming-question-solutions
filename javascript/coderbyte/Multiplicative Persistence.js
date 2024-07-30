/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Multiplicative Persistence                                                          *
*  Using the JavaScript language, have the function MultiplicativePersistence(num)     *
*  take the num parameter being passed and return the number of times you must         *
*  multiply the digits in num until you reach a single digit. For example:             *
*  if num is 39 then your program should return 3 because                              *
*  3*9=27, 2*7=14, 1*4=4 and you stop at 4.                                            *
*                                                                                      *
*  SOLUTION                                                                            *
*                                                                                      *
*  Steps for solution                                                                  *
*    1) Initialize a counter to keep track of the number of steps.                     *
*    2) Loop until the number becomes a single digit:                                  *
*        a) Convert the number to a string.                                            *
*        b) Split the string into individual digits and multiply them together.        *
*        c) Update the number with the result of the multiplication.                   *
*        d) Increment the counter.                                                     *
*    3) Return the counter.                                                            *
*                                                                                      *
***************************************************************************************/

function MultiplicativePersistence(num) {
    let count = 0;
    
    while (num >= 10) {
      num = num.toString().split('').reduce((acc, digit) => acc * parseInt(digit), 1);
      count++;
    }
    
    return count;
  }
  
  // Example usage:
  console.log(MultiplicativePersistence(39)); // Output: 3
  console.log(MultiplicativePersistence(4));  // Output: 0
  console.log(MultiplicativePersistence(25)); // Output: 2
  console.log(MultiplicativePersistence(999)); // Output: 4
  