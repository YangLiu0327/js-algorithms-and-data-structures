// 先序遍历
// 题目描述：给定一个二叉树，返回它的前序（先序）遍历序列。
// 入： 右->左->根
// 示例: 输入: [1,null,2,3]
// 输出: [1,2,3]

function TreeNode(val) {
    this.val = val;
    this.left = left;
    this.right = right;
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

// const invertTree = function(root){
//     if(!root) {
//         return root;
//     }
//     let right = invertTree(root.right);
//     let left = invertTree(root.left);
//     root.left = right;
//     root.right = left;
//     return root;
// }

const invertTree = function(root) {
    if(!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);

    return root;
}
// Binary Search Tree
// BST
// 是一棵空树
// 是一棵由根结点、左子树、右子树组成的树，同时左子树和右子树都是二叉搜索树，
// 且左子树上所有结点的数据域都小于等于根结点的数据域，右子树上所有结点的数据域都大于等于根结点的数据域

//左孩子 <= 根结点 <= 右孩子

// 关于二叉搜索树，大家需要掌握以下高频操作：

// 查找数据域为某一特定值的结点
// 插入新结点
// 删除指定结点

function search(root, n) {
    if(!root) return;

    if(root.val === n) {
        console.log('target node: ', n)
    } else if(root.val > n) {
        search(root.left, n)
    } else {
        search(root.right, n)
    }
}

// insert new node
function insertIntoBST(root, n) {
    if(!root) {
        // 用一个值为n的结点占据这个空位
        root = new TreeNode(n)
        return root;
    }
    if(root.val > n) {
        root.left = insertIntoBST(root.left, n)
    } else {
        root.right = insertIntoBST(root.right, n)
    }
    return root;
}

// delete node

function deleteNode(root, n) {
    if(!root) return root;

    if(root.val === n) {
        if(!root.left && !root.right) {
            root = null;
        } else if (root.left) {
            const maxLeft = findMax(root.left);
            root.val = maxLeft.val;
            // 覆盖动作会消耗掉原有的 maxLeft 结点
            root.left = deleteNode(root.left, maxLeft.val)
        } else {
            const minRight = findMin(root.right);
            root.val = minRight.val;
            // 覆盖动作会消耗掉原有的 minRight 结点
            root.right = deleteNode(root.right, minRight.val)
        }
    } else if (root.val > n) {
        root.left = deleteNode(root.left, n)
    } else {
        root.right = deleteNode(root.right, n)
    }
    return root;
}

function findMax(root) {
    while(root.right) {
        root = root.right
    }
    return right;
}

function findMin(root) {
    while(root.left) {
        root = root.left
    }
    return left;
}

//二叉搜索树的验证

// 题目描述：给定一个二叉树，判断其是否是一个有效的二叉搜索树。
// 假设一个二叉搜索树具有如下特征：
// 节点的左子树只包含小于当前节点的数。
// 节点的右子树只包含大于当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

// 思路分析
// 左 < 根 < 右
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

const isValidBST = function (root) {
    // 定义递归函数
    function dfs(root, minValue, maxValue) {
        if(!root) return true;
        if(root.val <= minValue || root.val >= maxValue) return false;
        return dfs(root.left, minValue, maxValue) && dfs(root.right, minValue, maxValue)
    }
    return dfs(root, -Infinity, Infinity)
}


//对特性的考察 
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = function(name) {
    if(!nums.length) return null;

    const root = buildBST(0, nums.length -1)

    function buildBST(low, high) {
        if(low > high) return null;

        const mid = Math.floor(low + (hight-low) / 2)
        const cur = new TreeNode(nums[mid])

        cur.left = buildBST(low, mid-1)
        cur.right = buildBST(mid+1, high)
        return cur;
    }
    return root;
}
