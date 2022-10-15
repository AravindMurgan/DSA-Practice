
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(3)
const b = new Node(9)
const c = new Node(20)
const d = new Node(15)
const e = new Node(17)

a.left = b
a.right = c
c.left = d
c.right = e



var levelOrderBottom = function (root) {
    let res = []
    let queue = [root]
    let depth = 0

    while (queue.length > 0) {
        let len = queue.length
        res.unshift([])
        for (let i = 0; i < len; ++i) {
            let curr = queue.shift()
            res[depth].push(curr.val)

            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
        depth++
    }

    return res

};

levelOrderBottom(a)
