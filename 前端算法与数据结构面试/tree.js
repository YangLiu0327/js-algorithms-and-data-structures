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