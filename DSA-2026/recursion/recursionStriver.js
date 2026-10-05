// // Q1: Print name 5 times
// const printName = (n, i = 1) => {
//     if (i > n) return;
//     console.log('Aravind Murugan')
//     printName(n, i + 1)

// }

// // printName(5)

// // Q2: Print linearly from 1 to N
// const print1toN = (n, i = 1) => {
//     if (i > n) return;
//     console.log(i)
//     print1toN(n, i + 1);

// }
// // print1toN(5);

// // Q3: Print from N to 1
// const printNto1 = (n) => {
//     if (n < 1) return
//     console.log(n)
//     printNto1(n - 1);
// }

// // printNto1(5);

// // Q4: Print linearly from 1 to N (by backtrack)
// const print1toNBacktrack = (n) => {
//     if (n < 1) return;

//     print1toNBacktrack(n - 1);
//     console.log(n);

// }

// // print1toNBacktrack(5);

// // Q5: Print from N to 1 (by backtrack)
// const printNto1Backtrack = (n, i = 1) => {
//     if (i > n) return;
//     printNto1Backtrack(n, i + 1);
//     console.log(i)

// }
// printNto1Backtrack(5)

// const arr = [1, 2, 3, 4]
// function reverseArr(l, r, arr) {
//     if (r <= l) return

//     [arr[l], arr[r]] = [arr[r], arr[l]]

//     reverseArr(l + 1, r - 1, arr)
//     return arr;
// }

// const arr = [1, 2, 3, 4]
// const n = arr.length
// function reverseArr(i) {
//     if ()
// }


// console.log(reverseArr(0, arr.length - 1, arr));

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 1) return n;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
console.log(fib(40));