// 1. addUpto
function addUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
// console.log(addUpto(3))

// refactor
function newAddUpto(n) {
  return (n * (n + 1) / 2)
}
// console.log(newAddUpto(3))

// 2. count up and down
function countUpAndDown(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
  console.log("-----------")
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
}
// console.log(countUpAndDown(6))

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j)
    }
  }
}
// console.log(printAllPairs(3))


function atLeast5(n) {
  for (let i = 0; i <= Math.max(5, n); i++) {
    console.log(i)
  }
}
// console.log(atLeast5(2));

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return total;
}
// console.log(sum([1, 2, 5]))

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }
  return newArr;
}
console.log(double([1, 2]))

