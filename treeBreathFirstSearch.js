// treeBreathFirstSearch
// given a binary tree of integers root
// create a function that returns an array
// where each element represents an array
// that contains the elements at the level i

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function treeBreathFirstSearch(root) {
    if(!root) return [];
    let result = [];
    let queue = [root];   
    while(queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];

        for (let i =0; i<levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.value);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        result.push(currentLevel);
    }
    return result;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(treeBreathFirstSearch(root));