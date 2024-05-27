// 0050 递归 m
// 递归  数学， 如果n 是负数， 返回1/pow(x, -n), n 偶数 pow(x * x, n/2), n是奇数，x * pow(x*x, (n-1)/2)
// 思路： 如果n=0，返回1， 如果n=1， 返回x

var myPow = function(x, n) {
    if(n ===0) return 1;
    if(n ===1) return x;
    if(n<0) return 1/myPow(x, -n);

    const half = myPow(x * x, Math.floor(n/2));
    return n % 2 === 0 ? half: x * half;
}
console.log(myPow(2, 3))