/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const freq1 = new Array(26).fill(0)
    const freq2 = new Array(26).fill(0)

    for (let ch of s1) {
        freq1[ch.charCodeAt(0) - 97]++;
    }

    let l = 0;
    for (let r = 0; r < s2.length; ++r) {
        freq2[s2[r].charCodeAt(0) - 97]++


        if ((r - l + 1) > s1.length) {
            freq2[s2[l]]--;
            l++;
        }

        if (isEqual(freq1, freq2)) return true;
    }

    return false;
};

var isEqual = function (a, b) {

    for (let i = 0; i < 26; ++i) {
        if (a[i] !== b[i]) return false;
    }

    return true;
}
s1 = "ab"
s2 = "eidbaooo"
checkInclusion(s1, s2)