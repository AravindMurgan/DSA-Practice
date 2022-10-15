// [-100,-200,-300,-20,-5,-10]
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const a = new TreeNode(-100)
const b = new TreeNode(-200)
const c = new TreeNode(-300)
const d = new TreeNode(-20)
const e = new TreeNode(-5)
const f = new TreeNode(-10)
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f




// var maxLevelSum = function (root) {
//     console.log(root)
//     let res = 0;
//     let prev = Number.NEGATIVE_INFINITY;
//     let depth = 1
//     let queue = [root]

//     while (queue.length > 0) {
//         let len = queue.length
//         let curr = 0;
//         for (let i = 0; i < len; ++i) {
//             const currVal = queue.shift()
//             curr += currVal.val
//             if (currVal.left) queue.push(currVal.left)
//             if (currVal.right) queue.push(currVal.right)
//         }
//         if (curr > prev) {
//             res = depth
//         }
//         prev = Math.max(prev, curr)
//         depth++
//     }

//     return res

// };

var maxLevelSum = function (root) {
    let nodes = [-Infinity]
    traverse(root, 1)

    //console.log(nodes)
    return nodes.indexOf(Math.max(...nodes))

    function traverse(node, level) {
        if (!node) return

        if (nodes[level] === undefined) {
            nodes.push(node.val)
        } else {
            nodes[level] += node.val
        }

        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }


};

console.log(maxLevelSum(a))