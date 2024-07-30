// For this challenge you will find the first non-repeating character in a string.
// have the function NonrepeatingCharacter(str) take the str parameter being passed, which will contain only alphabetic characters and spaces, and return the first non-repeating character. For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one character and there will always be at least one non-repeating character. 



function NonrepeatingCharacter(str){
    const charCount={};
    for(let char of str){
        if(char!==' '){
        if(charCount[char])
        {
            charCount[char]++;
        }else{
            charCount[char]=1;
        }
        }
    }
    for(let char of str){
        if(char!==' ' && charCount[char]===1){
            return char;
        }
    }
    return '';
    }
    console.log(NonrepeatingCharacter('agettkgaeee'));