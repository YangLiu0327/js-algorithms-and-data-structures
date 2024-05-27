// 0012 哈希,数学 M

// input: num = 3749  output: "MMMDCC XLIX"

// 3000 MM
// 700 (500+ 100 + 100) DCC
// 49 (40 + 9) XL IX


 var intToRoman = function(num) {
   const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
   const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

   let result = '';
   for(let i =0; i<values.length; i++) {
    // Greedy Conversion,  while current value can be subtraced from num
    while(num >= values[i]) {
        result += symbols[i];
        num -= values[i];
    }
   }
   return result;
 }

 console.log(intToRoman(3749))

