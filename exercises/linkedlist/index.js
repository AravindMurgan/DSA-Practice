// // --- Directions
// // Implement classes Node and Linked Lists
// // See 'directions' document

// class Node {
// 	constructor(data, next = null) {
// 		this.data = data;
// 		this.next = next;
// 	}
// }

// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 	}

// 	insertFirst(data) {
// 		this.head = new Node(data, this.head);
// 	}

// 	size() {

// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			counter++;
// 			node = node.next;
// 		}
// 		return counter;
// 	}
// 	getFirst() {

// 		return this.head;
// 		;
// 	}

// 	getLast() {

// 		if (!this.head) {
// 			return null;
// 		}
// 		let node = this.head;


// 		while (node) {

// 			if (!node.next) {
// 				return node;
// 			}

// 			node = node.next;
// 		}
// 	}

// 	clear() {
// 		this.head = null;
// 	}

// 	removeFirst() {
// 		if (!this.head) {
// 			return;
// 		}

// 		let node = this.head;

// 		this.head = node.next;
// 	}

// 	removeLast() {
// 		if (!this.head) {
// 			return;
// 		}

// 		if (!this.head.next) {
// 			this.head = null;
// 			return;
// 		}

// 		let previous = this.head;
// 		let node = this.head.next;

// 		while (node.next) {
// 			previous = node;
// 			node = node.next;
// 		}

// 		previous.next = null;
// 	}

// 	insertLast(data) {
// 		const last = this.getLast();

// 		if (last) {
// 			last.next = new Node(data);
// 		} else {
// 			this.head = new Node(data);
// 		}
// 	}

// 	getAt(index) {
// 		let counter = 0;
// 		let node = this.head;

// 		while (node) {
// 			if (index === counter) {
// 				return node;
// 			}

// 			counter++;
// 			node = node.next;
// 		}

// 		return null;
// 	}

// 	removeAt(index) {
// 		let node = this.head;

// 		if (!this.head) {
// 			return;
// 		}

// 		if (index === 0) {
// 			this.head = this.head.next;
// 			return;
// 		}

// 		let previous = this.getAt(index - 1);

// 		if (!previous || !previous.next) {
// 			return;
// 		}

// 		previous.next = previous.next.next;
// 	}

// 	insertAt(data, index) {
// 		if (!this.head) {
// 			this.head = new Node(data);
// 			return;
// 		}
// 		if (index === 0) {
// 			this.head = new Node(data, this.head);
// 		}

// 		const previous = this.getAt(index - 1) || this.getLast();
// 		const node = new Node(data, previous.next);
// 		previous.next = node;
// 	}

// 	forEach(fn) {
// 		let node = this.head;
// 		let counter = 0;
// 		while (node) {
// 			fn(node, counter);
// 			node = node.next;
// 			counter++;
// 		}
// 	}

// 	*[Symbol.iterator]() {
// 		let node = this.head;
// 		while (node) {
// 			yield node;
// 			node = node.next;
// 		}
// 	}
// }

// let list = new LinkedList();
// list.insertFirst(1);
// list.insertFirst(2);
// list.insertFirst(3);
// list.insertFirst(4); 
// console.log(list.size());
// console.log(list.getLast());

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		const newNode = new Node(data, this.head);
		this.head = newNode;
	}

	size() {
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next
		}
		return counter
	}

	getFirst() {
		console.log(this.head);
		if (!this.head) {
			return null
		} else {
			return this.head
		}
		// let node = this.head;
		// let data;
		// while (node) {
		// 	data = node.data
		// 	node = node.next;
		// }
		// return data

	}

	getLast() {
		if (!this.head) {
			return null
		}
		let node = this.head;
		while (node) {
			if (!node.next) {
				return node
			}
			node = node.next
		}
	}

	clear() {
		return delete this.head /// or this.head=null both are fine
	}

	removeFirst() {
		if (!this.head) {
			return null
		}
		let node = this.head;
		this.head = node.next;
	}

	removeLast() {
		let node = this.head
		if (!node) {
			return
		}

		if (!node.next) {
			this.head = null;
			return
		}

		let currentNode = node;
		let nextNode = node.next;

		while (nextNode.next) {
			currentNode = nextNode;
			nextNode = nextNode.next;
		}

		currentNode.next = null;
	}

	insertLast(data) {
		if (!this.head) {
			const newNode = new Node(data);
			this.head = newNode;
			return;
		}
		const newNode = new Node(data);
		let lastNode = this.getLast()
		lastNode.next = newNode;
	}

	getAt(int) {
		// if (!this.head) {
		// 	return null
		// }; //line 297 solves this issue.

		let node = this.head;
		let counter = 0;

		while (node) {
			if (counter === int) {
				return node;
			}
			counter++
			node = node.next;
		}
		return null;
	}

	removeAt(idx) {
		if (!this.head) {
			return null
		}
		if (idx === 0) {
			// node = this.getAt(idx);
			// let size = this.size();
			// if (size > 0) {
			// 	this.head = node.next;
			// } else {
			// 	this.head = null
			// }
			this.head = this.head.next;
		}
		const previous = this.getAt(idx - 1);
		if (!previous || !previous.next) {
			return;
		}
		previous.next = previous.next.next;
	}

	insertAt(data, idx) {
		if (!this.head) {
			this.head = new Node(data);
			return
		}

		if (idx === 0) {
			const current = this.head;
			this.head = new Node(data, current);
			return;
		}

		const previous = this.getAt(idx - 1) || this.getLast();
		// if (!previous) return;
		const node = new Node(data, previous.next);
		previous.next = node;

	}
}

const list = new LinkedList();

const node = new Node(5);

list.head = node;
list.insertFirst(15);
list.insertFirst(25);
list.insertLast(10);
console.log(list.head);





module.exports = { Node, LinkedList };
