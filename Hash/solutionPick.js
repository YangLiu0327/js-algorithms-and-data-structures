// 0398 Random Pick Index 哈希,随机化,设计
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.map = new Map();
    for(let i=0; i<nums.length; i++) {
        if(!this.map.has(nums[i])) {
            // key is that element, value is null 
            this.map.set(nums[i], []) // { 1 => [] }
        }
        this.map.get(nums[i]).push(i); //{ 1 => [ 0 ] }
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const index = this.map.get(target);
    const randomIndex = Math.floor(Math.random() * index.length);
    return index[randomIndex]

};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

var obj = new Solution([1,2,3,3,3,4]);
console.log(obj.pick(3))