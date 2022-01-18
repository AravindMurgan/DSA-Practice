console.log('start');

setTimeout(() => {
    console.log('setTimeout function')
}, 1000);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));

console.log('end');