// 102. Binary Tree Level Order Traversal

// Given the root of a binary tree,
// return the level order traversal of its nodes'
// values. (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

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
const e = new Node(null)
const f = new Node(null)
const g = new Node(5)
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
c.right = g

//my approach - failed in one edge case
//     1
//    /  \
//   2     3
//  / \   /  \
// 4   n  n   5
// expected: [[1] [2,3] [4,5]]
// actual:[[1],[2,3][4][5]]

// var levelOrder = function (root) {
//     let result = []
//     let queue = [root]
//     result.push([root.val])
//     while (queue.length > 0) {
//         const current = queue.shift()
//         let arr = []
//         if (current.left) arr.push(current.left)
//         if (current.right) arr.push(current.right)
//         result.push(arr)
//     }

//     return result
// };
var levelOrder = function (root) {
    let q = [root], ans = []
    while (q[0]) {
        let qlen = q.length, row = []
        for (let i = 0; i < qlen; i++) {
            let curr = q.shift()
            row.push(curr.val)
            if (curr.left) q.push(curr.left)
            if (curr.right) q.push(curr.right)
        }
        ans.push(row)
    }
    return ans
};
levelOrder(a)