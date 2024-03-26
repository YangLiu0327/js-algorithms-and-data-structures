// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, 
// such that there is a bijection between a letter 
// in pattern and a non-empty word in s.

function wordPattern(pattern, s) {
    let arr = s.split(" ")
    let obj = {}
    let obj2 = {}
    if(arr.length !== pattern.length) return false;

    for(let i =0; i<pattern.length; i++) {
        let char1 = pattern[i];
        let char2 = arr[i];

        if ((obj[char1] && obj[char1] !== char2) || (typeof obj2[char2] !== 'function') && (obj[char1] && obj2[char2] !== char1)) {
            return false;
        }
        obj[char1] = char2;
        obj2[char2] = char1;
    }

    if(Object.values(obj).length !== Object.values(obj2).length) return false
    return true;
}

console.log(wordPattern("abc", "dog cat dog"))