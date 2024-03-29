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


// var findAnagrams = function (s, p) {
//     let L = 0, R = 0, windowSize = p.length, count = 0, map = new Map(), result = [];
//     for (let ch of p) {
//         if (!map.has(ch)) {
//             map.set(ch, 1);
//         } else {
//             let c = map.get(ch);
//             map.set(ch, c + 1);
//         }
//     }
//     count = map.size;
//     while (R < s.length) {
//         if (map.has(s[R])) {
//             let c = map.get(s[R]);
//             c--;
//             if (!c) {
//                 count--;
//             }
//             map.set(s[R], c);
//         }
//         if (R - L + 1 < p.length) {
//             R++;
//         } else if (R - L + 1 === p.length) {
//             if (count === 0) {
//                 result.push(L);
//             }
//             if (map.has(s[L])) {
//                 let c = map.get(s[L]);
//                 c++;
//                 if (c === 1) {
//                     count++;
//                 }
//                 map.set(s[L], c);
//             }
//             L++;
//             R++;
//         }
//     }
//     return result;
// };

const checkForAnagrams = (sCount, pCount, s, p) => {
    let isValidAnagram = true
    for (let char in pCount) {
        if (pCount[char] !== sCount[char]) {
            isValidAnagram = false
        }
    }

    return isValidAnagram
}



var findAnagrams2 = function (s, p) {
    if (p.length > s.length) return []

    let pCount = {}
    let sCount = {}
    let result = []
    let isValidAnagram;

    for (let i = 0; i < p.length; ++i) {
        // if (pCount[p[i]] || sCount[s[i]]) {
        //     pCount++
        //     sCount++
        // } else {
        //     pCount[p[i]] = 1
        //     sCount[s[i]] = 1
        // }
        pCount[p[i]] = pCount[p[i]] + 1 || 1
        sCount[s[i]] = sCount[s[i]] + 1 || 1
    }

    isValidAnagram = checkForAnagrams(sCount, pCount, s, p)
    // for(let i=0; i<p.length ;++i){
    //     if(pCount[p[i]] !== sCount[s[i]]){
    //         isValidAnagram=false
    //     }
    // }
    if (isValidAnagram) {
        result.push(0)
    }

    console.log(pCount)
    console.log(sCount)
    let right = p.length
    let left = 0

    while (right < s.length) {

        sCount[s[right]] = sCount[s[right]] + 1 || 1
        sCount[s[left]] -= 1

        if (sCount[s[left]] === 0) {
            delete sCount[s[left]]
        }

        left++
        let isValidAnagram = checkForAnagrams(sCount, pCount, s, p)
        if (isValidAnagram) {
            result.push(left)
        }
        right++

    }

    return result

}


console.log(findAnagrams2("cbaebabacd", "abc"))


const findAnagrams = (str, pattern) => {
    const charFrequencyMap = new Map()
    for (let i = 0; i <= pattern.length - 1; i++) {
        const newValue = (charFrequencyMap.get(pattern[i]) || 0) + 1
        charFrequencyMap.set(pattern[i], newValue)
    }

    let windowStart = 0;
    let windowEnd = 0;
    let currCorrectLetters = 0;
    let currWindowFrequencyMap = new Map()
    let arrOfIndices = []
    while (windowStart <= windowEnd && windowStart <= str.length - 1
        && windowEnd <= str.length - 1) {
        const windowEndFrequency = (currWindowFrequencyMap.get(str[windowEnd]) || 0) + 1
        currWindowFrequencyMap.set(str[windowEnd], windowEndFrequency)

        if (charFrequencyMap.get(str[windowEnd]) === currWindowFrequencyMap.get(str[windowEnd])) {
            currCorrectLetters += 1
        } else if (charFrequencyMap.get(str[windowEnd]) + 1 ===
            currWindowFrequencyMap.get(str[windowEnd])) {
            currCorrectLetters -= 1
        }

        if (currCorrectLetters === charFrequencyMap.size) {
            arrOfIndices.push(windowStart)
        }

        if (windowEnd >= pattern.length - 1) {
            const windowStartFrequency = currWindowFrequencyMap.get(str[windowStart])
            if (charFrequencyMap.get(str[windowStart])
                === currWindowFrequencyMap.get(str[windowStart])) {
                currCorrectLetters -= 1
            } else if (charFrequencyMap.get(str[windowStart]) + 1 ===
                currWindowFrequencyMap.get(str[windowStart])) {
                currCorrectLetters += 1
            }
            currWindowFrequencyMap.set(str[windowStart],
                !windowStartFrequency ? 0 : windowStartFrequency - 1)
            windowStart += 1;
        }

        windowEnd += 1
    }

    return arrOfIndices
}