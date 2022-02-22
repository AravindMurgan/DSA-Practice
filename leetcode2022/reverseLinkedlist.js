// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]


// var reverseList = function (head) {
//     let prev = null
//     let curr = head;

//     while (curr) {
//         let nxt = curr.next
//         curr.next = prev
//         prev = curr
//         curr = nxt
//     }

//     return prev
// }

function ListNode(val, next) {
    let val = val ? val : 0
    let next = next ? next : 0
}

var reverseList = function (head) {
    let newHead = null;
    const reverse = (node) => {
        if (!node) return null;
        const nextNode = reverse(node.next);
        node.next = null;
        if (nextNode) {
            nextNode.next = node;
        } else {
            newHead = node;
        }
        return node;
    }

    reverse(head);

    return newHead;
};



//{val:1,next:val:2,next:val:3,next:null}