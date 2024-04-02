// Given the roots of two binary trees p and q,
// write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, 
// and the nodes have the same value.

function isSameTree(p, q) {
    let queue1 = [p]
    let queue2 = [q]

    while (queue1.length > 0) {
        const size1 = queue1.length;
        const size2 = queue2.length;
        if(size1 !== size2) return false;
        for(let i =0; i<size1; i++) {
            const node1 = queue1.shift()
            const node2 = queue2.shift()
          
            if(!node1 && !node2) continue;
            if(!node1 || !node2 || node1.val !== node2.val) {
                return false;
            }


            queue1.push(node1.left)
            queue1.push(node1.right)
            queue2.push(node2.left)
            queue2.push(node2.right)
        }
    }
    return true;
}