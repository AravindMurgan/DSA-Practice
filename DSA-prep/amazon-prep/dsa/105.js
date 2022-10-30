class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

// var splitree = function (P, M, pidx, ileft, iright) {
//     let rootval = P[pidx]
//     let root = new TreeNode(rootval)
//     let imid = M.get(rootval)

//     if (imid > ileft) {
//         root.left = splitree(P, M, pidx + 1, ileft, imid - 1)
//     }
//     if (imid < iright) {
//         root.right = splitree(P, M, pidx + imid - ileft + 1, imid + 1, iright)
//     }

//     return root
// }

// var buildTree = function (preorder, inorder) {
//     let map = new Map()
//     for (let i = 0; i < inorder.length; ++i) {
//         map.set(inorder[i], i)
//     }

//     return splitree(preorder, map, 0, 0, inorder.length - 1)
// };

var splitTree = function (preorder, map, preIdx, inStart, inEnd) {
    let rootVal = preorder[preIdx]
    let root = new TreeNode(rootVal)
    let midIdx = map.get(rootVal)

    if (midIdx > inStart) {
        root.left = splitTree(preorder, map, preIdx + 1, inStart, midIdx - 1)
    }

    if (midIdx < inEnd) {
        root.right = splitTree(preorder, map, preIdx + (midIdx - inStart) + 1, midIdx + 1, inEnd)
    }

    return root
}

var buildTree = function (preorder, inorder) {

    let map = new Map()

    for (let i = 0; i < preorder.length; ++i) {
        map.set(preorder[i], i)
    }
    return splitTree(preorder, map, 0, 0, inorder.length - 1)
};

buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])