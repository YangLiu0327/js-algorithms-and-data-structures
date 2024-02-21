
// Linear Search Exercise
// Write a function called linearSearch which accepts an array and a value,
//  and returns the index at which the value exists. 
// If the value does not exist in the array, return -1.

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(linearSearch([1, 2, 3], 5))
