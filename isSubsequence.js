// A subsequence of a string is a new string 
// that is formed from the original string by deleting some 
// (can be none) of the characters without disturbing 
// the relative positions of the remaining characters.
//  (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

function isSubsequence(s, t) {
 for (let i =0; i<s.length; i++) {
    if(!t.includes(s[i])) {
        return false;
     }
     let index = t.indexOf(s[i])
     t = t.slice(index + 1)
 }
 return true;
}

// console.log(isSubsequence("bb", "ahbgdc"))

// some simple operation of string and array

let str1 = "abcfg"

// find b index of this string
const indexC = str1.indexOf("c")

// convert str to arr
let arr1 = str1.split("")

// convert arr to str
let arr2 = ["cb", "add", "123", "hsb", "ojn"]
let str2 = arr2.join("")
// find arr value based on index
let index2 = arr2[2]
// check arr has value
const isHasVaule = arr2.includes("ad")

// check string has character 
const isHasChar = str1.includes("abc")

// remove character from string
const removedStr = str1.slice(1) // remove first one

// remove value from array
const removedArr = arr2.slice(2) // remove first second one

// substring 
const subString = str1.substring(2)

// get obj value

const obj = {
    name: 'hello',
    age: "20",
    email: "test@gmail"
}
const objValues = Object.values(obj) // [ 'hello', '20', 'test@gmail' ]
const objKeys = Object.keys(obj)

// check obj has value
const isObjHasValue = Object.values(obj).includes("hello")

// check obj has property
const isObjHasProperty = obj.hasOwnProperty("name")

// reduce
let sumArr = [2,4,5]
let result = sumArr.reduce((a, b) => a+b ,0)

// reverse arrr
let reserveStr = arr2.reverse()

// contcat str
let str3 = str1 + str2
let str4 = str1.concat(str2)

// find length of str
let length = str3.length

// replace str
let str5 = "apple"
str5 = str5.replace("p", "9") // only replace one char => a9ple

// toLowerCase  toUpperCase

// remove the start and end space of string 
let str6 = " hello, world  "
str6 = str6.trim()

// sort arr
let sortArr = [0, 8, 9, 3,2,1]
sortArr = sortArr.sort()

// map, forEach
// filter
let filterArr = sortArr.filter((i) => i%2 === 0) // [ 0, 2, 8 ]
