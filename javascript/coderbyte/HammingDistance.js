// "Hamming Distance" coderbyte - comparing letters
// The task is to check each letter of 2 words and count 1 for each letter that doesn't match the letter in the second string at the same position.
function HammingDistance(strArr) {
    [word1,word2]=strArr;
    if(word1.length>word2.length){
        [word1,word2]=[word2,word1]
    }
    let count=word2.length-word1.length
    for(i=0;i<word1.length;i++){
        count+= word1[i]!==word2[i]
    }
    return count
    }
    console.log(HammingDistance(["helloworld", "worldhello"]));