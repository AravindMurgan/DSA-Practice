// Given the head of a singly linked list where elements 
// are sorted in ascending order, convert it to a height balanced BST.

// // For this problem, a height-balanced binary tree is defined as a 
// binary tree in which the depth of the two subtrees of every node never differ by more than 1.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const a = new ListNode(-10)
const b = new ListNode(-3)
const c = new ListNode(1)
const d = new ListNode(5)
const e = new ListNode(9)

a.next = b
b.next = c
c.next = d
d.next = e

// [-10,-3,1,5,9]
const treeify = (i, j, curr) => {
    if (j < i) return null
    let mid = i + j >> 1,
        node = new TreeNode()
    node.left = treeify(i, mid - 1, curr)

    node.val = curr.val,
        curr = curr.next

    node.right = treeify(mid + 1, j, curr)

    return node
}
var sortedListToBST = function (head) {
    let curr = head,
        count = 0
    while (curr) curr = curr.next, count++
    curr = head
    return treeify(1, count, curr)
};

console.log(sortedListToBST(a))
