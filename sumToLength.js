function sumToLength(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === arr.length) {
      return [arr[left], arr[right]]
    } else if (sum > arr.length) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumToLength([-9, -8, 2, 3, 13]))