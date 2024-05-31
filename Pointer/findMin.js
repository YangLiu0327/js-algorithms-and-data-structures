// 0153 M
/**
 * @param {number[]} nums
 * @return {number}
 */
// nums = [0,1,2,4,5,6,7]
// 1 [7,0,1,2,4,5,6]
// 2 [6,7,0,1,2,4,5]
// 3 [5,6,7,0,1,2,4]
// 4 [4,5,6,7,0,1,2]
var findMin = function(nums) {
    // return Math.min(...nums)

    let left = 0;
    let right = nums.length - 1;
    let result = nums[0];

    while(left<=right) {
        let mid = left + Math.floor((right - left) / 2);
        // left side strictly increasing
        if(nums[mid] >= nums[left]) {
            result = Math.min(result, nums[left]);
            left = mid + 1;
        }
        // right side strictly increasing
        else {
            result = Math.min(result, nums[mid]);
            right = mid - 1;
        }
    }
    return result;
}

console.log(findMin([4,5,6,7,0,1,2]))