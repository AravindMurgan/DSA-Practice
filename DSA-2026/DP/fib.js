// const fib = (n, memo = {}) => {
//     if (n in memo) return memo[n];
//     if (n <= 1) return 1;

//     memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//     return memo[n];
// }
// console.log(fib(45))


//Tabulation

const fib = (n) => {

    const table = Array(n + 1).fill(0)
    table[1] = 1;

    for (let i = 0; i <= n; ++i) {
        if (i + 1 <= n) table[i + 1] += table[i]
        if (i + 2 <= n) table[i + 2] += table[i]
    }

    return table[n]
}
console.log('helo')
console.log(fib(50));
