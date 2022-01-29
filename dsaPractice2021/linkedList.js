
function node(data, next = null) {
    const node = {
        input: data,
        nextRef: next
    }

    return node
}

function LinkedList(inputHead = null) {
    let head = inputHead;

    this.insertFirst = function (data) {
        head = node(data, head);
        return head
    };
}



const newNode = node(15);

const list = new LinkedList(newNode);

console.log(list.insertFirst(25));
console.log(list.insertFirst(35));


