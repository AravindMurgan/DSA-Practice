// getName(); // Namaste Javascript
// console.log(x); // undefined
// var x = 7;
// function getName() {
// console.log("Namaste Javascript");
// }

// //1st global execution will be created

// Memory  | code
// getName: fn...
// var x:undefined


// getName();
// console.log(getName)
// var getName = function () {
//     console.log('My name is aravind')
// }

// function exec(val) {
//     name1 = 'aravind'

//     function name1() {

//     }

//     // var name = 'anand'

//     return name1
// }



// exec()
// console.log(name1)

// {
//     var a = 'aravind'
//     let b = 10;
// }
// console.log(b)
// console.log(a)

// let a = 10
// var b = 20

// function exec(val) {
//     name1 = 'aravind'

//     function name1() { }

//     return name1
// }

// exec()

// {
//     var a = 'hellp'
//     let b = 10
//     const c = 20
// }

// var a = 10;
// let b = 10;
// const c = 20;


// (function hello() {
//     const z = 10;
// })()


// let a = 10

// {
//     var a = 20
// }

// function a() {
//     const b = 20;

//     function z() {
//         console.log(b);
//     }
//     z()
// }
// a()

// function foo() {

//     for (let i = 0; i <= 5; ++i) {
//         function close() {
//             setTimeout(() => {
//                 console.log(i)
//             }, i * 1000);
//         }
//         close(i)
//     }
// }
// foo()

// var a = 10;
// function outer(a) {


//     function inner() {
//         console.log(a)
//     }

//     return inner
// }
// console.log(window.a)
// outer(15)()

// function counter() {

//     var count = 0
//     function inner() {
//         count += 1
//         // console.log(count)
//     }

//     return inner;
// }

// var counter1 = counter()
// counter1()
// counter1()
// console.log(counter1())

// var counter2 = counter()
// counter2()
// console.log(counter2())


// function Counter() {
//     let count = 0

//     this.increment = function () {
//         count += 1
//         console.log(count)
//     }

//     this.decrement = function () {
//         count -= 1
//         console.log(count)

//     }

// }

// var counter1 = new Counter()
// counter1.increment()
// counter1.decrement()

let func = function func2() {
    console.log('Hello world')
}

func2()