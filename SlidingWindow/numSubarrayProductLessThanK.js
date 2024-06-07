// 0713 M Subarray Product Less Than K 
var numSubarrayProductLessThanK = function(nums, k) {
    if(k === 0) return 0;
    let result = 0;
    let currentProduct = 1;
    let left = 0;
    for(let right = 0; right < nums.length; right++) {
        currentProduct *= nums[right];

        while(left <= right && currentProduct >= k) {
            currentProduct /= nums[left];
            left++
        }
        result += right + 1 - left;
    }
    return result;
}

console.log(numSubarrayProductLessThanK([10,5,2,6], 100));