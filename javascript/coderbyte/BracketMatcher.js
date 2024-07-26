// Bracket Matcher
// Have the function BracketMatcher(str) take the str parameter being passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is "((hello (world))" the the output should be 0 because the brackets do not correctly match up. Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
// Examples
// Input: "(coder)(byte))"
// Output: 0
// Input: "(c(oder)) b(yte)"
// Output: 1
function BracketMatcher(str) {
    let balance = 0;
  
    for (let char of str) {
      if (char === '(') {
        balance++;
      } else if (char === ')') {
        balance--;
        // If balance goes negative, we have more closing brackets than opening ones
        if (balance < 0) {
          return 0;
        }
      }
    }
  
    // If balance is zero, all brackets are matched correctly
    return balance === 0 ? 1 : 0;
  }
  
  // Test cases
  console.log(BracketMatcher("(coder)(byte))")); // Output: 0
  console.log(BracketMatcher("(c(oder)) b(yte)")); // Output: 1
  console.log(BracketMatcher("(hello (world))")); // Output: 1
  console.log(BracketMatcher("((hello (world))")); // Output: 0
  console.log(BracketMatcher("no brackets here")); // Output: 1
  
  
  
  
  
  
  
  
  
  
  