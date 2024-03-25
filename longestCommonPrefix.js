// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

function longestCommonPrefix(arr) {
  let prefix = ''
  let firstStr = arr[0];
  for(let i =0; i<firstStr.length; i++) {
    let char = firstStr[i]
    for(let j =1; j<arr.length; j++) {
        let otherStr = arr[j];
        if(otherStr[i] !== char) {
            return prefix;
        }
    }
    prefix+= char
  }
  return prefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))