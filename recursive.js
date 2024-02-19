// our first recursive function
function countDown(num) {
  if (num <= 0) {
    console.log('All done !')
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// console.log(countDown(5))

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1)
}
// console.log(sumRange(3))
// factorial
// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }
// console.log(factorial(4))

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1)
}
// console.log(factorial(5));


// find all odd value
function collectOdds(nums) {
  var result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(nums);
  return result;
}

console.log(collectOdds([1, 2, 3, 4]))

