// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

function isValid(s) {
 let stack = [];
 let map = {
    ')': '(',
    '}': '{',
    ']': '['
 }
 for (let i =0; i<s.length; i++) {
    if(s[i]=== '(' || s[i]=== '{' || s[i]=== '[') {
        stack.push(s[i])
    } else {
        if(stack.length === 0 || stack.pop() !== map[s[i]]) {
            return false;
        }
    }
 }
 console.log(22)
 return stack.length === 0;
}

console.log(isValid("(((}]}"))