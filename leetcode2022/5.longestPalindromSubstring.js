var expandFromCenter = function (str, left, right) {
    let i = 0;
    while (str[left - i] && str[left - i] === str.chartAt[right + i]) {
        i++;
    }
    i--;

    return str.slice(left - i, right + i + 1);
}

var longestPalindrome = function (s) {
    let longest = ''

    for (let i = 0; i < s.length; i++) {
        let odd = expandFromCenter(s, i, i);
        let even = expandFromCenter(s, i - 1, i);

        if (odd.length > longest.length) {
            longest = odd
        }
        if (even.length > longest.length) {
            longest = even
        }
    }
    return longest
};

longestPalindrome('babad')

