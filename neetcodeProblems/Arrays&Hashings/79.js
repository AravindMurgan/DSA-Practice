// var sortWord = function (str) {
//     return str.split('').sort().join('');
// }
// var groupAnagrams = function (strs) {
//     let res = [];
//     let charMap = new Map();

//     for (let w of strs) {
//         let sortStr = sortWord(w);
//         console.log('sortStr', sortStr)
//         if (!charMap.has(sortStr)) {
//             charMap.set(sortStr, [w])
//         } else {
//             charMap.set(sortStr, [...charMap.get(sortStr), w])
//         }
//         console.log('charMap', charMap)

//     }

//     for (let v of charMap.values()) {
//         res.push(v)
//     }
//     return res
// }

var groupAnagrams = function (strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt() - 97]++;
        let key = count.join("#");
        console.log('key:::', key)
        res[key] ? res[key].push(str) : res[key] = [str];
        console.log('res::::', res)

    }
    return Object.values(res);
};


strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

groupAnagrams(strs)