
// given a sorted array of integers, write a function called search,
// that accepts a value and return the index where the value pass to the 
// function is located. if the value is not found, return -1;
// search([1,2,3,4,5], 4) // 3

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentEle = arr[middle];
    if (val > currentEle) {
      min = middle + 1;
    } else if (val < currentEle) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
console.log(search([1, 2, 3, 4, 5, 8, 9, 12, 15, 35, 67], 15))
