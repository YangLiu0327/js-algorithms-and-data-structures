// Binary Search Exercise
// Write a function called binarySearch 
// which accepts a sorted array and a value and returns the 
// index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than 
// linearSearch - 

// function binarySearch(arr, value) {
//   let left = 0;
//   let right = arr.length - 1;


//   while (left <= right) {
//     let middle = Math.floor((left + right) / 2)
//     let currentEle = arr[middle]
//     if (value > currentEle) {
//       left = middle + 1
//     } else if (value < currentEle) {
//       right = middle - 1
//     } else {
//       return middle;
//     }
//   }
//   return -1
// }

// Refactored Version
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))