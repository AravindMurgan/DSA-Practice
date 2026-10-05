class Node {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right

    }
}
// const nodeA = new Node(9)
// console.log(nodeA)

// function bfs(root) {
//     // enqueue the root
//     let queue = [root], out = [];
//     // since we need all the nodes at a particular level we will need to iterate and push all the children in the queue
//     while (queue.length) {
//         let size = queue.length;
//         let levelNodes = [];
//         while (size) {
//             // dequeue the  element
//             let node = queue.shift();
//             levelNodes.push(node.value);

//             // gather all the children of node dequeued and enqueue them(left/right nodes)
//             node.left && queue.push(node.left);
//             node.right && queue.push(node.right);
//             size--;
//         }
//         out.push(levelNodes);
//     }
//     return out;
// }
// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.left.left = new Node(40);
// root.left.right = new Node(50);
// root.right.left = new Node(60);
// root.right.right = new Node(70);
// console.log(bfs(root))


function dfs(root) {
    let out = []
    preorder(root, out)
    return out;
}
function preorder(root, out) {
    if (root === null) return;

    out.push(root.value);
    root.left && preorder(root.left, out)
    root.right && preorder(root.right, out)
}
let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.left = new Node(60);
root.right.right = new Node(70);
console.log(dfs(root))