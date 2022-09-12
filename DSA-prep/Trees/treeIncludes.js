// Write a function, treeIncludes, that takes in the root of a binary tree and a target value.
//  The function should return a boolean indicating whether or not the value is contained in the tree.

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

treeIncludes(a, "e"); // -> true

class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f



// const treeIncludes = (root, target) => {
//   if(!root) return false
//   const queue = [root]

//   while(queue.length >0){
//     const current = queue.shift()

//     if(current.val === target) return true

//     if(current.left) queue.push(current.left)
//     if(current.right) queue.push(current.right)
//   }

//   return false
// };
//recursive dfs
const treeIncludes = (root, target) => {
    if (!root) return false
    if (root.val === target) return true

    const leftValues = treeIncludes(root.left, target)
    const rightValues = treeIncludes(root.right, target)

    return leftValues || rightValues
};