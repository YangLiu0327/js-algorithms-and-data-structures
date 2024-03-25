// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

function lengthOfLastWord(str) {
    let newStr = str.split(' ').filter((i) => i !== '').join(' ')
   for (let i=newStr.length -1; i > 0; i--) {
    if(newStr[i] === ' ') {
        return newStr.length -1 - i
    }
   }
   return newStr.length
}

console.log(lengthOfLastWord("luff"))