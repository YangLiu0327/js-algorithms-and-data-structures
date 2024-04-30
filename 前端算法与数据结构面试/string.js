const str = 'juejin'
const res = str.split('').reverse().join('') // nijeuj

//回文字符串 'yessey'
// function isPalindrome(str) {
//     return str === str.split('').reverse().join('')
// }

//对称的特性
function isPalindrome(str) {
    const len = str.length;
    for(let i =0; i<len; i++) {
        if(str[i] !== str[len-i-1]) return false
    }
    return true
}
// console.log(isPalindrome('yessey'))

//高频真题解读
//回文字符串的衍生问题 == 对称性， 双指针
// 示例 1: 输入: "aba"
// 输出: True
// 示例 2:
// 输入: "abca"
// 输出: True
// 解释: 你可以删除c字符。
// 注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
// 思路：回文字符串的对称特性

function validPalindrome(s) {
  let left = 0;
  let right = s.length -1;
  while(left < right) {
    if(s[left] === s[right]) {
        left++;
        right--;
    } else {
        // slice(start, end) 不包括end
        let newS1 = s.slice(0, left) + s.slice(left + 1); // eeee 去掉left
        let newS2 = s.slice(0, right) + s.slice(right + 1); // deee 去掉right
        return (newS1 === newS1.split('').reverse().join('') || newS2 === newS2.split('').reverse().join(''))
    }
  }
  return true;
}

// console.log(validPalindrome('deeee'))
// 字符串匹配问题——正则表达式初相见
// 真题描述： 设计一个支持以下两种操作的数据结构：
// void addWord(word)
// bool search(word)
// search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
// . 可以表示任何一个字母。

// 示例: addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true

// 思路： 用map 存储添加的字符串， 为了降低查找的复杂度，用str 的长度作为key， 相同长度的string在同一个arr中
function WordDictionary() {
    this.words= {};
};
WordDictionary.prototype.addWord = function(word) {
    // if already has this key(word.length)
    if(this.words[word.length]) {
        this.words[word.length].push(word)
    } else {
            // 若该字符串对应长度的数组还不存在，则先创建
        this.words[word.length] = [word]
    }
}
WordDictionary.prototype.search = function (word) {
    if(!this.words[word.length]) return false;
    const len = word.length;
      // 如果字符串中不包含‘.’，那么一定是普通字符串
    if(!word.includes('.')) {
        return this.words[len].includes(word)
    }
    const reg = new RegExp(word);
    return this.word[len].some((item) => {
        return reg.test(item)
    })
}

//正则表达式更进一步——字符串与数字之间的转换问题
//atoi 函数
// 输入: "42"
// 输出: 42
// 输入: " -42"
// 输出: -42
// 示例 3: 输入: "4193 with words"
// 输出: 4193
// 示例 4: 输入: "words and 987"
// 输出: 0
// 输入: "-91283472332"
// 输出: -2147483648

const max = Math.pow(2, 32) // 2的32次幂
const min = -max-1

//去掉空格
let str1 = '    +10086'
str1.trim() //+10086
// /\s*([-\+]?[0-9]*).*/
// \s 空字符
// * 前面的符号可能出现了多次
// () 圈住的内容，就是我们要捕获起来额外存储的东西
// []中的匹配符之间是“或”的关系
// 最后的 .这个是任意字符的意思，.*用于字符串尾部匹配非数字的任意字符

// const newReg = /\s*([-\+]?[0-9]*).*/
// const groups = string.match(newReg)

const myAtoi = function(str) {
    const reg = /\s*([-\+]?[0-9]*).*/
    const groups = str.match(reg);
    const max = Math.pow(2,32) -1;
    const min = -max-1;
    let targetNum = 0;
    if(groups){
        targetNum = +groups[1]
        if(isNaN(targetNum)) {
            targetNum = 0;
        }
    }
    if(targetNum > max) {
        return max;
    } else if (targetNum < min) {
        return min
    }
    return targetNum
}
console.log(myAtoi('-4193with words'))