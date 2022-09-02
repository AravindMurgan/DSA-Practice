// // // var longestSubstring = function (s, k) {
// // //     let max = 0
// // //     let uniqueLetters = new Set(s).size

// // //     //start iterate each unique letter
// // //     for (let i = 1; i <= uniqueLetters.length; ++i) {
// // //         let right = 0
// // //         let left = 0
// // //         let kCount = 0
// // //         let currentUnique = 0
// // //         let map = new Map()
// // //         // 01234
// // //         // aaabb k=3
// // //         while (right < s.length) {
// // //             let rightChar = s[right]

// // //             map.set(rightChar, (map.get(rightChar) || 0) + 1)

// // //             if (map.get(rightChar) === 1) {
// // //                 currentUnique++
// // //             }

// // //             if (map.get(rightChar) === k) {
// // //                 kCount++
// // //             }

// // //             while (currentUnique > i) {
// // //                 let leftChar = s[left]

// // //                 if (map.get(leftChar) === k) {
// // //                     kCount--
// // //                 }

// // //                 map.set(leftChar, map.get(leftChar) - 1)

// // //                 if (map.get(leftChar) === 0) {
// // //                     currentUnique--
// // //                 }
// // //                 left++
// // //             }

// // //             if (currentUnique === kCount) {
// // //                 max = Math.max(max, right - left + 1)
// // //             }
// // //             right++
// // //         }
// // //     }

// // //     return max
// // // };

// // // longestSubstring('aaabb', 3)

// // // function buildHashMap(s) {
// // //     let obj = {}
// // //     let map = new Map()

// // //     for (let i = 0; i < s.length; ++i) {
// // //         let char = s[i]

// // //         obj[char] = (obj[char] || 0) + 1
// // //         map.set(char, (map.get(char) || 0) + 1)
// // //     }

// // //     console.log(obj) //{a: 3, b: 2}
// // //     console.log(map) ///Map(2) {'a' => 3, 'b' => 2}
// // // }
// // // buildHashMap('aaabb')

// // // var decodeString = function (s) {
// // //     //01234567
// // //     // 3[a2[c]]

// // //     let stack = []
// // //     let n = s.length

// // //     for (let i = 0; i < n; ++i) {
// // //         if (s[i] !== ']') {
// // //             stack.push(s[i])
// // //             //stack=[3,[,a,2,[,c]//
// // //             continue
// // //         }
// // //         let subStr = ''
// // //         let segment = ''
// // //         let num = ''

// // //         while (stack[stack.length - 1] !== '[') {
// // //             subStr = stack.pop() + subStr
// // //         }
// // //         stack.pop()
// // //         while (!isNaN(stack[stack.length - 1])) {
// // //             num = stack.pop() + num
// // //         }

// // //         for (let z = 0; z < Number(num); ++z) {
// // //             segment = subStr + segment
// // //         }

// // //         stack.push(segment)
// // //     }

// // //     return stack.join('')

// // // };

// // // // decodeString("3[a2[c]]")

// // // var isValidAnagram = function (sCount, pCount) {

// // //     for (let char in pCount) {
// // //         if (sCount[char] !== pCount[char]) {
// // //             return false
// // //         }
// // //     }
// // //     return true
// // // }
// // // var findAnagrams = function (s, p) {
// // //     let sCount = {}
// // //     let pCount = {}
// // //     let result = []
// // //     let isValid;
// // //     for (let i = 0; i < p.length; ++i) {
// // //         let sChar = s[i]
// // //         let pChar = p[i]
// // //         sCount[sChar] = (sCount[sChar] || 0) + 1
// // //         pCount[pChar] = (pCount[pChar] || 0) + 1
// // //     }
// // //     isValid = isValidAnagram(sCount, pCount)
// // //     if (isValid) {
// // //         result.push(0)
// // //     }
// // //     //  012 3456789
// // //     // "cba ebabacd"
// // //     // {a:1,b:1} {a:1 b:1}
// // //     //  0123
// // //     // "abab" "ab"

// // //     let left = 0
// // //     let right = p.length
// // //     while (right < s.length) {
// // //         sCount[s[left]] = sCount[s[left]] - 1
// // //         if (sCount[s[left]] === 0) {
// // //             delete sCount[s[left]]
// // //         }
// // //         left++
// // //         sCount[s[right]] = (sCount[s[right]] || 0) + 1

// // //         isValid = isValidAnagram(sCount, pCount)
// // //         if (isValid) {
// // //             result.push(left)
// // //         }
// // //         left++
// // //         right++
// // //     }

