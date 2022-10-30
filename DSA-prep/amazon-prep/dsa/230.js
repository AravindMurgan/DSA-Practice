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
const d = new TreeNode(2)


a.left = b
a.right = c
b.right = d


// var kthSmallest = function (root, k) {
//     let result = []
//     var dfs = function (root) {
//         if (!root) return null

//         dfs(root.left)
//         result.push(root.val)
//         dfs(root.right)
//     }
//     dfs(root)
//     console.log(result)
//     return result[k - 1]

// };

//      3
//     /  \
//    1    4
//     \
//      2  

const kthSmallest = (root, k) => {
    let result;
    var dfs = function (root) {
        if (!root) return null

        dfs(root.left)
        k--;
        if (k === 0) result = root.val;
        dfs(root.right)
    }
    dfs(root)

    return result
};

console.log(kthSmallest(a, 2))