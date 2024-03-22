// given a string str made of alph letters only
// create a function that returns the length of
// the longest palindrome string that can be made
// from letters of str

function longestPalindrome(str) {
    let obj = {};
    let oddCount = 0;
    for (let char of str) {
        obj[char] = (obj[char] || 0) + 1;
    }
    for(let count of Object.values(obj)) {
        if(count % 2 !==0) {
            oddCount++
        }
    }
    return str.length - Math.max(oddCount - 1, 0)
}

console.log(longestPalindrome("abbcccddddeeeee"))

// 13