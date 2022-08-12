// var longestSubstring = function (s, k) {
//     let count = 1
//     let str = ''
//     let result = ''

//     for (let i = 0; i < s.length; ++i) {
//         if (s[i] === str) {
//             count++
//             str = s[i]
//         } else {
//             str = s[i]
//         }
//         if (count === k) {
//             result = s.substring(0, i + 1)
//             break
//         }
//     }

//     return result.length
// };

// console.log(longestSubstring('aaab', 3))

// sliding window technique
// Returns maximum sum in a subarray of size k.
//formula to find no of subarrays in array K=N-K+1
function maxSum(arr, n, k) {
    let max_sum = Number.MIN_VALUE
    for (let i = 0; i < n - k + 1; ++i) {
        let current_sum = 0;
        for (let j = 0; j < k; ++j) {
            current_sum = current_sum + arr[i + j]
        }
        max_sum = Math.max(current_sum, max_sum)
    }

    return max_sum
}

let arr = [100, 200, 300, 400]
let k = 2
let n = arr.length
console.log(maxSum(arr, n, k))