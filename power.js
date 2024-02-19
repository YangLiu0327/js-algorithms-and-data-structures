// power
// Write a function called power which accept
// s a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - 
// do not worry about negative bases and exponents.

function power(base, exponent) {
  let value = 1;
  if (exponent === 0) return 1;
  if (exponent === 1) return base;

  value = base * power(base, exponent - 1);
  return value;
}

console.log(power(2, 4))

