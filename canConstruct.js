// Given two strings ransomNote and magazine, return true if ransomNote
// can be constructed by using the letters from magazine 
// and false otherwise.

function canConstruct(ransomNote, magazine) {
    // for(let i =0; i<ransomNote.length; i++) {
    //     let char = ransomNote[i];
    //     if(!magazine.includes(char)) {
    //         return false;
    //     }
    //     magazine = magazine.replace(char, "1")
    //     console.log(magazine)
    // }
    // return true;

    const obj = {}
    for (let char of magazine) {
        obj[char] = (obj[char] || 0) + 1
    }
    for(let char of ransomNote) {
        if(!obj[char] || obj[char]=== 0) {
            return false;
        }
        obj[char]--
    }
    return true;
}
console.log(canConstruct("aabbbb", "aabbc"))