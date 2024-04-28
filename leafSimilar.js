// Consider all the leaves of a binary tree, from left to right order,
// the values of those leaves form a leaf value sequence.

var leafSimilar = function(root1, root2) {
    const leaves1 = [];
    const leaves2 = [];

    function dfs(node, leaves) {
        if(!node) return;
        if(!node.left && !node.right) {
            leaves.push(node.val);
            return;
        }
        dfs(node.left, leaves);
        dfs(node.right, leaves);
    }
    dfs(root1, leaves1)
    dfs(root2, leaves2)

    if(leaves1.length !== leaves2.length) return false;
    for(let i =0; i< leaves1.length; i++){
        if(leaves1[i] !== leaves2[2]) return false;
    }
    return true;
}