// // //     return result

// // // };

// // // findAnagrams("cbaebabacd",
// // //     "abc")

// // var getMaxCharCount = function (count) {
// //     let maxCount = 0
// //     let maxChar = ''

// //     for (let i = 0; i < 26; ++i) {
// //         if (count[i] > maxCount) {
// //             maxCount = count[i]
// //             maxChar = String.fromCharCode(i + ('a').charCodeAt(0))
// //         }
// //     }

// //     return [maxChar, maxCount]
// // }

// // var reorganizeString = function (s) {
// //     let n = s.length
// //     if (!n) return ''

// //     let count = new Array(26).fill(0)

// //     for (let char of s) {
// //         count[char.charCodeAt(0) - ('a').charCodeAt(0)] += 1
// //     }

// //     [maxChar, maxCount] = getMaxCharCount(count)

// //     ///check if maxCount greater than half of string length
// //     if (maxCount > (n + 1) / 2) return ''

// //     let result = new Array(n)
// //     let idx = 0

// //     //placing all maxChar at even position
// //     while (maxCount) {
// //         result[idx] = maxChar
// //         idx += 2
// //         maxCount -= 1
// //     }

// //     ///make the count of the maxChar as 0,since all are replaced at res
// //     count[maxChar.charCodeAt(0) - ('a').charCodeAt(0)] = 0

// //     //place rest of even and then all odd chars
// //     for (let i = 0; i < 26; ++i) {
// //         while (count[i] > 0) {
// //             if (idx >= n) idx = 1
// //             result[idx] = String.fromCharCode(i + ('a').charCodeAt(0))
// //             idx += 2
// //             count -= 1
// //         }

// //     }

// //     return result.join('')
// // };

// // reorganizeString("vvvlo");

// var compress = function (chars) {
//     let index = 0
//     let i = 0
//     let j = 0
//     while (i < chars.length) {
//         if (chars[i] === chars[j]) {
//             j++
//             continue
//         }

//         chars[index] = chars[i]
//         index++

//         if (j - i > 1) {
//             let count = j - i + ''
//             for (let num of count) {
//                 chars[index] = num
//                 index++
//             }
//         }

//         i = j
//     }

//     return index
// };

// compress(["a", "a", "b", "b", "c", "c", "c"])

// var longestDiverseString = function (a, b, c) {
//     let countA = 0
//     let countB = 0
//     let countC = 0
//     let result = []

//     while (a > 0 || b > 0 || c > 0) {

//         if ((a >= b && a >= c && countA < 2) || (countB === 2 && b > 0) || (countC === 2 && c > 0)) {
//             result.push('a')
//             a -= 1
//             countA += 1
//             countB = 0
//             countC = 0
//         } else if ((b >= a && b >= c && countB < 2) || (countA === 2 && a > 0) || (countC === 2 && c > 0)) {
//             result.push('b')
//             b -= 1
//             countB += 1
//             countA = 0
//             countC = 0
//         } else if ((c >= a && c >= b && countC < 2) || (countA === 2 && a > 0) || (countB === 2 && b > 0)) {
//             result.push('c')
//             c -= 1
//             countC += 1
//             countA = 0
//             countB = 0
//         } else {
//             break
//         }

//     }

//     return result.join('')
// };

// longestDiverseString(1, 1, 7)



// var numTimesAllBlue = function (flips) {
//     let maxCount = 0
//     for (let num of flips) {
//         if (num > maxCount) {
//             maxCount = num
//         }
//     }

//     let res = []
//     let count = 0
//     for (let i = 0; i < maxCount; ++i) {
//         // res+='0'
//         res.push(0)
//     }
//     for (let j = 0; j < flips.length; ++j) {
//         let idx = flips[j] - 1
//         res[idx] = '1'
//         let isValid = true
//         for (let k = 0; k < idx; ++k) {
//             if (res[k] !== '1') {
//                 isValid = false
//                 break
//             }
//         }
//         if (isValid) {
//             count++
//         }

//     }
//     return count
// };

var numTimesAllBlue = function (flips) {
    let count = 0, hi = -1, on = 0;
    flips.forEach(i => {
        ++on;                  // total number of bits flipped
        hi = Math.max(hi, i);  // highest point where bit is flipped
        if (hi === on) {    // if total number of bits flipped equals highest point where but is flipped, that means binary string is prefix-aligned
            ++count;      // i.e., all bits between [1, hi] are flipped
        }
    })
    return count;
};

numTimesAllBlue([3, 2, 4, 1, 5])