// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums 
// is covered by exactly one of the ranges, and there is no integer x such 
// that x is in one of the ranges but not in nums.

function summaryRanges(nums) {
  let endValueArr = [];
  let startValueArr = [];
  let result = "";
  let resultArr = []
  for (let i=0; i<nums.length; i++) {
    let char = nums[i]
    if(!nums.includes(char + 1)) {
        endValueArr.push(char)
    }
    if(!nums.includes(char -1)) {
        startValueArr.push(char)
    }
  }
   for(let i =0; i<startValueArr.length; i++) {
        if(startValueArr[i] === endValueArr[i]) {
            result = String(startValueArr[i])
        } else {
            result = `${startValueArr[i]}->${endValueArr[i]}`
        }
        resultArr.push(result)
   }
   return resultArr;
}

console.log(summaryRanges([0,2,3,4,6,8,9])) //  ["0","2->4","6","8->9"]