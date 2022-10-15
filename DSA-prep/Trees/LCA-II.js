// Lowest common ancestor - II
// Link:https://zhenchaogan.gitbook.io/leetcode-solution/leetcode-1644-lowest-common-ancestor-of-a-binary-tree-ii

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const a = new TreeNode(6)
const b = new TreeNode(2)
const c = new TreeNode(8)

a.left = b
a.right = c
// const d = new TreeNode(3)
// const e = new TreeNode(1)
// const f = new TreeNode(5)


var lowestCommonAncestor = function (root, p, q) {
    let count = 0;

    var dfs = function (root, p, q) {
        if (!root) {
            return null
        }

        if (root.val === p.val || root.val === q.val) {
            count++
            return root
        }

        let left = dfs(root.left, p, q)
        let right = dfs(root.right, p, q)

        if (!left) return right
        if (!right) return left
        return root
    }

    let res = dfs(root, p, q)

    return count === 2 ? res : null
}
const p = new TreeNode(2)
const q = new TreeNode(8)

console.log(lowestCommonAncestor(a, p, q))