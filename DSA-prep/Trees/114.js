// Given the root of a binary tree, flatten the tree into a "linked list":

// The "linked list" should use the same TreeNode
// class where the right child pointer points to the next node in the
// list and the left child pointer is always null.
// The "linked list" should be in the same order as a pre-order traversal of the binary tree.

// Input: root = [1,2,5,3,4,null,6]
// Output: [1,null,2,null,3,null,4,null,5,null,6]

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)

a.left = b
a.right = c
b.left = d
b.right = e
e.right = f

// var flatten = function (root) {
//     let curr = root
//     while (curr) {
//         if (curr.left) {
//             let runner = curr.left
//             while (runner.right) runner = runner.right
//             runner.right = curr.right, curr.right = curr.left, curr.left = null
//         }
//         curr = curr.right
//     }
// };
// var flatten = function (root) {
//     let head = null
//     const revPreOrder = node => {
//         if (node.right) revPreOrder(node.right)
//         if (node.left) revPreOrder(node.left)
//         node.left = null, node.right = head, head = node
//     }
//     if (root) revPreOrder(root)
// };


// flatten(a)

// Morris traversal - Inorder
// Inorder = [left,root,right]
var morrisTraversalInorder = function (root) {
    let inorder = []
    let curr = root
    while (curr) {
        if (!curr.left) {
            inorder.push(curr.val)
            curr = curr.right
        } else {
            let prev = curr.left
            while (prev.right && prev.right != curr) {
                prev = prev.right
            }
            if (prev.right === null) {
                prev.right = curr
                curr = curr.left
            } else {
                prev.right === null
                inorder.push(curr.val)
                curr = curr.right
            }
        }
    }
    return inorder
}

console.log(morrisTraversalInorder(a), 'test')
console.log('hello world')
