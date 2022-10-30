class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(4)
const d = new TreeNode(3)
const e = new TreeNode(5)
const f = new TreeNode(6)
const g = new TreeNode(9)
const h = new TreeNode(7)
const i = new TreeNode(8)


a.left = b
a.right = c
b.left = d
d.left = g
c.left = e
c.right = f
f.left = h
f.right = i

//       3
//     /    \  
//    9      20
//   /      /    \
//  7       15    7   
//  /
//  27 
var isBalanced = function (root) {
    return dfsHeight(root) != -1

    function dfsHeight(root) {
        if (!root) return 0

        let lh = dfsHeight(root.left)
        if (lh == -1) return -1
        let rh = dfsHeight(root.right)
        if (rh == -1) return -1

        if (Math.abs(lh - rh) > 1) return -1

        return 1 + Math.max(lh, rh)
    }

};

console.log(isBalanced(a))
