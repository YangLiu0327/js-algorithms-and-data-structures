// 0163
// missing range
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

function missingRange(nums, lower, upper) {
  let result = [];
  if(nums.length === 0) return [[lower, upper]]
  // add the lower range
  if(nums[0] > lower) {
    result.push([lower, nums[0] -1])
  }
  for(let i =0; i<nums.length -1; i++) {
    if(nums[i] + 1 !== nums[i+1]) {
        result.push([nums[i] + 1, nums[i+1] -1])
    }
  }
  if (nums[nums.length - 1] < upper) {
    result.push([nums[nums.length - 1] + 1, upper]);
  }
  return result;
}
// [ 2, 4, 51, 76 ]
// [[2,2],[4,49],[51,74],[76,99]]
console.log(missingRange([0,1,3,50,75], -2, 99))