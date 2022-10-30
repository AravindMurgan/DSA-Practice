class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(6)
const b = new TreeNode(2)
const c = new TreeNode(8)
const d = new TreeNode(0)
const e = new TreeNode(4)
const f = new TreeNode(3)
const g = new TreeNode(5)
const h = new TreeNode(7)
const i = new TreeNode(9)

a.left = b
a.right = c
b.left = d
b.right = e
e.left = f
e.right = g
c.left = h
c.right = i




//       1
//    /      \
//   2        3
//  /  \     /  \ 
// 4    5    8   9
//     /  \
//    6    7  

var lowestCommonAncestor = function (root, p, q) {
    // let count=++
    var dfs = function (root, p, q) {

        if (!root || root.val === p || root.val === q) {
            return root
        }

        let leftSide = dfs(root.left, p, q)
        let rightSide = dfs(root.right, p, q)

        if (!leftSide) return rightSide
        if (!rightSide) return leftSide

        return root

    }

    let result = dfs(root, p, q)

    return result
};

console.log(lowestCommonAncestor(a, 2, 8))