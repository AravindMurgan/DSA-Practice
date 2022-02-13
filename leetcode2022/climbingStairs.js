// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

var climbStairs = function (n) {

    let countStairs = function (stairsRemaining, results) {
        //baseCase//
        console.log('im checked');
        if (stairsRemaining < 0) {
            console.log('<0 check');
            return 0;
        }

        if (stairsRemaining == 0) {
            console.log('==0 check');
            return 1;
        }
        // if (stairsRemaining <= 2) {
        //     return stairsRemaining
        // }

        if (results[stairsRemaining]) {
            return results[stairsRemaining]
        }

        results[stairsRemaining] = countStairs(stairsRemaining - 1, results) +
            countStairs(stairsRemaining - 2, results);

        return results[stairsRemaining]
    }

    return countStairs(n, {})
}

console.log(climbStairs(3));

// var climbStairs = function (n) {

//     let countStairs = function (n, obj) {
//         if (n <= 2) {
//             return n;
//         }

//         if (obj[n]) {
//             return obj[n]
//         }

//         obj[n] = countStairs(n - 1, obj) + countStairs(n - 2, obj);

//         //   let cnt = countStairs(n-2) + countStairs(n-1);
//         return obj[n];
//     }

//     return countStairs(n, {})
// };

// console.log(climbStairs(44));

// console.log(climbStairs(44));