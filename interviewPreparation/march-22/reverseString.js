var reverseString = function (str) {
    let reversedStr = ''
    //use manual for loop
    for (let char of str) {
        reversedStr = char + reversedStr
    }

    console.log(reversedStr);
}

reverseString('ZAPFGMRZXIFPSXKOQDRRQJBBZ')