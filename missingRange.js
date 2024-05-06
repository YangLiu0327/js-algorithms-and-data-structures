// 0163
// missing range
// Input: nums = [0,1,3,50,75], lower = 0, upper = 99
// Output: [[2,2],[4,49],[51,74],[76,99]]

function missingRange(nums, lower, upper) {
  let result = [];
  if(nums.length === 0) return [[lower, upper]]
  // add the lower range
  if(nums[0] > lower) {
    result.push([lower, nums[0] -1])
  }
  for(let i =0; i<nums.length -1; i++) {
    if(nums[i] + 1 !== nums[i+1]) {
        result.push([nums[i] + 1, nums[i+1] -1])
    }
  }
  if (nums[nums.length - 1] < upper) {
    result.push([nums[nums.length - 1] + 1, upper]);
  }
  return result;
}
// [ 2, 4, 51, 76 ]
// [[2,2],[4,49],[51,74],[76,99]]
// console.log(missingRange([0,1,3,50,75], -2, 99))

function isHappy(n) {
    let seen = new Set();
    seen.add(n);

    while(true) {
        let currenSum = 0;
        while(n >=10) {
            currenSum += Math.pow(n % 10, 2); //　计算个位数的平方和
            n = Math.floor(n / 10); // 向下取整
        }
        currenSum += Math.pow(n, 2) 
        if (currenSum === 1) {
            return true;
          } else if (seen.has(currenSum)) {
            return false;
          }
      
          n = currenSum;
          seen.add(n);
    }
}
// console.log(isHappy(19))


function addString (num1, num2) {
 let arr1 = num1.split('').reverse();
 let arr2 = num2.split('').reverse();

 let result = [];
 let carry  = 0;
 for(let i =0; i<Math.max(num1.length, num2.length); i++) {
    let sum = (parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0)  + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
 }
 if(carry > 0) {
    result.push(carry)
 }
 return result.reverse().join('')
}

// console.log(addString('1223', '555'))
