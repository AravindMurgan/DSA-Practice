// class Node {
//     constructor(val) {
//         this.val = val
//         this.left = null
//         this.right = null
//     }
// }

// const a = new Node(1)
// const b = new Node(3)
// const c = new Node(2)
// // const d = new Node(4)
// // const e = new Node(null)
// a.left = b
// a.right = c


// let head;
// let prev = null;


// console.log(bToDLL(a))

// A javascript program for in-place conversion of Binary Tree to DLL

// A binary tree node has data, left pointers and right pointers
class Node {
    constructor(val) {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

var head = null
var prev = null;

//      1
//    /   \
//    2    3

var bstToDLL = function (node) {
    if (!node) return
    bstToDLL(node.left)
    if (!prev) {
        head = node
    } else {
        node.left = prev
        prev.right = node
    }
    prev = node
    bstToDLL(node.right)

    return head
}

const a = new Node(1)
const b = new Node(2)
const c = new Node(3)

a.left = b
a.right = c

bstToDLL(a)



// class Solution {
//     //Function to convert a binary tree to doubly linked list and return it.
//     constructor(){
//         this.head = null
//         this.prev=null
//     }
//     bToDLL(root)
//     {
//         //your code here
//          if (!root) return
//     this.bToDLL(root.left)
//     if (!this.prev) {
//         this.head = root
//     } else {
//         root.left = this.prev
//         this.prev.right = root
//     }
//     this.prev = root
//     this.bToDLL(root.right)

//     return this.head
//     }
// }




