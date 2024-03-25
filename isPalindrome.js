// Two Pointers
// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters
//  into lowercase letters and removing all non-alphanumeric characters, 
//  it reads the same forward and backward.
//  Alphanumeric characters include letters and numbers.

function isPalindrome(s) {
  let newStr = s.toLowerCase().replace(/[^a-z]/g, '')
  let left = 0;
  let right = newStr.length - 1;
  while (left < right) {
    if(newStr[left] !== newStr[right]) {
        return false;
    } else {
        left++;
        right--;
    }
  }
  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))