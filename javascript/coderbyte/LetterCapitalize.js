// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

function LetterCapitalize(str){
    
    return str.replace(/(^|\s)[a-z]/,(m)=> m.toUpperCase())
}
console.log(LetterCapitalize('Hello World abc'));