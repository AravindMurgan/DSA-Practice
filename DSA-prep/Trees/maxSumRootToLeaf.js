// Write a function, maxPathSum, that takes in the root of a binary tree that contains number values.
// The function should return the maximum sum of any root to leaf path within the tree.
// You may assume that the input tree is non-empty.

// //       3
// //    /    \
// //   11     4
// //  / \      \
// // 4   -2     1

// maxPathSum(a); // -> 18
// Approach : Recusrion with DFS

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(5)
const b = new Node(6)
const c = new Node(-5)
const d = new Node(7)
const e = new Node(9)
const f = new Node(1)
//      5
//    /   \
//   6     -5
//  / \    /  \
// 7   9   1   &

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f

const maxPathSum = (root) => {
    if (!root) return -Infinity
    if (!root.left && !root.right) return root.val
    const maxChildPathSum = Math.max(maxPathSum(root.left), maxPathSum(root.right))
    return root.val + maxChildPathSum

}

console.log(maxPathSum(a))
