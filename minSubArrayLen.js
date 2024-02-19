function minSubArrayLen(arr, val) {
  if (arr.length === 0) return 0;

  let minLen = Infinity;
  let currentSum = 0;
  let start = 0;
  let end = 0;

  while (end < arr.length) {
    currentSum += arr[end];
    end++
    while (currentSum >= val) {
      minLen = Math.min(minLen, end - start);
      currentSum -= arr[start];
      start++
    }
  }
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))