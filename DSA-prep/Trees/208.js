// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// function insert(word) {
//     let node = {}
//     for (let c of word) {
//         if (node[c] == null) node[c] = {};
//         node = node[c];
//         console.log('node::2', node)
//     }
//     node.isWord = true;
//     console.log('node::', node)
// }
// insert('apple')
class Trie {
    constructor() {
        this.root = {};
    }
    insert(word) {
        let node = this.root;
        for (let c of word) {
            if (!node[c]) node[c] = {};
            node = node[c];
        }
        node.endOfWord = true;
    }
    traverse(word) {
        let node = this.root;
        for (let c of word) {
            node = node[c];
            if (!node) return null;
        }
        return node;
    }
    search(word) {
        const node = this.traverse(word);
        return node != null && node.endOfWord == true;
    }
    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
}

var obj = new Trie()
console.log(obj.insert('apple'))
console.log(obj.insert('helloworld'))
console.log(obj.search('appl'))
console.log(obj.startsWith('app'))
console.log(obj.startsWith('zzz'))