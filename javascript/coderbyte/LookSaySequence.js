
/*Using the JavaScript language, have the function LookSaySequence(num) 
take the num parameter being passed and return the next number in the sequence
according to the following rule: to generate the next number in a sequence read 
off the digits of the given number, counting the number of digits in groups of 
the same digit. For example, the sequence beginning with 1 would be: 1, 11, 21, 1211, ...
The 11 comes from there being "one 1" before it and the 21 
comes from there being "two 1's" before it. So your program should return the next number in the sequence given num. */

function LookSaySequence(num) { 
    // Convert the number to a string
    const strNum = num.toString();
    let result = '';
    let i = 0;
    
    // Iterate through the digits
    while (i < strNum.length) {
      let count = 1;
      
      // Count the occurrences of the current digit
      while (i + 1 < strNum.length && strNum[i] === strNum[i + 1]) {
        count++;
        i++;
      }
      
      // Append the count and the digit to the result
      result += count.toString() + strNum[i];
      i++;
    }
    
    return parseInt(result);
  }
  console.log(LookSaySequence(11));
  
//   Find the n’th term in Look-and-say (Or Count and Say) Sequence. The look-and-say sequence is the sequence of the below integers: 
// 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, … 
// Returns n'th term in 
// look-and-say sequence


// function countnndSay(n)
// {
    
//     // Base cases
//     if (n == 1)     
//         return "1";
//     if (n == 2)     
//         return "11";
  
//     // Find n'th term by generating 
//     // all terms from 3 to n-1. 
//     // Every term is generated 
//     // using previous term
      
//     // Initialize previous term
//     let str = "11"; 
    
//     for(let i = 3; i <= n; i++)
//     {
        
//         // In below for loop, previous 
//         // character is processed in 
//         // current iteration. That is
//         // why a dummy character is 
//         // added to make sure that loop
//         // runs one extra iteration.
//         str += '$';
//         let len = str.length;
        
//         // Initialize count 
//         // of matching chars
//         let cnt = 1; 
        
//         // Initialize i'th 
//         // term in series
//         let tmp = ""; 
//         let arr = str.split("");
          
//         // Process previous term
//         // to find the next term
//         for(let j = 1; j < len; j++)
//         {
            
//             // If current character
//             // doesn't match
//             if (arr[j] != arr[j - 1])
//             {
                
//                 // Append count of 
//                 // str[j-1] to temp
//                 tmp += cnt;
  
//                 // Append str[j-1]
//                 tmp += arr[j - 1];
  
//                 // Reset count
//                 cnt = 1;
//             }
  
//             // If matches, then increment 
//             // count of matching characters
//             else cnt++;
//         }
  
//         // Update str
//         str = tmp;
//     }
//     return str;
// }

// // Driver Code
// let N = 3;

// document.write(countnndSay(N));
