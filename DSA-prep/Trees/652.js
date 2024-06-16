class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(2)
const b = new Node(1)
const c = new Node(1)
const d = new Node(4)
const e = new Node(null)
const f = new Node(2)
const g = new Node(4)
const h = new Node(null)
const i = new Node(null)
const k = new Node(4)


a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
d.left = h
d.right = i
e.left = k
//         1
//      /     \
//   2          3
//  /  \       /  \
//  4  n       2   4
//            /
//            4


const a = new Node(2)
const b = new Node(2)
const c = new Node(2)
const d = new Node(3)
const e = new Node(null)
const f = new Node(3)
const g = new Node(null)

a.left = b
a.right = c

b.left = d
b.right = e

c.left = f
c.right = g


var dfs = function (root, map, res) {
    if (!root) return '#'

    const subtree = `${root.val}.${dfs(root.left, map, res)}.${dfs(root.right, map, res)}`

    map.set(subtree, (map.get(subtree) || 0) + 1)
    if (map.get(subtree) === 2) {
        res.push(root)
    }

    return subtree
}

var findDuplicateSubtrees = function (root) {
    let map = new Map()
    let res = []

    dfs(root, map, res)
    console.log(res)
    return res
};

console.log(findDuplicateSubtrees(a))