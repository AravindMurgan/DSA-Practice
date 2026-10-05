// /**
//  * @param {string} s
//  * @return {string}
//  */
// var decodeString = function (s) {

//     const stack = []

//     for (let i = 0; i < s.length; ++i) {
//         if (s[i] !== ']') {
//             stack.push(s[i])
//         } else {
//             let subStr = ''
//             //upto [
//             while (stack.length > 0 && stack[stack.length - 1] !== '[') {
//                 subStr = stack.pop() + subStr
//             }
//             stack.pop()
//             console.log(subStr)
//             //get nums
//             let num = ''
//             while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
//                 num = stack.pop() + num
//             }
//             console.log(num)
//             stack.push(subStr.repeat(Number(num)))

//             //repeat as substr
//         }

//     }

//     return stack.join('')
// };
var decodeString = function (s) {
    let result = ''
    const stack = []

    for (let i = 0; i < s.length; ++i) {

        if (s[i] !== ']') {
            stack.push(s[i])
        } {
            let subStr = ''
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                subStr = stack.pop() + subStr;
            }
            stack.pop()

            let num = ''
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                num = stack.pop() + num
            }
            console.log(subStr)
            console.log(num)
            console.log('----------');

            subStr = subStr.repeat(Number(num))
            console.log(subStr)
            stack.push(subStr)
        }
    }

    return stack.join('')
};

s = "3[a]2[bc]"
decodeString(s)