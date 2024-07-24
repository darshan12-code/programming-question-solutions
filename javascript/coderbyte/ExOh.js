/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Ex Oh                                                                               *
*  Using the JavaScript language, have the function ExOh(str) take the str parameter   *
*  being passed and return the string true if there is an equal number of x's and o's, *
*  otherwise return the string false. Only these two letters will be entered in the    *
*  string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the    *
*  output should return false because there are 6 x's and 5 o's.                       *
*                                                                                      *
***************************************************************************************/
function ExOh(str) { 
  
    if(str.length%2!==0)
  {
      return false;
  }
  let xCount=0;
  let oCount=0;
  for(let i=0;i<str.length;i++){
      if(str[i]=='x')
      {
          xCount++;
      }else
      if(str[i]=='o'){
          oCount++;
      }
  
  }
    return xCount==oCount;
  }
  // Example usage:
  console.log(ExOh("xooxxxxooxo")); // Output: false
  console.log(ExOh("xoxo")); // Output: true
  console.log(ExOh("xxoo")); // Output: true
  console.log(ExOh("xo")); // Output: true
  console.log(ExOh("xxxxoo")); // Output: false