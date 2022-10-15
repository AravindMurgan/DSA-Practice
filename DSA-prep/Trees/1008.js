// 1008. Construct Binary Search Tree from Preorder Traversal
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const bstFromPreorder = function (preorder) {
    let i = 0
    const process = (bound) => {
        if (i === preorder.length || preorder[i] > bound) {
            return null
        }

        const num = preorder[i]
        const node = new TreeNode(num)
        i++

        node.left = process(node.val)
        node.right = process(bound)

        return node
    }

    const root = process(Number.MAX_SAFE_INTEGER)

    return root

}

bstFromPreorder([8, 5, 1, 7, 10, 12])