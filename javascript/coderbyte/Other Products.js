/****************************************************************
 *              CODERBYTE OTHER PRODUCTS CHALLENGE              *
 *                                                              *
 * Problem Statement                                            *
 * Have the function OtherProducts(arr) take the array of       *
 * numbers stored in arr and return a new list of the products  *
 * of all the other numbers in the array for each element.      *
 * For example: if arr is [1, 2, 3, 4, 5] then the new array,   *
 * where each location in the new array is the product of all   *
 * other elements, is [120, 60, 40, 30, 24].                    *
 * The following calculations were performed to get this answer *
 * [(2*3*4*5), (1*3*4*5), (1*2*4*5), (1*2*3*5), (1*2*3*4)].     *
 * You should generate this new array and then return the       *
 * numbers as a string joined by a hyphen: 120-60-40-30-24.     *
 * The array will contain at most 10 elements and at least 1    *
 * element of only positive integers.                           *
 *                                                              *
 * Examples                                                     *
 * Input 1: [1,4,3]                                             *
 * Output 1: 12-3-4                                             *
 *                                                              *
 * Input 2: [3,1,2,6]                                           *
 * Output 2: 12-36-18-6                                         *
 *                                                              *
 * Solution                                                     *
 *                                                              *
 * Steps for solution                                           *
 * 1. Calculate the total product of all elements in the array. *
 * 2. Create a new array where each element is the total product *
 *    divided by the element at the current index.              *
 * 3. Join the elements of the result array into a string with  *
 *    hyphens separating each value.                           *
 ***************************************************************/

function OtherProducts(arr) { 
    // Step 1: Calculate the total product of all elements
    const totalProduct = arr.reduce((acc, num) => acc * num, 1);
    
    // Step 2: Create the result array where each element is totalProduct divided by the current element
    const result = arr.map(num => totalProduct / num);
    
    // Step 3: Convert the result array to a string with elements joined by hyphens
    return result.join('-');
  }
      
  // Example usage:
  console.log(OtherProducts([1, 2, 3, 4, 5])); // Output: "120-60-40-30-24"
  console.log(OtherProducts([1, 4, 3]));       // Output: "12-3-4"
  console.log(OtherProducts([3, 1, 2, 6]));    // Output: "12-36-18-6"
  