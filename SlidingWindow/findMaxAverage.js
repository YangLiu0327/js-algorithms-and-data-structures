// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.


function findMaxAverage(nums, k) {
    let maxSum = 0;
    let tempsum = 0;
    if(nums.length < k) return null;
    for (let i = 0; i<k; i++) {
        tempsum += nums[i]
    }
    maxSum = tempsum;
    for (let i =k; i<nums.length; i++) {
        tempsum = tempsum - nums[i-k] + nums[i];
        maxSum = Math.max(tempsum, maxSum)
    }
    return maxSum / k;
}

console.log(findMaxAverage([5], 1))