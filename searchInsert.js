// Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return 
// the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



function searchInsert(nums, target) {
    if(nums.indexOf(target) !== -1) return nums.indexOf(target)
    for (let i = 0; i<nums.length; i++) { 
    if(target <= nums[0]) return 0;
    if(target >= nums[nums.length -1]) return nums.length;
    if(target > nums[i] && target < nums[i + 1]) {
        console.log(222)
        return i + 1
    }
}
}

console.log(searchInsert([1,3,5,6], 5))