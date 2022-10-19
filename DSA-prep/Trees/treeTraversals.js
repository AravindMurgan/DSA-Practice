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

///Inorder traversal
let res = []
function inorder(root) {
    if (!root) return null

    inorder(root.left)
    console.log(root.val)
    res.push(root.val)
    inorder(root.right)
    return res
}
console.log('res1', inorder(a)
)


let res2 = []
function preorder(root) {
    if (!root) return null

    console.log(root.val)
    res2.push(root.val)
    preorder(root.left)
    preorder(root.right)

    return res2
}

console.log('res2', preorder(a))


let res3 = []
function postorder(root) {
    if (!root) return null

    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
    res3.push(root.val)

    return res3
}

console.log('res3', postorder(a))