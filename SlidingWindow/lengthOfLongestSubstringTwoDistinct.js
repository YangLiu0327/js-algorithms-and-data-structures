// 0159 M 
//Given a string s, find the length of the longest substring t that contains at most 2 distinct characters.

// Input: "eceba"
// Output: 3
// Explanation: The substring is "ece" which its length is 3.

// Input: "ccaabbb"
// Output: 5
// Explanation: The substring is "aabbb" which its length is 5.


var lengthOfLongestSubstringTwoDistinct = function(s) {

    const n = s.length;
    if(n<3) return n;

    // sliding window
    let left = 0;
    let right = 0;
    const hashmap = new Map();
    let maxLen = 2;
    while(right < n) {
        hashmap.set(s[right], right);
        right++;
        
        if(hashmap.size === 3) {
            const delIndex = Math.min(...hashmap.values());
            hashmap.delete(s[delIndex]);
            left = delIndex + 1;
        }
        maxLen = Math.max(maxLen, right -left);
    }
    return maxLen;
}

console.log(lengthOfLongestSubstringTwoDistinct("ccaabbb"))