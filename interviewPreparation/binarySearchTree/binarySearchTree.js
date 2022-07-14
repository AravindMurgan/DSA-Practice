class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const depthFirstValues = (root) => {

    if (root === null) return [];
    const leftValues = depthFirstValues(root.left);
    const rightValues = depthFirstValues(root.right);

    console.log('leftValues::', ...leftValues);
    console.log('rightValues::', ...rightValues);
    return [root.val, ...leftValues, ...rightValues]

}

// const depthFirstValues = (root) => {
//     const result = []
//     const stack = [root]
//     while (stack.length > 0) {
//         const current = stack.pop()
//         result.push(current.val)

//         if (current.right) stack.push(current.right)
//         if (current.left) stack.push(current.left)
//     }

//     return result
// }

// const depthFirstValues = (root) => {
//     const result = [];
//     const stack = [root];
//     while (stack.length > 0) {

//         const current = stack.pop();
//         result.push(current.val)

//         if (current.right) stack.push(current.right)
//         if (current.left) stack.push(current.left)

//     }

//     return result
// }


const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

A.left = B
A.right = C
B.left = D
B.right = E
C.left = F
console.log('RESULT:::', depthFirstValues(A));


