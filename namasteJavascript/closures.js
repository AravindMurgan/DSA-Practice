// let y = 100;
// function a() {
//     let x = 10;
//     // function b() {
//     //     console.log(x);
//     // };
//     // b();
//     console.log(x);
//     console.log(y);
// }
// a();

// function c() {
//     let y = 55;
//     function d() {
//         function a() {
//             let x = ['hello', 'hello2', 'hello3'];
//             console.log(z);
//             function b() {
//                 let z = 25;
//                 x.map(item => console.log(item, y));
//             }
//             x = ['test', 'test2', 'test3'];
//             b();
//             return b
//         }
//         a();
//     }
//     d();
// }

// c();


function Counter() {
    let count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }

    this.decrementCounter = function () {
        count--;
        console.log(count);
    }

}

let counter1 = new Counter;

counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();

counter1.decrementCounter();
counter1.decrementCounter();