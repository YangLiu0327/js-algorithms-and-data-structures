// 先序遍历
// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
// 入： 右->左->根
// 示例: 输入: [1,null,2,3]
// 输出: [1,2,3]

function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preoderTraversal = function(root) {
    const res = [];
    if(!root) return res;
    const stack = [];
    // root 入栈
    stack.push(root);
    // 只要栈不为空 就继续执行
    while(stack.length) {
        // 弹出栈顶元素为cur
        const cur = stack.pop();
        // 把cur的值 存入数组中
        res.push(cur.val);
        if(cur.right) {
            stack.push(cur.right)
        }
        if(cur.left) {
            stack.push(cur.left)
        }
    }
    return res;
}

// 后序遍历
// 出栈: 左 -> 右 -> 根
// res.unshift(cur.val);

const postorderTraversal = function(root) {
    let res = [];
    if(!root) return res;
    let stack = [];
    stack.push(root);
    while(root.length) {
        let cur = stack.pop();
        res.unshift(cur.val);
        if(cur.left) {
            res.push(cur.left)
        }
        if(cur.right){
            res.push(cur.right)
        }
    }
    return res;
}


// 中序遍历

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTaversal = function(root) {
    const res = [];
    const stack = [];
    let cur = root;
    while (cur || stack.length) {
        // 把当前节点的左子树放入栈中，直到左子树为空
        while(cur) {
            stack.push(cur)
            cur = cur.left;
        }
        cur = stack.pop()
        res.push(cur.val)
        cur = cur.right
    }
    return res;
}

//题目描述：给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
//示例： 二叉树：[3,9,20,null,null,15,7],
// 3
// / \
// 9  20
//  /  \
// 15   7
// 返回其层次遍历结果：
// [
//     [3],
//     [9,20],
//     [15,7]
// ]
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const res = [];
    if(!root) return res;
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const level = [];
        const len = queue.length;
        for(let i=0; i<len; i++) {
            const top = queue.unshift();
            level.push(top.val)
            if(top.left){
                queue.push(top.left);
            }
            if(top.right){
                queue.push(top.right)
            }
        }
        res.push(level)
    }
    return res;
}


//题目描述：翻转一棵二叉树。
// 4
// /   \
// 2     7
// / \   / \
// 1   3 6   9

// 4
// /   \
// 7     2
// / \   / \
// 9   6 3   1
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = function(root){
    if(!root) {
        return root;
    }
    let right = invertTree(root.right);
    let left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
}