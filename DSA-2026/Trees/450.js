
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}


/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */

//     5
//    / \
//   3   6
//  / \   \
// 2   4   7

var deleteNode = function (root, key) {
    if (!root) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Node found

        // Case 1 & 2: one or zero child
        if (!root.left) return root.right;
        if (!root.right) return root.left;

        // Case 3: two children
        let successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
};

function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}


const root =
    new TreeNode(5,
        new TreeNode(3,
            new TreeNode(2),
            new TreeNode(4)
        ),
        new TreeNode(6,
            null,
            new TreeNode(7)
        )
    );

deleteNode(root, 3)