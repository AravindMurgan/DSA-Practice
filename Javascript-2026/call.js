// 'use strict '
// Function.prototype.myCall = function (thisArg, ...argArray) {
//     console.log(this)
//     return this.apply(thisArg, argArray)
// };

Function.prototype.myCall = function (thisArg, ...argArray) {
    const symbol = Symbol('foo')
    console.log(typeof symbol)
    console.log(symbol)
    const wrapperObj = Object(thisArg)
    console.log(wrapperObj)
}

function multiplyAge(multiplier = 1) {
    return this.age * multiplier;
}

const mary = {
    age: 21,
};

const john = {
    age: 42,
};

console.log(multiplyAge.myCall(mary))// 21
console.log(multiplyAge.myCall(john, 2))// 84

// function foo(params) {
//     'use strict'
//     console.log(this)
// }

// // foo()

