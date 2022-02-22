// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.



// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false

var isIsomorphic = function (s, t) {
    if (s.length !== t.length) {
        return false
    }
    let sMap = {};
    let tMap = {};

    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];

        if (!sMap[sChar]) {
            sMap[sChar] = tChar
        }
        if (!tMap[tChar]) {
            tMap[tChar] = sChar
        }

        if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
            return false
        }
    }

    return true

}

console.log(isIsomorphic("paper", "title"));

// var isIsomorphic = function (s, t) {

//     let map1 = {};
//     let map2 = {};

//     for (let char of s) {
//         if (map1[char]) {
//             map1[char]++
//         } else {
//             map1[char] = 1
//         }
//     }

//     for (let char of t) {
//         if (map2[char]) {
//             map2[char]++
//         } else {
//             map2[char] = 1
//         }
//     }

//     console.log('map1:::', map1, Object.values(map1));
//     console.log('map2:::', map2, Object.values(map2));

//     return Object.values(map1).length === Object.values(map2).length

// };

// console.log(isIsomorphic("bbbaaaba", "aaabbbba"));