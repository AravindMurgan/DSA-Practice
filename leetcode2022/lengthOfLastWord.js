var lengthOfLastWord = function (s) {
    let str = s.trim().split(' ')

    return str[str.length - 1].length
}



// var lengthOfLastWord = function (s) {
//     let arr = [];
//     for (let char of s.trim().split(' ')) {
//         arr.push(char)
//     }

//     console.log(arr[arr.length - 1].length);
// }

// console.log(lengthOfLastWord("   fly me   to   the moon  "));