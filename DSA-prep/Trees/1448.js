// 1448. Count Good Nodes in Binary Tree

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const a = new TreeNode(3)
const b = new TreeNode(1)
const c = new TreeNode(4)
const d = new TreeNode(3)
const e = new TreeNode(1)
const f = new TreeNode(5)

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f

var goodNodes = function (root) {

    return dfs(root, Number.NEGATIVE_INFINITY)
};

var dfs = function (root, max) {
    if (!root) return 0

    let res = root.val >= max ? 1 : 0

    res += dfs(root.left, Math.max(root.val, max))
    res += dfs(root.right, Math.max(root.val, max))

    return res
}

goodNodes(a)

