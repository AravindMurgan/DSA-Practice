function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};

// var cloneGraph = function (node, map = new Map()) {
//     if (!node) return null
//     map.set(node, new Node(node.val))
//     const queue = [node]
//     while (queue.length > 0) {
//         const current = queue.shift()
//         console.log('curr:::::', current)
//         console.log('curr:::neighbor:::', current.neighbors)
//         for (let neighbor of current.neighbors) {
//             if (!map.has(neighbor)) {
//                 map.set(neighbor, new Node(neighbor.val))
//                 queue.push(neighbor)
//             }
//             map.get(current).neighbors.push(map.get(neighbor))
//         }
//     }

//     return map.get(node)
// }

var cloneGraph = function (node, copy = new Map()) {
    // Handle null case
    if (!node) return null;

    // If our graph hasn't already copied the input node
    if (!copy.has(node.val)) {
        // Create new copy node (+ reference in map)
        copy.set(node.val, new Node(node.val));
        // Recursively clone neighbors
        copy.get(node.val).neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor, copy));
    }

    // Return copied/new node (* not * the original node passed in)
    return copy.get(node.val);
};

adjList = [[2, 4], [1, 3], [2, 4], [1, 3]]

let node1 = new Node();
node1.val = 1;
let node2 = new Node();
node2.val = 2;
let node3 = new Node();
node3.val = 3;
let node4 = new Node();
node4.val = 4;
let v = new Array();
v.push(node2);
v.push(node4);
node1.neighbors = v;
v = [];
v.push(node1);
v.push(node3);
node2.neighbors = v;
v = [];
v.push(node2);
v.push(node4);
node3.neighbors = v;
v = [];
v.push(node3);
v.push(node1);
node4.neighbors = v;

console.log('output', cloneGraph(node1))