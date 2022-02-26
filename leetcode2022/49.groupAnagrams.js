// Given an array of strings strs, group the anagrams together. You can return the answer in any order

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

var sortWord = function (str) {
    return str.split('').sort().join('');
}
var buildCharMap = function (str) {
    let map = {};
    for (let char of str) {
        map[char] = map[char] + 1 || 0
    }
    return map
}

var groupAnagrams = function (strs) {
    let res = [];
    let charMap = new Map();

    for (let w of strs) {
        let sortStr = sortWord(w);
        if (!charMap.has(sortStr)) {
            charMap.set(sortStr, [w])
        } else {
            charMap.set(sortStr, [...charMap.get(sortStr), w])
        }
    }

    for (let v of charMap.values()) {
        res.push(v)
    }
    return res
}

console.log(groupAnagrams(['a']));
// groupAnagrams(["a"])

//kind of same approach single multiple for loops..

// var groupAnagrams = function (strs) {
//     let res = [];
//     let charMap = new Map();
//    let len = strs.length;
//     // for (let word of strs) {
//     //     charMap.set(sortWord(word), [])
//     // }
//     for (let i = 0; i < len; ++i) {
//         charMap.set(sortWord(strs[i]), [])
//     }


//     for (let word of strs) {
//         let tempStr = word;
//         charMap.get(sortWord(word)).push(tempStr)
//     }

//     for (let value of charMap.values()) {
//         res.push(value)
//     }

//     return res
// }
