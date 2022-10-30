class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(1)
const b = new TreeNode(2)
const c = new TreeNode(3)
const d = new TreeNode(5)
const e = new TreeNode(4)

a.left = b
a.right = c
b.right = d
c.right = e


var rightSideView = function (root) {
    let result = []
    let stack = [root]

    while (stack.length > 0) {
        let len = stack.length;
        for (let i = len; i > len - 1; --i) {
            const current = stack.pop()
            result.push(current.val)

            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)

        }
    }
    return result
};
console.log(rightSideView(a))