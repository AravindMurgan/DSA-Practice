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


// var addBinary = function (a, b) {
//     let sum = '';
//     let carry = 0;

//     let i = a.length - 1;
//     let j = b.length - 1;

//     while (i >= 0 || j >= 0) {
//         let A = a[i] ? a[i] : 0
//         let B = b[j] ? b[j] : 0

//         sum = (A ^ B ^ carry) + sum;

//         if (A === B && A !== carry) {
//             carry = Number(!carry)
//         }
//         i--;
//         j--;
//     }

//     if (carry) {
//         // sum = (carry + sum).toString()
//         sum = (carry + sum).toString();
//     }

//     return sum;
// }

var addBinary = function (a, b) {
    let sum = ''
    // let carry = 0
    let carry = 0

    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        let A = a[i] ? a[i] : '0'
        let B = b[j] ? b[j] : '0'

        sum = String(A ^ B ^ carry) + sum

        if (A === B && A !== String(carry)) {
            carry = Number(!carry);
            // carry = '1'
        }
        i--;
        j--;
    }
    if (carry) {
        sum = String(carry) + sum
        // sum = carry + sum
    }

    return sum

};

console.log(addBinary('101111', '10'));


console.log('1' ^ '0' ^ '0');