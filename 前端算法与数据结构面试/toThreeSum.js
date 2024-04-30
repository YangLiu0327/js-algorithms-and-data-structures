// 思路： 1. 求和转化为 求差 2. map 记录访问的值 3.每遍历到新的数字时在map中找 targetNum 与该数的差值

function twoSum(nums, target) {
    const seen = {};
    for(let i =0; i<nums.length; i++) {
        if(seen[target - nums[i]] !== undefined) { // 差值是否存在过
            return [seen[target - nums[i]], i] 
        }
        seen[nums[i]] = i // 在seen 里 塞入看过的值
    }
}

// console.log(twoSum([2, 7, 11, 15], 9))

// 强大的双指针法
// 合并2个有序数组
// 示例: 输入:
// nums1 = [1,2,3], m = 3
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]
const merge = function(nums1, nums2) {
    let i = nums1.length -1;
    let j = nums2.length -1;
    let k = nums1.length + nums2.length -1;
    while(i>=0 && j >=0) {
        if(nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i]
            i--;
            k--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }
    while(j>=0) {
        nums1[k] = nums2[j]
        k--;
        j--;
    }
    return nums1;
}
const newMerge = (nums1, nums2) => {
    return newArr = nums1.concat(nums2)
}
// console.log(newMerge([1,2,3], [2,5,6]))

// 三数求和问题
// 示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 
// 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
// 思路：求和变成 求差 -》 固定一个数，去找另外2个数

const toThreeSum = (nums) => {
    const result = [];
    nums = nums.sort((a, b) => {
        return a -b;
    })
    for(let i =0; i<nums.length-2; i++) {
        let left = i + 1;
        let right = nums.length -1;
        if(i>0 && nums[i] === nums[i-1]) {
            // 遇到重复的数字跳过去
            continue;
        }
        while(left < right) {
            if(nums[i]+ nums[left] + nums[right]< 0) {
                left++;
                //  处理左指针元素重复的情况
                while(left < right && nums[left] === nums[left-1]) {
                    left++;
                }
            } else if(nums[i] + nums[left]+ nums[right] > 0) {
                right--;
                while(left<right && nums[right] === nums[right+1]) {
                    right--;
                }
            } else {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left<right && nums[left] === nums[left-1]) {
                    left++;
                }
                while(left<right && nums[right] === nums[right+1]) {
                    right--;
                }
            }
        }
    }
    return result;
}
// console.log(toThreeSum([-1, 0, 1, 2, -1, -4]))