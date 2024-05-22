// 1. 链表的合并
// 真题描述：将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有结点组成的。 
// 示例： 输入：1->2->4, 1->3->4 输出：1->1->2->3->4->4

// 思路： 处理链表节点之间的指针问题

const mergeTwoLists = function(l1, l2) {
    // define head
    let head = new ListNode();
    // cur is 针
    let cur = head;
    while(l1 && l2) {
        // 如果l1 node val更小，就先从l1开始
        if(l1.val <= l2.val) {
             // 先串起 l1 的结点
            cur.next = l1;
            //  l1 指针向前一步
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
         // “针”在串起一个结点后，也会往前一步
        cur = cur.next;
    }
      // 处理链表不等长的情况
    cur.next = l1 !== null ? l1 : l2;
      // 返回起始结点
    return head.next;
}

// 链表结点的删除
// 真题描述：给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
// 示例 1:
// 输入: 1->1->2
// 输出: 1->2
// 示例 2:
// 输入: 1->1->2->3->3
// 输出: 1->2->3
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    // 设定 cur 指针，初始位置为链表第一个结点
    let current = head;
    while(current !==null && current.next !== null) {
        if(current.val === current.next.val) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }
    return head;
}

// 删除问题的延伸——dummy 结点登场
// 真题描述：给定一个排序链表，删除所有含有重复数字的结点，只保留原始链表中 没有重复出现的数字。
// 示例 1:
// 输入: 1->2->3->3->4->4->5
// 输出: 1->2->5
// 示例 2:
// 输入: 1->1->1->2->3
// 输出: 2->3

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteAllDuplicates = function(head) {
    // 极端情况：0个或1个结点，则不会重复，直接返回
    if(!head || !head.next) return head;
    // dummy
    let dummy = new ListNode();
    dummy.next = head;
    let current = dummy;
    // 当 cur 的后面有至少两个结点时
    while(current.next && current.next.next) {
            // 对 cur 后面的两个结点进行比较
        if(current.next.val === current.next.next.val) {
                // 若值重复，则记下这个值
            let val = current.next.val;
            // 反复地排查后面的元素是否存在多次重复该值的情况
            while(current.next && current.next.val === val) {
                  // 若有，则删除
                current.next = current.next.next; 
            }
        } else {
               // 若不重复，则正常遍历
               current = current.next;
        }
    }
    return dummy.next;
}

//快慢指针——删除链表的倒数第 N 个结点
//真题描述：给定一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 示例： 给定一个链表: 1->2->3->4->5, 和 n = 2.
// 当删除了倒数第二个结点后，链表变为 1->2->3->5.
// 说明： 给定的 n 保证是有效的。
// 思路： dummy 结点的使用

// const dummy = new ListNode();
// dummy.next = head;
// 倒数第n个 len-n+1
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    const dummy = new ListNode();
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;
    //快指针闷头走 n 步
    while(n!==0) {
        fast = fast.next;
        n--;
    }
    while(fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    // 慢指针删除自己的后继结点
    slow.next = slow.next.next;
    return dummy.next;
}

// 多指针法——链表的反转
// 完全反转一个链表
//真题描述：定义一个函数，输入一个链表的头结点，反转该链表并输出反转后链表的头结点。

// 示例:
// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// 处理链表的本质 是处理链表节点之间的指针关系

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function (head) {
    let prev = null;
    let current = head;
    while(current!== null) {
        let next = current.next;
        // 反转指针
        current.next = prev;
        // pre 往前走一步
        prev = current;
        // cur往前走一步
        current = next;
    }
    return prev;
}

//局部反转一个链表
// 真题描述：反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
// 说明: 1 ≤ m ≤ n ≤ 链表长度。

// 输入: 1->2->3->4->5->NULL, m = 2, n = 4
// 输出: 1->4->3->2->5->NULL

/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

const reverseBetween = function (head, m, n) {
    let prev, cur, leftHead;
    const dummy = new ListNode();
    dummy.next = head;
    let p = dummy;
    for (let i=0; u<m-1; i++) {
        p = p.next;
    }
    leftHead = p;
    // start 是反转区间的第一个结点
    let start = leftHead.next;
    // pre 指向start
    prev = start;
    // cur 指向 start 的下一个结点
    cur = prev.next;
    for(let i=m; i<n;i++) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    leftHead.next = prev;
    start.next = cur;
    return dummy.next;
}

//环形链表基本问题
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    while(head) {
        if(head.flag) {
            return true;
        } else {
            head.flag = true;
            head = head.next;
        }
    }
    return false;
}
//环形链表衍生问题——定位环的起点
//真题描述：给定一个链表，返回链表开始入环的第一个结点。 如果链表无环，则返回 null。

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
    while(head) {
        if(head.flag) {
            return head;
        } else {
            head.flag = true;
            head = head.next;
        }
    }
    return null;
}
//快慢指针的思路