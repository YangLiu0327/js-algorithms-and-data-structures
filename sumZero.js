// write a function call sumZero which accepts a sorted array of integers.
// the function should find the first parir where the sum is 0, Return an array 
// that includes both values that sum to zero or undefined if a pair does not exist

// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
// sumZero([-2, -1, 3]) // undefined
// sumZero([1, 2, 3]) // undefined

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]))