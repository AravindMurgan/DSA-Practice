// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

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
		this.head = new Node(data, this.head);
	}

	size() {
		debugger;
		let counter = 0;
		let node = this.head;

		while (node) {
			counter++;
			node = node.next;
		}
		return counter;
	}
	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}
		let node = this.head;
		while (node) {
			console.log(node);
			if (!node.next) {
				return node;
			}

			node = node.next;
		}
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}

		let node = this.head;

		this.head = node.next;
	}

	removeLast() {
		if (!this.head) {
			return;
		}

		if (!this.head.next) {
			this.head = null;
			return;
		}

		let previous = this.head;
		let node = this.head.next;

		while (node.next) {
			previous = node;
			node = node.next;
		}

		previous.next = null;
	}

	insertLast(data) {
		const last = this.getLast();
		console.log(this.head);

		if (last) {
			last.next = new Node(data);
			console.log(last);
		} else {
			this.head = new Node(data);
		}
	}

	getAt(index) {
		let counter = 0;
		let node = this.head;

		while (node) {
			if (index === counter) {
				return node;
			}

			counter++;
			node = node.next;
		}

		return null;
	}

	removeAt(index) {
		let node = this.head;

		if (!this.head) {
			return;
		}

		if (index === 0) {
			this.head = this.head.next;
			return;
		}

		let previous = this.getAt(index - 1);
		console.log(previous);

		if (!previous || !previous.next) {
			return;
		}

		previous.next = previous.next.next;
	}

	insertAt(data, index) {
		if (!this.head) {
			this.head = new Node(data);
			return;
		}
		if (index === 0) {
			this.head = new Node(data, this.head);
		}

		const previous = this.getAt(index - 1) || this.getLast();
		const node = new Node(data, previous.next);
		previous.next = node;
	}

	forEach(fn) {
		let node = this.head;
		let counter = 0;
		while (node) {
			fn(node, counter);
			node = node.next;
			counter++;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

let list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.forEach((node) => {
	node.data += 10;
});
console.log(list.getAt(0));
console.log(list.insertAt('Hai', 2));

module.exports = { Node, LinkedList };
