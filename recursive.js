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
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
console.log(factorial(4))