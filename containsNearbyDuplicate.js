// Given an integer array nums and an integer k, 
// return true if there are two distinct indices i and j in 
// the array such that nums[i] == nums[j] and abs(i - j) <= k.

function containsNearbyDuplicate(nums, k) {
  let seen = new Set() // empty
  for(let i =0; i<nums.length; i++) {
    if(seen.has(nums[i])) {
      return true;
    }
    seen.add(nums[i])
    if(seen.size > k) {
      seen.delete(nums[i-k])
    }
  }
  return false
}

console.log(containsNearbyDuplicate([1,0,1,1, 2], 1))