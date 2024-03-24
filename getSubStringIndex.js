// give two string, str1 and str2
// create a function that returns the first index 
// where we can find str2 in str1
// if we cannot find str2 in str1,
// the function must return -1

function findIndex(str1, str2) {
    return str1.indexOf(str2)
}
console.log(findIndex('aabbaaabab', 'aaba')) // 5