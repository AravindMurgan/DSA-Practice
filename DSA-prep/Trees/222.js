// 222. Count Complete Tree Nodes

// Input: root = [1, 2, 3, 4, 5, 6]
// Output: 6
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)
const e = new Node(5)
const f = new Node(6)
const g = new Node(7)
a.left = b
// a.right = c
// b.left = d
// b.right = e
// c.left = f
// c.right = g

var countNodes = function (root) {

    function leftDepth(node) {
        if (!node) return 0;
        return leftDepth(node.left) + 1;
    }

    function rightDepth(node) {
        if (!node) return 0;
        return rightDepth(node.right) + 1;
    }

    function traverse(node) {
        const leftLen = leftDepth(node);
        const rightLen = rightDepth(node);

        if (leftLen === rightLen) {
            return Math.pow(2, leftLen) - 1;
        } else {
            return leftLen + rightLen + 1
            // return traverse(node.left) + traverse(node.right) + 1;
        }

    }
    return traverse(root);
};

countNodes(a)