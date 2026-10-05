class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function preorder(root) {
    if (root == null) return;
    console.log(root.data)
    preorder(root.left)
    preorder(root.right)

}
function postorder() {
    if (root == null) return;

    postorder(root.left)
    postorder(root.right)
    console.log(root.val)
}
function inorder() {
    if (root == null) return;

    inorder(root.left)
    console.log(root.data)
    inorder(root.right)
}


const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);

preorder(root)