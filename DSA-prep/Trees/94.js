// 94. Binary Tree Inorder Traversal

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const a = new TreeNode(6)
const b = new TreeNode(2)
const c = new TreeNode(8)

a.left = b
a.right = c

var inordertraversal = function (root, res = []) {
    if (!root) return []

    const left = inordertraversal(root.left, res)
    res.push(root.val)
    const right = inordertraversal(root.right, res)

    return res
}

console.log(inordertraversal(a))