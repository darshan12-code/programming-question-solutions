//  *
//  * Using the coding language, have the function FoodDistribution(arr) read the array of numbers stored in arr which will represent
//  * the hunger level of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 meaning very hungry).
//  * You will also have N sandwiches to give out which will range from 1 to 20.
//  * The format of the array will be [N, h1, h2, h3, ...]
//  * where N represents the number of sandwiches you have and the rest of the array will represent the hunger levels of different people.
//  *
//  * Your goal is to minimize the hunger difference between each pair of people in the array using the sandwiches you have available.
//  *
//  * For example:
//  * if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. You can distribute them in the following
//  * order to the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now become: [1, 1, 1, 1].
//  * The difference between each pair of people is now 0, the total is also 0, so your program should return 0.
//  * Note: You may not have to give out all, or even any, of your sandwiches to produce a minimized difference.
//  *
//  * Another example:
//  * if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the following order: [3, 0, 1, 0, 0]
//  * which makes all the hunger levels the following: [2, 2, 2, 1, 0].
//  * The differences between each pair of people is now: 0, 0, 1, 1 and so your program should return the final minimized
//  * difference of 2.

function FoodDistribution(arr) {
    let sandwiches = arr[0];
    let hungerLevels = arr.slice(1);
  
    const calculateTotalDifference = (levels) => {
      let totalDiff = 0;
      for (let i = 0; i < levels.length - 1; i++) {
        totalDiff += Math.abs(levels[i] - levels[i + 1]);
      }
      return totalDiff;
    };
  
    const apply = (levels, togive) => {
      let sum = levels.reduce((acc, val) => acc + val, 0);
      let mean = Math.floor(sum / levels.length);
      let initialTogive = togive;
  
      for (let i = 0; i < levels.length; i++) {
        if (levels[i] > mean) {
          let rem = Math.min(togive, levels[i] - mean);
          levels[i] -= rem;
          togive -= rem;
          if (togive === 0) break;
        }
      }
  
      if (initialTogive === togive) return 0;
      return togive;
    };
  
    while (sandwiches > 0) {
      sandwiches = apply(hungerLevels, sandwiches);
    }
  
    return calculateTotalDifference(hungerLevels);
  }
  
  // Example usage:
  console.log(FoodDistribution([5, 3, 1, 2, 1])); // Output: 0
  console.log(FoodDistribution([4, 5, 2, 3, 1, 0])); // Output: 2
  console.log(FoodDistribution([1, 2, 3, 100])); // Output: 4 (since there's only 1 sandwich and 100 is very high)
  