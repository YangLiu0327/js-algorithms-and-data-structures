// reverse
// Write a recursive function called reverse which accepts a
//  string and returns a new string in reverse.

function reverse(str) {
  return str.split('').reverse().join('');
}
// console.log(reverse('123'))

// isPalindrome
// Write a recursive function called 
// isPalindrome which returns true if the string passed 
// to it is a palindrome(reads the same forward and backward).
// Otherwise it returns false.

function isPalindrome(str) {
  if (str.length <= 1) return true;
  let firstChar = str[0];
  let lastChar = str[str.length - 1];
  if (firstChar !== lastChar) return false;
  return isPalindrome(str.slice(1, -1))
}
// console.log(isPalindrome('tacocat'))


// someRecursive
// Write a recursive function called someRecursive 
// which accepts an array and a callback. 
// The function returns true if a single value in the array returns true 
// when passed to the callback. Otherwise it returns false.