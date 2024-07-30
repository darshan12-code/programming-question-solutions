//  For this challenge you will determine the largest double digit number.
// have the function LargestPair(num) take the num parameter being passed and determine the largest double digit number within the whole number. For example: if num is 4759472 then your program should return 94 because that is the largest double digit number. The input will always contain at least two positive digits. 



function LargestPair(num){
    let numStr=num.toString();
    let maxNum=-1;
    for(i=0;i<=numStr.length;i++){
        pair=parseInt(numStr.substring(i,i+2))
        if(pair>maxNum){
            maxNum=pair
        }
    }
    return maxNum
   }
   console.log(LargestPair(4759472));