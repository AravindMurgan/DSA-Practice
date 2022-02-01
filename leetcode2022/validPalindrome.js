let str = "A man Hello World &,,"

console.log(str.replace(/[^A-Z0-9]/ig, '').toLowerCase());

function validPalindrome(s) {
    const filteredStr = s.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    let str = ''
    for (let char of filteredStr) {
        str = char + str
    }

    return str === filteredStr
}

console.log(validPalindrome('dd'));