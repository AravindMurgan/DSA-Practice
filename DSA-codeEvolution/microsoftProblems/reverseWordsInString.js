// 151 reverse words in a string
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.

//my solution
// var reverseWords = function (s) {
//     let arr = s.split(' ')
//     let reversed = ''
//     for (let str of arr) {
//         if (str === '') continue
//         reversed = str + ' ' + reversed
//     }

//     return reversed.trim()
// };

// //leetcode sol - clean approach
// var reverseWords2 = function (s) {
//     let empty = true
//     let temp = ''
//     let res = ''
//     for (let i = 0; i < s.length; i++) {
//         console.log('val:::', s[i])
//         if (s[i] !== ' ') {
//             temp = temp + s[i]
//             empty = false
//         } else if (!empty) {
//             res = temp + ' ' + res
//             temp = ''
//             empty = true
//         }
//     }
//     res = temp + ' ' + res
//     console.log(res)
//     return res.trim()
// };

// reverseWords2('hello   world ')

var reverseWords3 = function (s) {
    // traverse the string, form words as encountered and add to the dictionary when a space is found
    let wordsInS = [];
    let word = "";
    for (let idx = 0; idx < s.length; ++idx) {    // O(n) [n - length of `s`]
        if (idx > 0 && s[idx] === " " && s[idx - 1] !== " ") {
            wordsInS.push(word);
            word = "";
        } else if (s[idx] !== " ") {
            word += s[idx];
        }
    }
    // this is required to add the last word after which no space is there
    if (word !== "") {
        wordsInS.push(word);
    }
    // finally construct the resultant string by traversing the dictionary in reverse
    let result = "";
    for (let i = wordsInS.length - 1; i >= 0; --i) {    // O(m) [m = number of words (m < n)]
        result += wordsInS[i]
        if (i > 0) {
            result += " ";
        }
    }
    return result;
}

reverseWords3('hello   world')