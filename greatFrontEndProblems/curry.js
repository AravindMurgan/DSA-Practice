/**
 * @param {Function} func
 * @return {Function}
 */
function curry(func) {
    
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }

    return (arg) =>
      arg === undefined
        ? curried.apply(this, args)
        : curried.apply(this, [...args, arg]);
  };
}

function add(a, b) {
    return a + b;
  }
  
const curriedAdd = curry(add);
curriedAdd(3)(4); // 7
