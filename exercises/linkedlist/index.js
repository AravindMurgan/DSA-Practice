// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next) {
		(this.data = data), (this.next = next);
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	inserFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}
		return counter;

		getFirst(){
			return this.head
		}
	}
}

const list = new LinkedList();
list.head = new Node(10);

module.exports = { Node, LinkedList };
