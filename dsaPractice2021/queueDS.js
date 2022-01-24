class Queue {
    constructor() {
        this.data = [];
        this.str = 'helloWorld'
    }

    add(record) {
        this.data.unshift(record);
        // console.log(this.data)
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


const queueOne = new Queue();
queueOne.add(1);
queueOne.add(2);
queueOne.add(5);
queueOne.add(15);


const queueTwo = new Queue();
queueTwo.add('Hi');
queueTwo.add('Hello');

function weave(queueOne, queueTwo) {
    const q = new Queue();

    while (queueOne.peek() || queueTwo.peek()) {

        if (queueOne.peek()) {
            q.add(queueOne.remove());
        }

        if (queueTwo.peek()) {
            q.add(queueTwo.remove());
        }

    }
    console.time();
    console.log(q.remove(), q.remove());

    console.timeEnd();

    console.time();
    console.log(q);
    console.timeEnd();
}

weave(queueOne, queueTwo);

// const arr = [];
// arr.push(1);
// arr.push(2);
// arr.shift();
// arr.shift();
// console.log(arr)
