class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new TreeNode(7)
const b = new TreeNode(3)
const c = new TreeNode(15)
const d = new TreeNode(9)
const e = new TreeNode(20)

a.left = b
a.right = c
c.left = d
c.right = e


function BSTIterator(root) {
    var stack = [];
    return { hasNext, next };

    function hasNext() {
        return root || stack.length;
    }

    function next() {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        var result = root.val;
        root = root.right;
        return result;
    }

}


var obj = new BSTIterator(a)
obj.next()
obj.next()
obj.hasNext()
obj.next()
obj.hasNext()
obj.next()
obj.hasNext()
obj.next()
obj.hasNext()



