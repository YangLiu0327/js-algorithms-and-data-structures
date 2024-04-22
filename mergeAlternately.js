function mergeAlternately(word1, word2) {
    let newWord = ''
    let maxLength = Math.max(word1.length, word2.length)

    for(let i =0; i<maxLength; i++) {
        if(i<word1.length) {
            newWord += word1[i]
        }
        if(i<word2.length) {
            newWord += word2[i]
        }
    }
 
    return newWord;
}

console.log(mergeAlternately("abc", "pqr"))