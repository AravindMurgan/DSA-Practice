// Recall of binary tree
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// const a = new Node('a')
// const b = new Node('b')
// const c = new Node('c')
// const d = new Node('d')
// const e = new Node('e')
// const f = new Node('f')

// a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.left = f

//     a
//   /   \
//   b    c
// /  \  /
// d  e  f
// o/p: a,b,d,e,c,f


//Iterative stack approach
// const depthFirstValues = (root) => {
//     if (!root) return []
//     let stack = [root]
//     const result = []
//     while (stack.length > 0) {
//         const current = stack.pop()
//         result.push(current.val)

//         if (current.right) stack.push(current.right)
//         if (current.left) stack.push(current.left)
//     }
//     return result
// }

//      a
//    /   \
//   b     c
// //  / \     \
// // d   e     f
// //    -> ['a', 'b', 'd', 'e', 'c', 'f']

// //Iterative recursive approach
// const depthFirstValues = (root) => {
//     if (!root) return []

//     const leftValues = depthFirstValues(root.left)
//     const rightValues = depthFirstValues(root.right)

//     console.log([root.val, ...leftValues, ...rightValues])
//     return [root.val, ...leftValues, ...rightValues]
// }

// // console.log(depthFirstValues(a))

// const breathFirstValues = (root) => {
//     if (!root) return []

//     const queue = [root]
//     const result = []

//     while (queue.length > 0) {
//         const current = queue.shift()
//         result.push(current.val)

//         if (current.left) queue.push(current.left)
//         if (current.right) queue.push(current.right)
//     }
//     return result
// }

// console.log('test', breathFirstValues(a))

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// const maxPathSum = (root) => {
//     // base case
//     if (!root) return -Infinity
//     if (!root.left && !root.right) return root.val

//     const maxPathLeafToRoot = Math.max(maxPathSum(root.left), maxPathSum(root.right))

//     return root.val + maxPathLeafToRoot
// };
// console.log(maxPathSum(a))

const findFactorial = (n) => {
    if (n === 1) return 1

    return n * findFactorial(n - 1)
}

console.log(findFactorial(3))



var splitree = function (P, M, pidx, ileft, iright) {
    let rootval = P[pidx]
    let root = new Node(rootval)
    let imid = M.get(rootval)

    if (imid > ileft) {
        root.left = splitree(P, M, pidx + 1, ileft, imid - 1)
    }
    if (imid < iright) {
        root.right = splitree(P, M, pidx + imid - ileft + 1, imid + 1, iright)
    }

    return root
}

var buildTree = function (preorder, inorder) {
    let map = new Map()
    for (let i = 0; i < inorder.length; ++i) {
        map.set(inorder[i], i)
    }

    return splitree(preorder, map, 0, 0, inorder.length - 1)
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])

