


function validPalindrome(s) {
    const filteredStr = s.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    let str = ''
    for (let char of filteredStr) {
        str = char + str
    }

    return str === filteredStr
}

console.log(validPalindrome('aaaaa *** (()) '));


///not a recommended approach for interviews////
var isPalindrome = function (s) {
    if (s === ' ') return true;
    const arr = s.toLowerCase().split('').filter(n => n.match(/[a-z0-9]/));

    return arr.join('') === arr.reverse().join('');
};