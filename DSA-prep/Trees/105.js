// 105. Construct Binary Tree from Preorder and Inorder Traversal

// Given two integer arrays preorder and inorder where preorder is the preorder traversal
// of a binary tree and inorder is the inorder traversal of the same tree, construct
// and return the binary tree.

// Example 1:
// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,
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


// var buildTree = function (P, I) {
//     let M = new Map()
//     for (let i = 0; i < I.length; i++)
//         M.set(I[i], i)
//     return splitTree(P, M, 0, 0, I.length - 1)
// };

// var splitTree = function (P, M, pix, ileft, iright) {
//     let rval = P[pix],
//         root = new Node(rval),
//         imid = M.get(rval)
//     if (imid > ileft)
//         root.left = splitTree(P, M, pix + 1, ileft, imid - 1)
//     if (imid < iright)
//         root.right = splitTree(P, M, pix + imid - ileft + 1, imid + 1, iright)
//     return root
// }

var splitTree = function (P, M, pidx, ileft, iright) {
    // // to form a two substree , we need to keep track of these values
    // pidx-- index of P
    // ileft -- inorder start
    // iright - inorder end
    // imid= root of P in inorder

    let rootval = P[pidx]
    let root = new Node(rootval)
    let imid = M.get(rootval)

    if (imid > ileft) {
        root.left = splitTree(P, M, pidx + 1, ileft, imid - 1)
    }
    if (imid < iright) {
        root.right = splitTree(P, M, pidx + 1 + (imid - ileft) + imid + 1, iright)
    }

    return root
}

var buildTree = function (preorder, inorder) {
    // keep track of all indices O(1) ,since iterating through n and find idx is O(n)
    // which leads to O(n2)
    let M = new Map()

    for (let i = 0; i < inorder.length; ++i) M.set(inorder[i], i)

    return splitTree(preorder, M, 0, 0, inorder.length - 1)
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]))
