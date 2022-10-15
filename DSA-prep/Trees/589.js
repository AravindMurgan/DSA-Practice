// 589. N-ary Tree Preorder Traversal

class Node {
    constructor(val, children = []) {
        this.val = val
        this.children = children
    }
}

const a = new Node(1)
a.children.push(new Node(3))
a.children.push(new Node(2))
a.children.push(new Node(4))
a.children[0].children.push(new Node(5))
a.children[0].children.push(new Node(6))
//   1
//   |
//   [3,2,4]
//    |
//    [5,6]

//    1
//   / \ \
//    3 2 4
//    /
//    5 6

var preorder = function (root, ans = []) {
    if (!root) return ans

    for (let child of root.children) {
        preorder(child, ans)
        ans.push(root.val)
    }

    return ans
};
console.log(preorder(a))

