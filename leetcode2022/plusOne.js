function plusOne(digits) {
    let co = true;
    for (let i = digits.length - 1; i >= 0 && co; i--) {
        digits[i]++;
        co = digits[i] >= 10;
        co && (digits[i] = 0);
    }
    co && digits.unshift(1);
    return digits;
}

console.log(plusOne([1, 2, 3, 4]));

// var plusOne = function (digit) {
//     let arr = [...digit];

//     if (arr[arr.length - 1] <= 8) {
//         arr[(arr.length - 1)]++
//     } else {
//         // arr[arr.length - 1] = (1, 0);
//         arr.pop();
//         arr.push(1, 0);
//     }
//     return arr
// }

// console.log(plusOne([1, 2, 9]));
