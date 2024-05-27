// 0128 Longest Consecutive Sequence M 哈希,并查集

// nums [100, 4, 200, 1, 3, 2] output 4, [1, 2, 3, 4]
// 思路 array 变成set， 随机抽一个数字， 不断去找比这个数字小一，大一的做差
// 考虑到了时间复杂度 要一直用set

var longestConsecutive = function(nums) {
    // remove dupliates
   nums = new Set(nums);
   let result = 0;
   while (nums.size > 0) {
    // 相当于随机抽取一个
    let current = nums.values().next().value;
    nums.delete(current);
    let smaller = current -1;
    while(nums.has(smaller)) {
        nums.delete(smaller);
        smaller--
    }
    let larger = current +1;
    while(nums.has(larger)) {
        nums.delete(larger);
        larger++
    }

    result = Math.max(result, larger - smaller -1)
   }
   return result;
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))