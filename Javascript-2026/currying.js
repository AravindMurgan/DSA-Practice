
function multiply(...args) {
    return args.reduce((prev, curr) => prev * curr, 1)
}

function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        }


        return curried.bind(this, ...args)
    }
}


const multiplier = curry(multiply);
console.log(multiplier(7)(1)(2))