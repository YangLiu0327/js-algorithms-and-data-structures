// 0209 Minimum Size Subarray Sum
var minSubArrayLen = function(target, nums) {
    let left = 0;
    let right = 0;
    let currentSum = 0;
    let result = Number.POSITIVE_INFINITY;

    while(right < nums.length) {
        //右窗前移
        while(currentSum < target && right < nums.length) {
            currentSum += nums[right];
            right++;
        }
        while(currentSum >= target) {
            result = Math.min(result, right - left);
            currentSum -= nums[left];
            left++;
        }
    }
    if(result === Number.POSITIVE_INFINITY) return 0;
    return result;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))