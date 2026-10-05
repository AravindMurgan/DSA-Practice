// var compress = function (chars) {

//     let i = 0
//     let j = 0
//     let count = 0

//     while (j < chars.length) {
//         if (chars[i] === chars[j]) {
//             j += 1
//             count += 1
//         } else {
//             chars[i + 1] = String(count)
//             i = j
//             count = 0
//         }
//     }
//     chars[i + 1] = count
//     return i + 1
// };

var compress = function (chars) {

    let i = 0
    let j = 0
    let count = 0

    while (j < chars.length) {
        let curr = chars[j]
        while (j < chars.length && chars[i] === chars[j]) {
            j += 1
            count += 1
        }
        chars[i] = curr;
        console.log(chars)
        i += 1

        if (count > 1) {

            for (let num of String(count)) {
                chars[i] = num
                i += 1
            }

        }
        count = 0

    }

    return i

};

input = ["a", "a", "a", "b", "b", "a", "a"]
compress(input)