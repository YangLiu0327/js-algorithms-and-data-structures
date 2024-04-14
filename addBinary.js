// 67 add binary
// Given two binary strings a and b, return their sum as a binary string.


// 0+0 =0, 0+1 =1, 1+0=0, 1+1 =0

var addBinary = function(a, b) {
    let carry = 0;
   let result = '';
   let i = a.length - 1;
   let j = b.length - 1;

   while (i >= 0 || j >= 0 || carry > 0) {
       let sum = carry;

       if (i >= 0) {
           sum += parseInt(a[i]);
           i--;
       }

       if (j >= 0) {
           sum += parseInt(b[j]);
           j--;
       }

       result = (sum % 2) + result;
       carry = Math.floor(sum / 2);
   }

   return result;
};

console.log(addBinary('1010', '1011'))