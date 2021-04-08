// module.exports = class Node {
//   constructor(data) {
//     this.data = data;
//     this.children = [];
//   }

//   add(data) {
//     this.children.push(new Node(data));
//   }
// };

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
		console.log(this.children);
	}

	add(data) {
		return this.children.push(new Node(data));
	}

	remove(data) {
		this.children.filter((node) => {
			return node.data !== data;
		});
	}
}

const newNode = new Node();

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		const arr = [this.root];

		while (arr.length) {
			const node = arr.shift();
			arr.push(...node.children);
			fn(node);
		}
	}

}

const letters = [];
const t = new Tree();
t.root = new Node('a');
t.root.add('b');
t.root.add('c');
t.root.children[0].add('d');

t.traverseBF((node) => {
	letters.push(node.data);

});
