// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next) {
		(this.data = data), (this.next = next);
	}
}

class LinkedList {
    
    constructor(){
        this.head = null
    }

    inserFirst(data){
        this.head = new Node(data, this.head);
    }

}

const list = new LinkedList();
list.head = new Node(10);

list.insertFirst('hello im here');
list.insertFirst('a');
list.insertFirst('b');
list.insertFirst('c');
console.log(object);

console.log(list.size());


module.exports = { Node, LinkedList };
