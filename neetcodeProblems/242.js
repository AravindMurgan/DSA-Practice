const buildCharMap = function (word) {
    const obj = {}
    for (let char of word) {
        if (obj[char]) {
            obj[char] += 1
        } else {
            obj[char] = 1
        }
    }

    return obj
}

// var isAnagram = function (s, t) {

//     const wordS = buildCharMap(s)
//     const wordT = buildCharMap(t)
//     const wordLength = Object.keys(wordS).length > Object.keys(wordT).length ? wordS : wordT

//     for (let key in wordLength) {
//         if (wordS[key] !== wordT[key]) return false
//     }
//     return true
// };

var isAnagram = function (s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
};
s = "anagram", t = "nagaram"
console.log(isAnagram(s, t))