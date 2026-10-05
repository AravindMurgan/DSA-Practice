function curry(func) {


    return function curried(...args) {

        if (args.length >= func.length) {
            return func.apply(this, args)
        }

        return curried.bind(this, ...args)
    }

}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);
curriedAdd(3)(4); // 7