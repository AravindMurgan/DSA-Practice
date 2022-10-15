// 1367. Linked List in Binary Tree
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const a1 = new ListNode(4)
const a2 = new ListNode(2)
const a3 = new ListNode(8)

const a = new TreeNode(-100)
const b = new TreeNode(-200)
const c = new TreeNode(4)
const d = new TreeNode(-20)
const e = new TreeNode(-5)
const f = new TreeNode(2)
const g = new TreeNode(50)
const h = new TreeNode(88)
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g
f.left = h

a1.next = a2
a2.next = a3

function isSubPath(head, root) {

    if (head == null) return true;
    if (root == null) return false;
    return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);
}

function dfs(head, root) {
    if (head == null) return true;
    if (root == null) return false;
    return head.val == root.val && (dfs(head.next, root.left) || dfs(head.next, root.right));
}

console.log(isSubPath(a1, a))
