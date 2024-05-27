// 0334 Increasing Triplet Subsequence M 数组,贪心
// i < j < k  && nums[i] < nums[j] < nums[k] return true 

// 思路： 找第一最小的值， 第二最小的值， 如果有一个比两者都大的就存在这样一个三元组
 var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;

    for(let num of nums) {
        if(num <= first) {
            first = num; // update first value 2 1
        } else if(num <= second) { // 5
            second = num;  
        } else  {
            // found a number large than first and second
            return true;
        }
    }
    return false;
 }

 console.log(increasingTriplet([2,1,5,6]))