// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic 
// if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced 
// with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

function isIsomorphic(s, t) {
    if (s.length !== t.length) {
        return false;
    }
   let obj1= {}
   let obj2 = {}

   for(let i =0; i<s.length; i++) {
    let char1 = s[i];
    let char2= t[i];
    if((obj1[char1] && obj1[char1] !== char2) || (obj2[char2] && obj2[char2] !== char1) ) {
        return false;
    }
    obj1[char1] = char2;
    obj2[char2] = char1;
   }
   return true;
}
console.log(isIsomorphic('bbbaaaba', 'aaabbbba'))