//0162
// Find Peak Element M 

var findPeakElement = function(nums) {
    // return nums.indexOf(Math.max(...nums));

    // or
    if(nums.length ===1) return 0
    let left = 0;
    let right = nums.length -1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(nums[mid] > nums[mid+1]) {
            right = mid -1;
        } else  {
            left = mid + 1;
        }
    }
    return left;
}

console.log(findPeakElement([1,2,3,1]));