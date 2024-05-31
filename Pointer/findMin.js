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
    return Math.min(...nums)
}

console.log(findMin([4,5,6,7,0,1,2]))