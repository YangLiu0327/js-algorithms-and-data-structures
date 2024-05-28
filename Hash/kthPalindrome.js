// 2217 M Find Palindrome With Fixed Length
// 不能理解
var kthPalindrome = function(queries, intLength) {
    let firstLeft;
    if (intLength % 2 === 0) {
        firstLeft = "1" + "0".repeat(intLength / 2 - 1);
    } else {
        firstLeft = "1" + "0".repeat(Math.floor(intLength / 2));
    }
    
    let result = [];
    for (const query of queries) {
        let left = String(BigInt(firstLeft) + BigInt(query) - BigInt(1));
        let currResult;
        if (intLength % 2 === 0) {
            currResult = left + left.split('').reverse().join('');
        } else {
            currResult = left + left.slice(0, -1).split('').reverse().join('');
        }
        
        // 注意若不存在, 返回-1
        if (currResult.length > intLength) {
            result.push(-1);
        } else {
            result.push(parseInt(currResult));
        }
    }
    
    return result;
};

console.log(kthPalindrome([1,2,3,4,5,90], 3))