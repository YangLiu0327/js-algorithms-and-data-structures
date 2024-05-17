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

//697. Degree of an Array

// Input: nums = [1,2,2,3,1]
// Output: 2

//思路： 记录每个元素的频率， 最先出现的位置 和最后出现的位置, 根据频率降序 根据数组的长度生序
function findShortestSubArray(nums) {
  let obj = {}
  for (let i = 0; i<nums.length; i++) {
    let char = nums[i];
    obj[char] = (obj[char] || 0) + 1
  }
  console.log(obj, 'obj')
  //最多的出现次数 value 
  let values = Object.values(obj);
  let maxNumber = Math.max(...values);
  // [1,2]
  let keysWithMaxNumber = Object.keys(obj).filter(key => obj[key] === maxNumber);
  let result = [];
  for(let i =0; i<keysWithMaxNumber.length; i++) {
    let indexes = nums.map((num, index) => num == keysWithMaxNumber[i] ? index: -1)
    .filter(index => index !== -1)
    result.push(indexes[indexes.length -1] - indexes[0] + 1)    
  }
  return Math.min(...result)
}
function newfindShortestSubArray (nums) {
  const countMap = {};
  nums.forEach(num => countMap[num] = (countMap[nums] || 0) + 1);
  const maxCount = Math.max(...Object.values(countMap));
  const maxElements = Object.keys(countMap).filter(key => countMap[key] === maxCount);
  const result = maxElements.map(el => {
    const indexes = nums.map((num, index) => num == el ? index : -1).filter(index => index === -1)
    return indexes[indexes.length - 1] - indexes[0] + 1;
  })
  return Math.min(...result);
}
// console.log(newfindShortestSubArray([1,2,2,3,1,4,2]));


function test(arr){
  let temp = arr[0]; 
  let x = "hello"
  temp = x;
  arr[1] = temp;
  arr.unshift(temp)
  return arr;
}

// function test0(arr) {
//   let temp = arr[0];
//   let x = "test"
//   temp = x;
//   arr[1] = temp;
//   arr.unshift(temp)
// }
 
// console.log(test(['a', 'b']))

// function test1(...arr) {
//   const set = new Set(arr);
//   return set;
// }
// const name1 = "anna";
// const name2 = "sam";
// const name3 = "alex";

// console.log(test1(name1, name2, name3, "anna"))

// function test2(a, b) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(a+b)
//     }, 1000)
//   })
// }
// test2(1,2)
// console.log(test2(1, 2)) //  Promise pending
// test2(1,2).then(result => {
//   console.log(result)
// })

class test3 {
  name; // Declare the name property
  constructor(name) {
    this.name = name;
  }
  greeting(){
    return "hi " + this.name;
  }
}

const a = new test3('alex'); // providing a name alex when creating an instance
a.greeting()
console.log(a.greeting())


// function test5(arr) {
//   const m = new Map();
//   console.log(m)
//   for (let i =0; i<arr.length; i++) {
//     let num = m.get(arr[i]) || 0;
//     m.set(arr[i], num+1)
//   }
//   console.log(m)
// }
// test5([1,2,3,4])



function test30(a) {
	return Math.round(a * 1000) / 1000;
}

console.log(test30(1.68789))

// function test4(str) {
//   return Math.max(...str.split(' ').map(word => word.length))
// }
// console.log(test4('hi world'))

function test5(arr) {
  const m = new Map();
  for (let i =0; i<arr.length; i++) {
    let num = m.get(arr[i]) || 0;
    m.set(arr[i], num+1)
  }
  return m;
}
console.log(test5([1,2,3,4, 1]))

// const promiseExample = new Promise((res, rej) => {
//   setTimeout(() => {
//     const data = 'Promise resolved!'
//     res(data)
//   }, 2000)
// })

// promiseExample.then((res) => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// function test11(a, b) {
//   return a % b === 0
// }