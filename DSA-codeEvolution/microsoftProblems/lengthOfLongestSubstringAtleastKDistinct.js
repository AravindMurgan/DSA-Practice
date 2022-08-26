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

// // brute force approach
// // Returns maximum sum in a subarray of size k.
// //formula to find no of subarrays in array K=N-K+1
// function maxSum(arr, n, k) {
//     let max_sum = Number.MIN_VALUE
//     for (let i = 0; i < n - k + 1; ++i) {
//         let current_sum = 0;
//         for (let j = 0; j < k; ++j) {
//             current_sum = current_sum + arr[i + j]
//         }
//         max_sum = Math.max(current_sum, max_sum)
//     }

//     return max_sum
// }

// let arr = [100, 200, 300, 400]
// let k = 2
// let n = arr.length
// console.log(maxSum(arr, n, k))

// // sliding window technique
// // Javascript code for
// // O(n) solution for finding
// // maximum sum of a subarray
// // of size k
// function maxSum2(arr, n, k) {
//     let max = 0;
//     let sum = 0;
//     // find initial sum of first k elements
//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//         max = sum;
//     }
//     // iterate the array once
//     // and increment the right edge
//     for (let i = k; i < n; i++) {
//         sum += arr[i] - arr[i - k];

//         // compare if sum is more than max,
//         // if yes then replace
//         // max with new sum value
//         if (sum > max) {
//             max = sum;
//         }
//     }
//     return max;
// }

// function maxSum3(arr, n, k) {
//     // form the window sub array
//     let max = 0
//     let sum = 0

//     //initial window sub array using k element
//     for (let i = 0; i < k; ++i) {
//         sum = arr[i] + sum
//         max = sum
//     }

//     ///traverse array and window to find max sum
//     for (let j = k; j < n; ++j) {
//         sum += arr[j] - arr[j - k]
//         if (sum > max) {
//             max = sum
//         }
//     }

//     return max
// }



// let arr = [100, 200, 300, 400]
// let k = 2
// let n = arr.length
// console.log(maxSum3(arr, n, k))

// function longestSubstring(s, k) {
//     if (k > s.length) return 0
//     let arr = []
//     let obj = {}
//     for (let i = 0; i < s.length; ++i) {
//         obj[s[i]] = obj[s[i]] + 1 || 1

//         if (Object.keys(obj).length > k) break
//         arr.push(s[i])
//     }
//     console.log('test', arr)
//     return arr.length
// }

// console.log(longestSubstring("aabbcc", 1))

function longestSubstring(s, k) {
    let max = 0
    let map = new Map()
    let left = 0
    let right = 0

    while (right < s.length) {
        let rightChar = s[right]

        map.set(rightChar, (map.get(rightChar) || 0) + 1)

        while (map.size > k) {
            let leftChar = s[left]
            map.set(leftChar, map.get(leftChar) - 1)

            if (map.get(leftChar) === 0) {
                map.delete(leftChar)
            }

            left++
        }

        max = Math.max(max, right - left + 1)
        right++
    }

    return max
}
console.log(
    longestSubstring('aabacbebebe', 3))