// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor(){
        this.data = [];
        console.log(this.data);
    }

    push(){
        return this.data.push()
    }

    pop(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length -1];
    }


}

let Stacks = require('./index');

function myStack(n){

    const s = new Stacks();
    s.add(n)
}
myStack(1,2,3)

module.exports = Stack;
