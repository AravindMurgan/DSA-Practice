// // --- Directions
// // Given the root node of a tree, return
// // an array where each element is the width
// // of the tree at each level.
// // --- Example
// // Given:
// //     0
// //   / |  \
// // 1   2   3
// // |       |
// // 4       5
// // Answer: [1, 3, 2]

// function levelWidth(root) {}

// module.exports = levelWidth;

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
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
debugger
    const t = new Tree();
    t.root = new Node('a');
    t.root.add('b');
    t.root.add('c');
    t.root.children[0].add('d');

    t.traverseBF(node => {
      letters.push(node.data);
    });