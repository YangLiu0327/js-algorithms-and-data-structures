// 1010  M Pairs of Songs With Total Durations Divisible by 60
/**
 * @param {number[]} time
 * @return {number}
 */
// 思路：用哈希记录每个数字对60 取模的余数的出现次数

var numPairsDivisibleBy60 = function(time) {
  let result = 0;
  const remainders = {}; //记录每个数字对60取模的余数的出现记录

  for(const num of time) {
    const remainder = num % 60;
    const complement = (60 - remainder) % 60;

    if(remainders[complement]) {
        result += remainders[complement]
    }

    remainders[remainder] = (remainders[remainder] || 0) + 1;
  }
  return result;
}

console.log(numPairsDivisibleBy60([30,20,150,100,40]))