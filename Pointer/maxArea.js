// 0011 M Container With Most Water

// 双指针,贪心 头尾指针,每次移动比较小的

//思路： 双指针求最大面积，长是双指针差，高取小的值
var maxArea = function(height) {
  let left = 0;
  let right = height.length -1;
  let result = 0;
  while(left < right) {
    result = Math.max(result, (right -left) * Math.min(height[left], height[right]));
    if(height[left] > height[right]) {
        right--;
    } else {
        left++;
    }
  }
  return result;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))