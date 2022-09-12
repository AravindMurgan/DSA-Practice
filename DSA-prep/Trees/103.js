// // Given the root of a binary tree, return the zigzag level order traversal of its nodes' 
// // values. (i.e., from left to right, then right to left for the next level and alternate between).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

// i/p:
// [1,2,3,4,5]

// o/p:[[1],[3,2],[4,5]]

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

//      1
//    /   \
//   2     3
//  / \    /  \
// 4   n  n    5

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
// var zigzagLevelOrder = function (root) {
//     if (!root) return []
//     const queue = [root]
//     let res = []
//     let count = 1
//     while (queue.length > 0) {
//         let qLen = queue.length
//         let row = []
//         for (let i = 0; i < qLen; ++i) {
//             const current = queue.shift()
//             row.push(current.val)

//             if (count % 2 === 0) {
//                 if (current.left) queue.push(current.left)
//                 if (current.right) queue.push(current.right)
//             } else {
//                 if (current.right) queue.push(current.right)
//                 if (current.left) queue.push(current.left)
//             }
//         }
//         res.push(row)
//         count++
//     }

//     return res
// };
//      1
//    /   \
//   2     3
//  / \    /  \
// 4   n  n    5

function zigzagLevelOrder(root) {
    let res = [];
    go(root, 0, res);
    return res;
}

function go(node, l, res) {  // l means level
    if (!node) return;

    if (res[l] == null) {
        res.push([]);
    }

    if (l % 2 === 0) {
        res[l].push(node.val);
    } else {
        res[l].unshift(node.val);
    }

    go(node.left, l + 1, res);
    go(node.right, l + 1, res);
}
console.log(zigzagLevelOrder(a))