// function fibRecursive(n){
//     debugger
//     ///baseCase///
//     if(n<2){
//         return n;
//     }

//     return fibRecursive(n-1) + fibRecursive(n-2);
// }


// console.log(fibRecursive(6));

function memoize(fn){
    let cache={};
    return function(...args){
        console.log(args);
        if(cache[args]){
            return cache[args]
        }

        const result = fn.apply(this,args);
        cache[args]=result;
        return result;
    }
}

function slowFib(n){

    if(n<2){
        return n;
    }

    slowFib(n-1) + slowFib(n-2);
}

const fibs=memoize(slowFib);

console.log(fibs(4));















// function fib(n){
//     let results=[0,1];

//     for(let i=2 ; i<=n; i++){
//         let a = results[i-1];
//         let b = results[i-2];
//         results.push(a+b);
//     }

//     return results[n];

// }

// console.log(fib(50));