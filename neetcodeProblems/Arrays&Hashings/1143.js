// var longestCommonSubsequence = function (text1, text2) {
//     const memo = new Map()

//     function recursion(text1, text2, index1, index2) {

//         if (index1 < 0 || index2 < 0) return 0;

//         const key = index1 + '#' + index2

//         if (memo.has(key)) return memo.get(key);

//         let result;

//         if (text1.charAt(index1) == text2.charAt(index2)) {
//             result = recurison(text1, text2, index1 - 1, index2 - 1)
//         } else {
//             result = Math.max(recursion(text1, text2, index1, index2 - 1), recursion(text1, text2, index1 - 1, index2))
//         }

//         memo.set(key, result);

//         return result
//     }

//     return recursion(text1, text2, text1.length - 1, text2.length - 1)


// }

var longestCommonSubsequence = function (text1, text2) {
    const memo = new Map();
    return recursion(text1, text2, text1.length - 1, text2.length - 1, memo);
};

function recursion(text1, text2, index1, index2, memo) {
    // base cases
    if (index1 < 0 || index2 < 0) return 0;

    const key = index1 + '#' + index2;

    if (memo.has(key)) return memo.get(key);

    let result;

    if (text1.charAt(index1) === text2.charAt(index2)) {
        result = recursion(text1, text2, index1 - 1, index2 - 1, memo) + 1;
    } else {
        result = Math.max(recursion(text1, text2, index1, index2 - 1, memo), recursion(text1, text2, index1 - 1, index2, memo));
    }

    memo.set(key, result);
    return result;
}
text1 = "abcde", text2 = "ace"
longestCommonSubsequence(text1, text2);