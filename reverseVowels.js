// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', 
// and they can appear in both lower and upper cases, more than once.


function reverseVowels(s) {
    s = s.split("")
    let vowelsArray = [];
    let vowelsIndex = [];
    for(let i =0; i<s.length; i++) {
        if(["a","e","i","o","u", "A", "E", "I", "O", "U"].includes(s[i])){
            vowelsArray.push(s[i]);

            vowelsIndex.push(i);
        }
    }
    let reverseArray = vowelsArray.reverse()
    for(let j = 0; j<vowelsArray.length; j++) {
        s[vowelsIndex[j]] = reverseArray[j]
    }
  return s.join("");
}

console.log(reverseVowels("leetcode"))
