// 0034 M 
// Find First and Last Position of Element in Sorted Array
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let result = [-1,-1];

    // helper functin to find the first occurence
    function findFirst (nums, targer) {
        let left = 0;
        let right = nums.length -1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] >= target) {
                right = mid -1;
            } else {
                left = mid +1;
            }
            if(nums[mid] === targer) {
                result[0] = mid;
            }
        }
    }

    function findLast(nums, target){
        let left = 0;
        let right = nums.length -1;
        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            if(nums[mid] <= target) {
                left = mid +1;
            } else {
                right = mid -1;
            }
            if(nums[mid] === target) {
                result[1] = mid;
            }
        }
    }

    findFirst(nums, target);
    findLast(nums, target);
    return result;
}

console.log(searchRange([5,7,7,8,8,10],8))