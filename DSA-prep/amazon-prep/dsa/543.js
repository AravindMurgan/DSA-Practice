class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(4)
const e = new TreeNode(5)

a.left = b
a.right = c
b.left = d
b.right = e

var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    dfs(root);

    return diameter;

    function dfs(node, level) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        // update diameter at every node
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        return 1 + Math.max(left, right);
    }
};

console.log(
    diameterOfBinaryTree(a))

//       1
//      /  \ 
//     2    3
//    /  \ 
//    4  5      

var maxDepth = function (root) {
    if (!root) return 0

    const lh = maxDepth(root.left)
    const rh = maxDepth(root.right)

    return 1 + Math.max(lh, rh)
};

maxDepth(a)