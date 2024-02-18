// write a function called same, which accepts two arrays. the function 
// should return true if every value in the array has it's corresponding 
// value squared in the second array, the frequency of the values must be the same

// solution1
// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     let correctIndex = arr2.indexOf(arr1[i] ** 2)
//     if (correctIndex === -1) return false;
//     arr2.splice(correctIndex, 1)
//   }
//   return true;
// }

// console.log(same([1, 2, 3], [1, 4, 9]))

// solution2 
function same(arr1, arr2) {
  let obj1 = {};
  let obj2 = {};

  if (arr1.length !== arr2.length) return false;
  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }
  for (let value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) return false;
    if (obj2[key ** 2] !== obj1[key]) return false;
  }
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]))
