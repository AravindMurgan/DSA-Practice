// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".


// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters.

// function buildCharMap(str) {
//     let obj = {}

//     for (let char of str) {
//         if (obj[char]) {
//             obj[char]++
//         } else {
//             obj[char] = 1
//         }
//     }
//     return obj
// }
// // var findAnagrams = function (s, p) {
// //     let arr = []
// //     const n = s.length
// //     const k = p.length

// //     for (let i = 0; i < n - k + 1; ++i) {
// //         let stringA = ''
// //         let stringB = p

// //         for (let j = 0; j < k; ++j) {
// //             stringA = stringA + s[i + j]
// //         }
// //         const charMapA = buildCharMap(stringA)
// //         const charMapB = buildCharMap(stringB)
// //         let isValidAnagrams = true

// //         for (let char in charMapB) {
// //             if (charMapA[char] !== charMapB[char]) {
// //                 isValidAnagrams = false
// //             }
// //         }

// //         if (isValidAnagrams) {
// //             arr.push(i)
// //         }
// //     }

// //     return arr
// // };


// var findAnagrams = function (s, p) {
//     const arr = []
//     let n = s.length
//     let k = p.length



//     const pCount = buildCharMap(p)

//     for (let i = 0; i < n - k + 1; ++i) {
//         let isValidAnagram = true
//         let str = s.substring(i, (i + k))
//         const sCount = buildCharMap(str)

//         for (let char in pCount) {
//             if (pCount[char] !== sCount[char]) {
//                 isValidAnagram = false
//             }
//         }
//         if (isValidAnagram) {
//             arr.push(i)
//         }
//     }
//     return arr
// };

// function buildCharMap(str) {
//     let map = new Map()

//     for (let char of str) {
//         map.set(char, (map.get(char) || 0) + 1)
//     }
//     return map
// }

// var findAnagrams = function (s, p) {
//     const arr = []
//     let n = s.length
//     let k = p.length

//     const pCount = buildCharMap(p)

//     for (let i = 0; i < n - k + 1; ++i) {
//         let isValidAnagram = true
//         let str = s.substring(i, (i + k))
//         const sCount = buildCharMap(str)

//         for (let key of pCount.keys()) {
//             if (pCount.get(key) !== sCount.get(key)) {
//                 isValidAnagram = false
//             }
//         }
//         if (isValidAnagram) {
//             arr.push(i)
//         }
//     }
//     return arr
// };


var findAnagrams = function (s, p) {
    let L = 0, R = 0, windowSize = p.length, count = 0, map = new Map(), result = [];
    for (let ch of p) {
        if (!map.has(ch)) {
            map.set(ch, 1);
        } else {
            let c = map.get(ch);
            map.set(ch, c + 1);
        }
    }
    count = map.size;
    while (R < s.length) {
        if (map.has(s[R])) {
            let c = map.get(s[R]);
            c--;
            if (!c) {
                count--;
            }
            map.set(s[R], c);
        }
        if (R - L + 1 < p.length) {
            R++;
        } else if (R - L + 1 === p.length) {
            if (count === 0) {
                result.push(L);
            }
            if (map.has(s[L])) {
                let c = map.get(s[L]);
                c++;
                if (c === 1) {
                    count++;
                }
                map.set(s[L], c);
            }
            L++;
            R++;
        }
    }
    return result;
};

console.log(findAnagrams("cbaebabacd", "abc"))