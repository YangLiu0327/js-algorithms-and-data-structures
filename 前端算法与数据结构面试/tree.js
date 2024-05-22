// 二叉树
// 必须由根结点、左子树和右子树组成，且左右子树都是二叉树
// 数据域， 左侧子结点（左子树根结点）的引用， 右侧子结点（右子树根结点）的引用
function TreeNode(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

const node = new TreeNode(1)
// 二叉树的遍历 BinarySearchTree
// 递归 recursion， 函数调用函数本身
//  先序遍历 A->B->D->E>C>F
//         A
//     B       C
// D       E       F

const root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'D'
        },
        right: {
            val: 'E'
        }
    },
    right: {
        val: 'C',
        right: {
            val: 'F'
        }
    }
}
function preorder(root) {
    if(!root) return;
    console.log(root.val);

    preorder(root.left);
    preorder(root.right)
}

//  中序遍历 左子树 -> 根结点 -> 右子树：D->B->E->A->C->F
//         A
//     B       C
// D       E       F

function inorder(root) {
    if(!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}
//  后序遍历 左子树 -> 右子树 -> 根结点：D-E>B->F->C->A
//         A
//     B       C
// D       E       F
function postorder(root) {
    if(!root) return;
    postorder(root.left);
    postorder(root.right);
    console.log(root.val)
}
// 判断是否对称 0101
 var isSymmetric = function(root) {
    if(!root) return true;
    // 定义isMirror 用来递归检查2课树是不是对称
    let isMirror = function(node1, node2) {
        // 检查2个节点是不是都是空
        if(!node1 && !node2) {
            return true;
        }
        // 如果一个节点是空 一个不是那肯定不对称
        if(!node1 || !node2) {
            return false;
        }
        // 比较2 个节点的值， 递归比较及其子节点
        return((node1.val === node2.val) 
        && isMirror(node1.left, node2.right)
        && isMirror(node1.right, node2.left)
        )
    }
    return isMirror(root.left, root.right)
 }

 // 0112 path sum
 var hasPathSum = function(root, targetSum) {
    if(!root) return false;
    // 用来判断是否到了子节点，如果root 没有left 并且没有right 并且 val 等于target
    // 就说明找到了这条路线
    if(!root.left && !root.right && root.val === targetSum) {
        return true;
    }
    // 递归检查， 新的目标为 targetSum - root.val
    return hasPathSum(root.left, targetSum - root.val) 
    || hasPathSum(root.right, targetSum - root.val)
 }


 // 0572 🙈 Subtree of Another Tree
 var isSubtree = function(root, subRoot) {
    if (!root && !subRoot) return true;
    if (!root && subRoot) return false;

    // 递归来检查当前树是不是和subRoot 相同， 或者看下子树是是不包括 subRoot
    return isSameTree(root, subRoot) 
    || isSubtree(root.left, subRoot)
    || isSubtree(root.right, subRoot)

    function isSameTree(s, t) {
        if(!s && !t) return true;
        if(!s || !t) return false;
        return s.val === t.val 
        && isSameTree(s.left, t.left)
        && isSameTree(s.right, t.right)
    }
 }

 // 0993 Cousins in Binary Tree

 var isCousins = function (root, x, y) {
    if(!root) return false;
    const queue = [];
    queue.push([root, null]) // node-parent
    while(queue.length > 0) {
        const currLevel = new Map();
        const currLen = queue.length;
        for(let i=0; i<currLen; i++) {
            const [node, parent] = queue.shift();
            currLevel.set(node.val, parent)
            if(node.left) queue.push([node.left, node]);
            if(node.right) queue.push([node.right, node]);
        }
        // case 1: 在这层找到了x和y -> 检测他们是否是不同父亲
        if(currLevel.has(x) && currLevel.has(y)) {
            return currLevel.get(x) !== currLevel.get(y)
        }
       // case 2: 仅找到一个 -> False
       if(currLevel.has(x) || currLevel.has(y)) {
        return false;
       }
    }
    return false;
 }