class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// function traverseList(head) {

//     while (head !== null) {
//         console.log(head.data)
//         if (head.next !== null) {
//             console.log(" -> ");
//         }

//         head = head.next;
//     }

// }

function traverseListRecursion(head) {
    if (head == null) {
        console.log('base case');
        return;
    }

    console.log(head.data)

    if (head.next != null) {
        console.log('-->')
    }


    traverseListRecursion(head.next)
}

// create a hard-coded linked list:
// 10 -> 20 -> 30 -> 40
let head = new Node(10);
head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);
traverseListRecursion(head);