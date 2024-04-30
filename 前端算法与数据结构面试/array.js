// const arr = [1, 2, 3, 4];

const arr1 = new Array(); //构造函数创建数组  等价于 const arr = [];
const arr2 = new Array(7);  // arr2.length === 7
const arr3 = new Array(7).fill(1) // [1,1,1,1,1,1,1]

// arr3[0]
// for loop
const len = arr3.length;
for(let i =0; i<len; i++) {
    // console.log(arr3[i])
}
// forEach
arr3.forEach((item, index) => {
    // console.log(item, index)
})
// map和forEach的区别，map 会返回一个全新的数组
const newArr = arr3.map((item, index) => {
    // console.log(item, index)
    return item+1
})
// 建议都用for来写，原因从性能上看，for 循环遍历起来是最快的

// 二维数组 -> 数组套数组 -> 每个元素都是数组 -> 面 -> 矩阵
const arr4 = [
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5]
]
// arr4[0] [ 1, 2, 3, 4, 5 ]
// console.log(arr4[0][1])
let arr5 = new Array(7);
const len5 = arr5.length;
for(let i=0; i<len5; i++) {
    arr5[i] = [];
}
// console.log(arr5)
// N 维数组需要 N 层循环来完成遍历。
const outerLen = arr4.length;
for(let i =0; i<outerLen; i++) {
    const innerLen = arr4[i].length
    for(let j =0; j<innerLen; j++) {
        // console.log(arr4[i][j])
    }
}

// 重要方法的使用 concat, some, slice, join, sort, pop, push