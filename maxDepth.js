// 104. Maximum Depth of Binary Tree
// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the 
// longest path from the root node down to the farthest leaf node.


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0: val);
    this.left = (left === undefined ? null: left);
    this.right = (right === undefined ? null: right);
}

function maxDepth(root) {
    if(!root) return 0;
    let depth = 0;
    let queue =  [root];

    while(queue.length) {
        let len = queue.length;
        for(let i =0; i<len; i++) {
            let current = quque.shift();
            if (current.left) queue.push(current.left);
            if(current.right) queue.push(current.right);

        } 
        depth++
    }
    return depth;
}