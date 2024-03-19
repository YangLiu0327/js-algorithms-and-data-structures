class Node  {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value) {
        var newNode = new Node(value);
        if(this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                if(value === current.value) return undefined;
                if(value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                }  else if (value > current.value) {
                    if(current.right === null) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right
                    }
                } 
            }
        }
    }
    contains(value) {
        if (this.roof === null) return false;
        var current = this.root;
            let found = false;
        while (!found && current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }
    BFS(){
        var node = this.root,
        data = [];
        let queue = [];
        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOder(){
        var data = [];
        function traversal(node) {
            data.push(node.value);
            if(node.left) traversal(node.left);
            if(node.right) traversal(node.right);
        }
        traversal(this.root);
        return data;
    }
    DFSPostOrder() {
        var data = [];
        function traversal(node) {
            node.left && traversal(node.left);
            node.right &&  traversal(node.right);
            data.push(node.value);
        }
        traversal(this.root);
        return data;
    }
    DFSInOrder(){
        var data = [];
        function traversal(node) {
            node.left && traversal(node.left);
            data.push(node.value);
            node.right && traversal(node.right);
        }
        traversal(this.root);
        return data;
    }
}   

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(2)
tree.insert(7)
tree.insert(11)
tree.insert(16)
console.log(tree)

//     10
//  5      13
// 2  7  11  16

// console.log(tree.contains(16))
console.log(tree.DFSInOrder())