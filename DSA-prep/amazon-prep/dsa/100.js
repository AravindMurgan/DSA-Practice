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

const a1 = new TreeNode(1)
const b1 = new TreeNode(2)
const c1 = new TreeNode(3)

a1.left = b1
// a1.right = c1

a.left = b
a.right = c
// b.left = e
// e.right = f
// c.left = d




var isSameTree = function (p, q) {
    if (!p || !q) {
        return (p == q)
    }

    return (p.val == q.val) && isSameTree(p.left, q.left)
        && isSameTree(p.right, q.right)
};

isSameTree(a1, a)