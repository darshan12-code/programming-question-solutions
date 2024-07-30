/***************************************************************************************
*                                                                                      *
*                  CODERBYTE BEGINNER CHALLENGE                                        *
*                                                                                      *
*  Letter Changes                                                                      *
*  Using the JavaScript language, have the function LetterChanges(str) take the str    *
*  parameter being passed and modify it using the following algorithm. Replace every   *
*  letter in the string with the letter following it in the alphabet                   *
*  (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string      *
*  (a, e, i, o, u) and finally return this modified string.                            *

***************************************************************************************/

function LetterChanges(str) { 

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let newStr = "";
    let loc;
  for (let i = 0; i < str.length; i++) {
      loc=alphabet.indexOf(str[i]);
      if(loc===25){
          newStr=newStr+ 'a';
      }else if(loc===-1){
          newStr=newStr+str[i];
      }else{
          newStr=newStr+alphabet[loc+1];
      }
  }
    return newStr.replace(/[aeiou]/g,(letter)=> {return letter.toUpperCase()})
           
  }
  console.log(LetterChanges('aeiou 3^42. / zdhnt z'));