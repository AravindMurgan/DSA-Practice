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

function levelWidth(root) {

    const arr = [root,'s'];
    const counters = [0];

    while(arr.length > 1){
        const node = arr.shift();

        if(node === 's'){
            counters.push(0);
            arr.push(node)
        }else{
            arr.push(...node.children);
            counters[counters.length - 1]++;
        }

    }



}

const root = new Node(0);
debugger
root.add(1);
root.add(2);
root.add(3);
root.children[0].add(4);
root.children[2].add(5);

module.exports = levelWidth;


// function myFunc(){

//     let counter = [0];

//     counter.push(1);
//     console.log(counter);

// }
// myFunc()
