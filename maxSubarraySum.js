// write a function called maxSubarraySum which accepts an array or integers 
// and a number called n, 
// the function should calcalate the max sum 
// of n consecutive elements in the array

// maxSubarraySum([1,2,5,8,1], 2) // 13
// maxSubarraySum([], 2) // null

// sliding window

function maxSubarraySum(arr, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;

  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 8, 1], 2))