// DFS
// 回忆二叉树
function preorder (root) {
    if(!root) return;
}
preorder(node.left);
preorder(node.right);

function BFS(root) {
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const top = queue[0]; //取出队头元素 a
        console.log(top.val); // 
        if(top.left) {
            queue.push(top.left);
        }
        if(top.right) {
            queue.push(top.right);
        }
        queue.shift() // 访问完毕，队头元素出队
    }
}

// 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
// 示例：   
// 输入: [1,2,3]
// 输出: [
// [1,2,3],
// [1,3,2],
// [2,1,3],
// [2,3,1],
// [3,1,2],
// [3,2,1]
// ]

// 思路： tree
const permute = function (nums) {
    const len = nums.length;
    const current = [];
    const result = [];
    const visited= {};

    function dfs(nth) {
        if(nth === len) {
            result.push(current.slice())
            return;
        }

        for(let i = 0; i<len; i++) {
            if(!visited[nums[i]]) {
                visited[nums[i]] = 1;
                current.push(nums[i])
                dfs(nth + 1)
                current.pop()
                visited[nums[i]] = 0;
            }
        }
    }
    dfs(0)
    return result;
}