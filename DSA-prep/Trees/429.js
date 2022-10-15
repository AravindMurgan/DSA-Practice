// 429. N-ary Tree Level Order Traversal

class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}
// Node root = newNode(1);
// (root.children).add(newNode(3));
// (root.children).add(newNode(2));
// (root.children).add(newNode(4));
// (root.children.get(0).children).add(newNode(5));
// (root.children.get(0).children).add(newNode(6));

const a = new Node(1)
a.children.push(new Node(3))
a.children.push(new Node(2))
a.children.push(new Node(4))
a.children[0].children.push(new Node(5))
a.children[0].children.push(new Node(6))

// var levelOrder = function (root) {
//     const res = [], queue = [];
//     let depth = 0, len = 0;
//     if (root) queue.push(root);
//     while (queue.length) {
//         res.push([]);
//         len = queue.length;
//         for (let i = 0; i < len; i++) {
//             const curr = queue.shift();
//             if (!curr) continue;
//             res[depth].push(curr.val);
//             queue.push(...curr.children);
//         }
//         depth++;
//     }
//     return res;
// };

var levelOrder = function (root) {
    const res = [];
    BFS(root, 0);
    return res;

    function BFS(node, depth) {
        if (!node) return;
        if (depth === res.length) {
            res.push([]);
        }
        res[depth].push(node.val);
        for (child of node.children) {
            BFS(child, depth + 1);
        }
    }
};

console.log(levelOrder(a))