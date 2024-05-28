// 2217 M Find Palindrome With Fixed Length
// 不能理解
var kthPalindrome = function(queries, intLength) {
    // helper function
    const isPalindrome = (num) => {
        return num.toString() === num.toString().split('').reverse().join('');
    }

    const palindromes = [];

    for(let i= Math.pow(10, intLength-1); i< Math.pow(10, intLength); i++) {
        if(isPalindrome(i)) {
            palindromes.push(i);
        }
    }
    const result = [];
    for(const query of queries) {
        if(query <= palindromes.length) {
            result.push(palindromes[query-1])
        } else  {
            result.push(-1)
        }
    }
    return result;
};

console.log(kthPalindrome([1,2,3,4,5,90], 3))