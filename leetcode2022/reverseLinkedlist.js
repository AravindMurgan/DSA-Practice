// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


var reverseList = function (head) {
    let prev = null
    let curr = head;

    while (curr) {
        let nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    }

    return prev
}

///recursive approach//
// Recursive javascript program to reverse
// a linked list

// var head; // head of list
// class Node {
//     constructor(val) {
//         this.data = val;
//         this.next = null;
//     }
// }

// function reverse(head) {
//     if (head == null || head.next == null)
//         return head;

//     /*
//     * reverse the rest list and put the first element at the end
//     */
//     var rest = reverse(head.next);
//     head.next.next = head;

//     /* tricky step -- see the diagram */
//     head.next = null;

//     /* fix the head pointer */
//     return rest;
// }

// // function print() {
// //     var temp = head;
// //     while (temp != null) {
// //         document.write(temp.data + " ");
// //         temp = temp.next;
// //     }
// //     document.write();
// // }

// function push(data) {
//     var temp = new Node(data);
//     temp.next = head;
//     head = temp;
// }

// /* Driver program to test above function */

// /* Start with the empty list */

// push(3);
// push(2);
// push(1);

// // document.write("Given linked list<br/>");
// // print();

// head = reverse(head);

// // document.write("<br/>Reversed Linked list<br/>");
// // print();

