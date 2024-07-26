/*Using the JavaScript language, have the function Division(num1,num2)
take both parameters being passed and return the Greatest Common Factor.
That is, return the greatest number that evenly goes into both numbers with no remainder. 
For example: 12 and 16 both are divisible
by 1, 2, and 4 so the output should be 4. The range for both parameters will be from 1 to 10^3. */
// Method 1:
function Division(num1,num2) {
    for(i=num1;i>0;i--){
        if(num1%i==0 && num2%i==0)
              return i;
    }
  }
  console.log(Division(12, 16)); 
  // Method 2:
  function Division2(num1,num2) {
      const gcf=(a,b)=>{
          while(b!=0){
              let temp=b;
              b=a%b;
              a=temp
          }
          return a
      }
      return gcf(num1,num2)
  }
  
  // Test cases
  console.log(Division2(12, 16)); 
  
  