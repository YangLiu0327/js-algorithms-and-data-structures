// queue， stack 是特别的数组
// 数组的增删
const arr = [1,2]
arr.unshift(0)  // unshift 添加元素到数组的头部
// console.log(arr) [ 0, 1, 2 ]

arr.push(3)  // push 方法-添加元素到数组的尾部
// console.log(arr) [ 0, 1, 2, 3 ]

arr.splice(1, 0, 3) // splice 方法-添加元素到数组的任何位置 1: index, 0:删掉的个数， 3:加到数组的值
// console.log(arr) // [ 0, 3, 1, 2, 3 ]

arr.splice(1,1) // 1: index， 1:删掉的个数
// console.log(arr) [ 0, 1, 2, 3 ]

//shift 方法-删除数组头部的元素
//pop 方法-删除数组尾部的元素
//splice 方法-删除数组任意位置的元素

// stack 只用push, pop 进行增删的数组，后进先出, last in last out

const stack = [];

// 入栈过程
stack.push('东北大板')
stack.push('可爱多')
stack.push('巧乐兹')
stack.push('冰工厂')
stack.push('光明奶砖')

// 出栈过程
while(stack.length) {
    const top = stack[stack.length -1]
    // console.log('现在取出的冰淇淋是', top)
    // 出栈
    stack.pop()
}


// queue, first in first out, shift, push
const queue = [];
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);

while(queue.length) {
    const top = queue[0];
    // console.log(top, '出队')
    queue.shift()
}


// 链表
// {   // 数据域
//     val: 1,
//       // 指针域，指向下一个结点
//     next: {
//         val: 2,
//         next: {

//         }
//     }
// }

// 创建链表结点
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const node1 = new ListNode(1);
node1.next = new ListNode(2);

// 链表元素的添加
const node3 = new ListNode(3);
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next;
// 把node1的 next 指针指向 node3
node1.next = node3


// 删掉node -> 访问不到这个node -> 删掉指向该node的next
node1.next = node3.next;
// 利用 node1 可以定位到 node3
const target = node1.next;
node1.next = target.next;

