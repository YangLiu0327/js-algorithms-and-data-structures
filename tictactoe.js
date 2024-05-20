// 1275 Find Winner on a Tic Tac Toe Game

var tictactoe = function(moves) {

    let A = Array(8).fill(0);
    let B = Array(8).fill(0);

    for(let i=0; i<moves.length; i++) {
        let [r, c] = moves[i];
        let player = i % 2 === 0 ? A : B;
        player[r]++;
        player[c+3]++
        if(r === c) {
            player[6]++
        }
        if( r === 2-c) {
            player[7]++
        }
    }

    for(let i =0; i<8; i++) {
        if(A[i] === 3) {
            return 'A'
        }
        if(B[i] === 3) {
            return 'B'
        }
    }
    return moves.length === 9 ? 'Draw' : 'Pending'
}

// console.log(tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]))



var reformatDate = function(date) {
    let newDay = date.split(" ")[0].slice(0, -2)
    if(newDay.length ===1 ) {
        newDay =  0+newDay
    }
    console.log(newDay)
    let monthMap = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12"
    }
    let newMonth = monthMap[date.split(" ")[1]]
    let newYear = date.split(" ")[2]
    return `${newYear}-${newMonth}-${newDay}`
}


// console.log(reformatDate("2th Oct 2052"))

//70. Climbing Stairs

var climbStairs = function(n) {
  if(n ===1) return 1; 
  let step = new Array(n+1);
  step[1] = 1;
  step[2] = 2;

  for(let i=3; i<=n; i++) {
    step[i] = step[i-1] + step[i-2];
    console.log(step[i])
  }
  return step[n];
}

// console.log(climbStairs(3))

//0509 Fibonacci Number
// f(0) = 0, f(1) =1
// f(n) = f(n-2) + f(n-1), for n > 1


var fib = function(n){
  let array = [];
  array[0] = 0;
  array[1] = 1;

  for(let i=2; i<=n;i++) {
    array[i] = array[i-2] + array[i-1];
  }
  return array[n]
}

// console.log(fib(4))


// 121 Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0];
  for(let i =0; i<prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
    return max;
}

// console.log(maxProfit([7,1,5,3,6,4])) // buy 1, sell 6, profit 5


// 0088 Merge Sorted Array
// here is not change nums1
function merge(nums1, m, nums2, n) {
    let array = [];
    return array = nums1.concat(nums2).sort().filter(item => item !==0)
}


function newMerge(nums1, m, nums2, n) {
    for(let i =0; i<n; i++) {
        nums1[i+m] = nums2[i]
    }
    nums1.sort((a,b) => a-b);
    console.log(nums1)
}

// console.log(newMerge([1,2,3,0,0,0], 3, [2,5,6], 3))

// function merge(nums1, m, nums2, n) {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;
    
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k--] = nums1[i--];
//         } else {
//             nums1[k--] = nums2[j--];
//         }
//     }
    
//     while (j >= 0) {
//         nums1[k--] = nums2[j--];
//     }
// }


//0125 Valid Palindrome

var isPalindrome = function(s) {
 let newStr = s.toLowerCase().replace(/[^a-z0-9]/g , '')
 let left = 0;
 let right = newStr.length-1;
 while(left < right) {
    if(newStr[left] !== newStr[right]) {
        return false;
    } else {
       left++;
       right--;
    }
 }
 return true
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"))


// 278 First Bad Version

var solution = function() {
    function isBadVersion(n) {
        if(n<=3) {
            return false;
        } else {
            return true;
        }
    }    
   return function (n) {
       let left = 0;
       let right = n;
       while(left < right) {
        let mid = Math.floor((left + right) / 2);
        if(isBadVersion(mid) === true) {
            right = mid;
        }else {
            left = mid + 1;
        }
       }
       return left;
    }
}

const findFirstBadVersion = solution()

// console.log(findFirstBadVersion(5))


// 283 move zeros
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeros = function(nums) {
   let zeroArray = nums.filter((num) => num === 0);
   let newArr = nums.filter((num) => num !== 0)
   nums.length = 0;
   nums.push(...newArr, ...zeroArray)
   return nums;
}
// console.log(moveZeros([0,1,0,3,12]))

// 0392 Is Subsequence 双指针,DP

var isSubsequence = function(s,t) {
   let i =0;
   let j =0;
   while(i<s.length && j<t.length) {
    if(s[i] === t[j]) {
        i++;
    }
    j++;
   }
   return i === s.length;
}
// console.log(isSubsequence("abc", "ahbgdc"))
// 我以前这样写的
var newisSubsequence = function(s, t) {
    for(let i =0; i<s.length; i++) {
        if(!t.includes(s[i])) return false;
        let index = t.indexOf(s[i]);
        t = t.slice(index+1);
    }
    return true;
}
// console.log(newisSubsequence("axc", "ahbgdc"))

// 0680
// Valid Palindrome II

var validPalindrome = function(s) {
    let left = 0;
    let right = s.length -1;
    while(left < right) {
       if(s[left] === s[right]) {
        left++;
        right--;
       } else {
        let leftString = s.slice(0, left) + s.slice(left+1);
        let rightString = s.slice(0,right) + s.slice(right+1);
        return (isPalindrome(leftString) || isPalindrome(rightString))
       }
    }
    return true;
}

console.log(validPalindrome("abc"))
