// 844. Backspace String Compare
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s,t) {
  let resultS = [];
  let resultT = [];
  
  for(let i=0; i<s.length; i++) {
    if(s[i] !=='#') {
        resultS.push(s[i])
    } 
    if(s[i] === '#' && resultS.length > 0) {
        resultS.pop()
    }
  }

  for(let j=0; j<t.length; j++) {
    if(t[j] !== '#') {
        resultT.push(t[j])
    }
    if(t[j] === '#' && resultT.length>0) {
        resultT.pop()
    }
  }
  
  if(resultS.length !== resultT.length) return false;
  if(resultS.length === 0) return true;
  for(let i =0; i<resultS.length; i++) {
    if(resultS[i] !== resultT[i]) return false;
    return true;
  }
}
// console.log(backspaceCompare("a#c", "b"))
var newbackspaceCompare = function(s,t) {
    function process(s) {
        let result = [];
        for(let i=0; i<s.length; i++) {
            if(s[i] !== '#') {
                result.push(s[i])
            }
            if(s[i] === '#' && result.length >0) {
                result.pop();
            }
        }
        return result.join('')
    }
    return process(s) === process(t)
}
// console.log(newbackspaceCompare("ab##", "c#d#"))


// 2089  同34
// Find Target Indices After Sorting Array
var targetIndices = function(nums, target) {
   let result = [];
   let newNums = nums.sort((a,b) => a-b);
   for(let i =0; i<newNums.length; i++) {
    if(newNums[i] == target) {
        result.push(i)
    }
   }
   return result;
}

// console.log(targetIndices([1,2,5,2,3], 50))

// 0414 Third Maximum Number 排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let set = new Set(nums);
    let arr = [...set];
    arr = arr.sort((a,b) => b-a);
    if(arr.length >=3) {
        return arr[2]
    } else {
        return arr[0]
    }
}
// console.log(thirdMax([3,2,1]))
 

//20. Valid Parentheses 栈
// Input: s = "()"
// Output: true
// Input: s = "()[]{}"
// Output: true
// Input: s = "(]"
// Output: false


var isValid = function(s) {
    let stack = [];
    let map = {
        ")": "(",
        "]": "[",
        "}": "{",
    }
    for(let i=0; i<s.length; i++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{') {
            stack.push(s[i]);
        } else {
            if(map[s[i]] !== stack.pop()) {
                return false;
            }
        }
    }
    console.log(stack)
    return stack.length === 0;
}
// console.log(isValid("([{[[}]]}])"))


// 724 Find Pivot Index
// var pivotIndex = function(nums) {
//     let prefix = [0];
//     let curr = 0;

//     for(let i =0; i<nums.length;i++) {
//         curr+= nums[i];
//         prefix.push(curr)
//     }
//     console.log(prefix,'prefix')
//     let n = nums.length;
//     for(let j=0; j<n; j++) {
//         let leftSum = prefix[j];
//         let rightSum = prefix[n] - leftSum - nums[j]
//         if(leftSum === rightSum) {
//             return j
//         }
//     }
//     return -1;
// }
// 思路：left 0，全给右边，然后在for loop 判断相等 右减左加 

var pivotIndex = function(nums) {
   let leftSum =0;
   let rightSum = nums.reduce((a,b) => a+b, 0); // 28

   for(let i =0; i<nums.length; i++) {
    rightSum -= nums[i]; // 27 20, 17, 11
    if(rightSum === leftSum) { // 0==27?, 1==20? 8==17? 11==11
        return i
    } 
    leftSum += nums[i]; // 1 8 11
   }
   return -1;
}
console.log(pivotIndex([1,7,3,6,5,6]))