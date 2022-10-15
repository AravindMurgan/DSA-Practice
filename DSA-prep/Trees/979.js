// 979. Distribute Coins in Binary Tree
// You are given the root of a binary tree with n nodes where each
// node in the tree has node.val coins. There are n coins in total throughout the whole tree.

// In one move, we may choose two adjacent nodes and move one coin from one node to another.
// A move may be from parent to child, or from child to parent.

// Return the minimum number of moves required to make every node have exactly one coin.
class Node {
    constructor(val = 0) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(0)
const b = new Node(0)
const c = new Node(0)
const d = new Node(4)
const e = new Node(0)
const f = new Node(3)
const g = new Node(0)

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
// b.left = d
// b.right = e
// c.left = f
// c.right = g

//      a
//    /   \
//   b     c
//  / \   / \
// d   e  f  g

//      3
//   /    \
//   0     0
//  / \   /  \
// 4   0  3   0 

var distributeCoins = function (root) {
    var moves = 0;
    postorder(root);
    return moves;

    function postorder(node) {
        if (!node)
            return 0;

        const subTotal = postorder(node.left) + postorder(node.right);
        const result = node.val - 1 + subTotal;
        moves += Math.abs(result);

        return result;

    }
};
distributeCoins(a)

// var distributeCoins = function (root, key) {
//     console.log('key::', key)
//     if (!root) return []
//     const leftValues = distributeCoins(root.left, 'left')
//     const rightValues = distributeCoins(root.right, 'right')

//     // console.log(leftValues)
//     // console.log(rightValues)
//     // console.log([root.val, ...leftValues, ...rightValues])
//     console.log([root.val, ...leftValues, ...rightValues])
//     return [root.val, ...leftValues, ...rightValues]
// };
// distributeCoins(a)


