//题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足： 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
// 思路： 用对称性来做 symmetry

// stack -> last in frist out -> push(), pop()
// 往stack中 push 符号的对应项
//{[]} ->  } ]
//()[] ->  ) ] 
const leftToRight = {
    "(": ")",
    "[": "]",
    "{": "}"
}
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if(!s) return true;
  let stack = [];
  for(let i =0; i<s.length; i++ ){
    let char = s[i];
    if(char === '{' || char === '[' || char === '(') {
        stack.push(leftToRight[char])
    } else {
        if(!stack.length || stack.pop() !==char) {
            return false;
        }
    }
  }
  return !stack.length;
}

// console.log(isValid('()[]'))

// 栈问题进阶-每日温度问题
// 题目描述: 根据每日气温列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。
// 如果之后都不会升高，请在该位置用 0 来代替。
// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，
// 你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
// 思路：尝试去维持一个递减栈
function test(arr) {
let array = [];
 for(let i =0; i< arr.length; i++) {
    let found = false;
    for(let j = i+1; j<arr.length; j++) {
        if(arr[j] > arr[i]) {
            array.push(j-i);
            found = true;
            break;
        }
    }
    if(!found) {
        array.push(0);
    }
 }
 return array;
}
// console.log(test([73, 74, 75, 71, 69, 72, 76, 73]))
/**
 * @param {number[]} T
 * @return {number[]}
 */

const dailyTemperatures = function(T) {
    const len = T.length;
    const stack = [];
    const res = (new Array(len)).fill(0);
    for(let i=0; i<len; i++) {// 若栈不为0，且存在打破递减趋势的温度值
        while(stack.length && T[i] > T[stack[stack.length -1]]) {
            const top = stack.pop();
            res[top] = i - top;
        }
        stack.push(i)
    }
    return res;
}

//栈的设计——“最小栈”问题
//题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

const MinStack = function(){
    this.stack = [];
}

/** 
 * @param {number} x
 * @return {void}
 */
// 栈的入栈操作，其实就是数组的 push 方法
MinStack.prototype.push = function(x) {
    this.stack.push(x)
}
/**
 * @return {void}
 */
// 栈的出栈操作，其实就是数组的 pop 方法

MinStack.prototype.pop = function() {
    this.stack.poo()
}

/**
 * @return {number}
 */
// 取栈顶元素，咱们教过的哈，这里我本能地给它一个边界条件判断（其实不给也能通过，但是多做不错哈）
MinStack.prototype.top = function() {
    if(!this.stack || !this.stack.length) return;
    return this.stack[this.stack.length -1]
}
/**
 * @return {number}
 */
// 按照一次遍历的思路取最小值
MutationRecord.prototype.getMin = function() {
    let min = Infinity;
    const { stack } = this;
    for(let i=0; i<stack.length; i++) {
        if(stack[i] < min) {
            min = stack[i]
        }
    }
    return min;
}

//用栈实现队列 --- 高频
//思路：用stack 去实现先进先出 -》 让stack 底部的元素先出来
// stack1 出去进入 stack2

/**
 * 初始化构造函数
 */

const MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
}

MyQueue.prototype.pop = function () {
    // 假如 stack2 为空，需要将 stack1 的元素转移进来
    if (this.stack2.length <= 0) {
         // 当 stack1 不为空时，出栈
        while (this.stack1.length !== 0) {
            // 将 stack1 出栈的元素推入 stack2
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()
}

// get the front element
MyQueue.prototype.peek = function () {
    if(this.stack2.length <= 0) {
        while(this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    const stack2Len = this.stack2.length;
    return stack2Len && this.stack2[stack2Len -1]
}

MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length;
}

// 认识双端队列
// 双端队列就是允许在队列的两端进行插入和删除的队列。

// 滑动窗口问题 
// 题目描述：给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。
// 示例: 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
// 思路分析：双指针+遍历法



const maxSlidingWindow = function (nums, k) {
    const len = nums.length;
    const result = [];
    let left = 0;
    let right = k -1;
    while (left < right) {
        const max =  calMax(nums, left, right);
        result.push(max);
        left++;
        right++;
    }
    return result;
    function calMax(arr, left, right) {
        if(!arr || !arr.length) return;
        let maxSum = arr[left];
        for(let i = left; i<=right; i++) {
            if(arr[i] > maxSum) {
                maxSum = arr[i]
            }
        }
        return maxSum;
    }
}

// 另一种双端队列法
const newMaxSlidingWindow = function (nums, k) {
    const len = nums.length;
    const result = [];
    const deque = [];
    for (let i=0; i<len; i++){
        //当队尾元素小于当前元素时
        while (deque.length && nums[deque[deque.length -1]] < nums[i]){
            deque.pop();
        }
        deque.push(i);
           // 当队头元素的索引已经被排除在滑动窗口之外时
        while(deque.length && deque[0] <= i -k) {
                // 将队头元素索引出队
            deque.shift()
        }
           // 判断滑动窗口的状态，只有在被遍历的元素个数大于 k 的时候，才更新结果数组
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
}
