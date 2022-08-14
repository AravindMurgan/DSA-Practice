// Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.



// Example 1:

// Input: s = "aaabb", k = 3
// Output: 3
// Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:

// Input: s = "ababbc", k = 2
// Output: 5
// Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.


var longestSubstring = function (s, k) {
    //approach: sliding window
    let max = 0 //track max count of each substrings
    let uniqueLetters = new Set(s).size

    for (let i = 1; i <= uniqueLetters; ++i) {
        let right = 0
        let left = 0
        let map = new Map()
        let currentUnique = 0
        let kCount = 0

        while (right < s.length) {
            map.set(s[right], (map.get(s[right]) || 0) + 1) // create hasmap for each letters

            if (map.get(s[right]) === 1) {
                currentUnique++
            }
            if (map.get(s[right]) === k) {
                kCount++
            }

            while (currentUnique > i) {
                if (map.get(s[left]) === k) {
                    kCount--
                }

                map.set(s[left], (map.get(s[left]) - 1))

                if (map.get(s[left]) === 0) {
                    currentUnique--
                }

                left++
            }

            if (currentUnique === kCount) {
                max = Math.max(max, right - left + 1)
            }

            right++
        }
    }

    return max
}

console.log(longestSubstring('aaabb', 3))


// function lengthOfLongestSubstringKDistinct(s, k) {
//     // write your code here
//     let arr = []
//     let result = ''

//     for (let i = 0; i < s.length; i++) {
//         if (arr.includes(s[i]) == false) {
//             arr.push(s[i])
//         }
//         if (arr.length <= k) {
//             result = result + s[i]
//         }
//     }
//     return result.length
// }

// console.log(lengthOfLongestSubstringKDistinct('', 5))