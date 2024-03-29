// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
        console.log(this.data)
    }

    remove() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }

    myFunc() {
        console.log('helo');
    }
}

module.exports = Queue;

// function myfunc(){

//   let data = [1, 2, 3, 4, 5,6];
//   let peek = data[data.length -1];
//   console.log(peek);
// }
// myfunc()
