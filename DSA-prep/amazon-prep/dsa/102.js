class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(3)
const b = new TreeNode(9)
const c = new TreeNode(20)
const d = new TreeNode(15)
const e = new TreeNode(7)
// const f = new TreeNode(3)
// const g = new TreeNode(5)
// const h = new TreeNode(7)
// const i = new TreeNode(9)
a.left = b
a.right = c
c.left = d
c.right = e


var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    const result = []
    let depth = 0

    while (queue.length > 0) {
        let len = queue.length
        result.push([])
        for (let i = 0; i < len; ++i) {
            const current = queue.shift()
            if (current.val != null) {
                result[depth].push(current.val)
            }

            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        depth++
    }

    return result
};

console.log(levelOrder(a))