class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(3)
const b = new TreeNode(1)
const c = new TreeNode(4)
const d = new TreeNode(3)
const e = new TreeNode(1)
const f = new TreeNode(5)

a.left = b
a.right = c
b.left = d
c.left = e
c.right = f



var goodNodes = function (root) {
    let result;

    var dfs = function (root, max) {
        if (!root) return 0

        result = root.val >= max ? 1 : 0
        max = Math.max(root.val, max)

        result += dfs(root.left, max)
        result += dfs(root.right, max)

        console.log(result)
        return result
    }
    return dfs(root, root.val)

};

console.log(goodNodes(a))