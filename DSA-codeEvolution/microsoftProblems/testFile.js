// var longestSubstring = function (s, k) {
//     let max = 0
//     let uniqueLetters = new Set(s).size

//     //start iterate each unique letter
//     for (let i = 1; i <= uniqueLetters.length; ++i) {
//         let right = 0
//         let left = 0
//         let kCount = 0
//         let currentUnique = 0
//         let map = new Map()
//         // 01234
//         // aaabb k=3
//         while (right < s.length) {
//             let rightChar = s[right]

//             map.set(rightChar, (map.get(rightChar) || 0) + 1)

//             if (map.get(rightChar) === 1) {
//                 currentUnique++
//             }

//             if (map.get(rightChar) === k) {
//                 kCount++
//             }

//             while (currentUnique > i) {
//                 let leftChar = s[left]

//                 if (map.get(leftChar) === k) {
//                     kCount--
//                 }

//                 map.set(leftChar, map.get(leftChar) - 1)

//                 if (map.get(leftChar) === 0) {
//                     currentUnique--
//                 }
//                 left++
//             }

//             if (currentUnique === kCount) {
//                 max = Math.max(max, right - left + 1)
//             }
//             right++
//         }
//     }

//     return max
// };

// longestSubstring('aaabb', 3)

// function buildHashMap(s) {
//     let obj = {}
//     let map = new Map()

//     for (let i = 0; i < s.length; ++i) {
//         let char = s[i]

//         obj[char] = (obj[char] || 0) + 1
//         map.set(char, (map.get(char) || 0) + 1)
//     }

//     console.log(obj) //{a: 3, b: 2}
//     console.log(map) ///Map(2) {'a' => 3, 'b' => 2}
// }
// buildHashMap('aaabb')

// var decodeString = function (s) {
//     //01234567
//     // 3[a2[c]]

//     let stack = []
//     let n = s.length

//     for (let i = 0; i < n; ++i) {
//         if (s[i] !== ']') {
//             stack.push(s[i])
//             //stack=[3,[,a,2,[,c]//
//             continue
//         }
//         let subStr = ''
//         let segment = ''
//         let num = ''

//         while (stack[stack.length - 1] !== '[') {
//             subStr = stack.pop() + subStr
//         }
//         stack.pop()
//         while (!isNaN(stack[stack.length - 1])) {
//             num = stack.pop() + num
//         }

//         for (let z = 0; z < Number(num); ++z) {
//             segment = subStr + segment
//         }

//         stack.push(segment)
//     }

//     return stack.join('')

// };

// // decodeString("3[a2[c]]")

// var isValidAnagram = function (sCount, pCount) {

//     for (let char in pCount) {
//         if (sCount[char] !== pCount[char]) {
//             return false
//         }
//     }
//     return true
// }
// var findAnagrams = function (s, p) {
//     let sCount = {}
//     let pCount = {}
//     let result = []
//     let isValid;
//     for (let i = 0; i < p.length; ++i) {
//         let sChar = s[i]
//         let pChar = p[i]
//         sCount[sChar] = (sCount[sChar] || 0) + 1
//         pCount[pChar] = (pCount[pChar] || 0) + 1
//     }
//     isValid = isValidAnagram(sCount, pCount)
//     if (isValid) {
//         result.push(0)
//     }
//     //  012 3456789
//     // "cba ebabacd"
//     // {a:1,b:1} {a:1 b:1}
//     //  0123
//     // "abab" "ab"

//     let left = 0
//     let right = p.length
//     while (right < s.length) {
//         sCount[s[left]] = sCount[s[left]] - 1
//         if (sCount[s[left]] === 0) {
//             delete sCount[s[left]]
//         }
//         left++
//         sCount[s[right]] = (sCount[s[right]] || 0) + 1

//         isValid = isValidAnagram(sCount, pCount)
//         if (isValid) {
//             result.push(left)
//         }
//         left++
//         right++
//     }

//     return result

// };

// findAnagrams("cbaebabacd",
//     "abc")
