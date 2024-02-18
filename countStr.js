// push, pop, shift, unshift, 
// concat, slice, splice, sort, forEach, map, filter, reduce

// write a function which takes in a string 
// and return counts of each character in the string

// 这里是一个很经典的思路 
function countStr(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[0-9a-z]/.test(char)) {
      obj[char] = (obj[char] || 0) + 1
    }
  }
  return obj;
}
console.log(countStr('yangtest123'))