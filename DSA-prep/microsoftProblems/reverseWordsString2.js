// Input: str = “geeks quiz practice code”
// Output: code practice quiz geeks 

//my approach
// function reverseWords(s) {
//     let wordsInArr = s.split(' ')
//     let result = ''
//     for (let i = 0; i < wordsInArr.length; ++i) {
//         result = wordsInArr[i] + ' ' + result
//     }

//     return result.trim()
// }

//recommend approach
function reverseWords(s) {
    let empty = true
    let word = ''
    let result = ''

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ' ') {
            word = word + s[i]
            empty = false
        } else if (!empty) {
            result = word + ' ' + result
            word = ''
            empty = true
        }
    }
    result = word + ' ' + result

    return result.trim()
}

console.log(reverseWords('geeks quiz practice code'))