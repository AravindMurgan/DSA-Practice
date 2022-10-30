class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(4)
const b = new TreeNode(2)
const c = new TreeNode(7)
const d = new TreeNode(1)
const e = new TreeNode(3)
const f = new TreeNode(6)
const g = new TreeNode(9)


a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g


var invertTree = function (root) {
    if (!root) return root;

    [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

    console.log(root)
    return root
};

console.log(invertTree(a))