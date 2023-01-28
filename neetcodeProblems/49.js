var sortWord = function (str) {
    return str.split('').sort().join('');
}

var groupAnagrams = function (strs) {
    let res = [];
    let charMap = new Map();
    let len = strs.length;
    // for (let word of strs) {
    //     charMap.set(sortWord(word), [])
    // }
    for (let i = 0; i < len; ++i) {
        charMap.set(sortWord(strs[i]), [])
    }


    for (let word of strs) {
        let tempStr = word;
        charMap.get(sortWord(word)).push(tempStr)
    }

    for (let value of charMap.values()) {
        res.push(value)
    }

    return res
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])