function BracketCombinations(num) {
    let factorial=(n)=>{
      let f=1
      for(i=1;i<=n;i++){
        f=f*i
      }
      return f
    }
  
    const result=factorial(num*2)/(factorial(num+1)*factorial(num))
    
    return result
    }
  
  // Test cases
  // keep this function call here 
  console.log(BracketCombinations(readline()));