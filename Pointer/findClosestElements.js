// 0658 M Find K Closest Elements
// most closed to x elment i
var findClosestElements = function(arr, k, x) {
    let left = 0;
    let right = arr.length -1;
    // 将范围缩减到正好是k个元素
    while (right - left >= k) {
      if (Math.abs(arr[left] - x) > Math.abs(arr[right] -x)) {
        left++
      } else {
        right--;
      }
    }
    return arr.slice(left, right + 1)
}

console.log(findClosestElements([1,2,3,4,5], 4, 3));