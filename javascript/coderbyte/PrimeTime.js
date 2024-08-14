//  have the function PrimeTime(num) take the
//   num parameter being passed and return the string true if the parameter 
//  is a prime number, otherwise return the string false. The range will be 
//  between 1 and 2^16. 

// solution
// We iterate from 2 up to the square root of num (inclusive). This reduces the number of iterations significantly, especially for larger numbers.

function PrimeTime(num){
    if (num < 2) return "false";
   for(i=2;i<=Math.sqrt(num);i++){
       if(num%i==0)
            return false
   }
   return true
}
console.log(PrimeTime(5));