
// For two strings s and t, we say "t divides s" if and only i
// f s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the 
// largest string x such that x divides both str1 and str2.
function gcdOfStrings(str1, str2) {
    console.log(str1 + str2)
    console.log(str2 + str1)
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    function gcd(a,b) {
        return b === 0 ? a : gcd(b, a%b)
    }
    const len1 = str1.length;
    const len2 = str2.length;
    const divisor = gcd(len1, len2);
    return str1.slice(0, divisor)
 
}

console.log(gcdOfStrings("ABCABC", "ABC"))