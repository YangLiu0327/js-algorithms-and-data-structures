// Given a string s and an integer k, 
// return the maximum number of vowel letters in any substring of s with length k.

// Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

// function maxVowels(s,k) {
//   let tempSum = 0;
//   let totalSum = 0;
//   let tempArr = [];
//   let tempStr = '';
//   for(let i = 0; i< k; i++) {
//     tempStr += s[i]
//     tempArr =  tempStr.split("")
//   }
//   tempSum = tempArr.filter((i) => ["a", "e", "i", "o", "u","A", "E", "I","O", "U"].includes(i)).length
//   totalSum = tempSum;

//   for(let i =k; i<s.length; i++){
//     tempStr = s.slice(i-k+1, i+1)
//     console.log(tempStr)
//     tempSum = tempStr.split("").filter((i) => ["a", "e", "i", "o", "u","A", "E", "I","O", "U"].includes(i)).length
//     totalSum = Math.max(tempSum, totalSum)
//   }
//   return totalSum;
// }


function maxVowels(s, k) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let maxCount = 0;
    let tempCount = 0;
    for(let i =0; i<k; i++) {
        if(vowels.has(s[i])) {
            tempCount++;
        }
    }

    maxCount = tempCount;

    for(let i =k; i<s.length; i++) {
        if(vowels.has(s[i-k])) {
            tempCount--;
        }
        if(vowels.has(s[i])) {
            tempCount++;
        }
        maxCount = Math.max(maxCount, tempCount)
    }

    return maxCount;
}

console.log(maxVowels("abciiidef", 3))