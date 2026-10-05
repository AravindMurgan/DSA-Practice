class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


// const head = new Node(10)
// head.next = new Node(20);
// head.next.next = new Node(40);
// head.next.next.next = new Node(50);


// function insertPos(head, pos, val) {
//     if (pos < 1) return head;

//     if (pos === 1) {
//         const node = new Node(val)
//         node.next = head;
//         return node;
//     }

//     let curr = head;

//     for (let i = 1; i < pos - 1 && curr !== null; ++i) {
//         curr = curr.next;
//     }

//     if (curr === null) return head;

//     const node = new Node(val)
//     node.next = curr.next;
//     curr.next = node;

//     return head;

// }

// function traverse(head) {
//     if (head == null) return null;

//     let curr = head;

//     while (curr !== null) {
//         console.log(curr.data)
//         if (curr.next) {
//             console.log('-->')
//         }
//         curr = curr.next;
//     }

// }
// // console.log(insertPos(head, 2, 11))
// const nodeList = insertPos(head, 2, 11)
// console.log(nodeList)
// traverse(nodeList)


function deleteNode(head, pos) {
    if (head == null) return null;
    let temp = head;

    if (pos === 1) {
        head = head.next;
        return head;
    }

    let prev = null;
    for (let i = 1; i < pos; ++i) {
        prev = temp;
        temp = temp.next;
    }

    prev.next = temp.next

    return head;

}
