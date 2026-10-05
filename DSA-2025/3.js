/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const map = {}
    let max = 0

    let l = 0
    let r = 0
    while (r < s.length) {
        if (map[s[r]] > 0) {
            map[s[l]]--;
            l += 1

        } else {
            map[s[r]] = 1;
            let val = (r - l) + 1
            max = Math.max(max, val)
        }

        r += 1
    }

    return max
};
lengthOfLongestSubstring("bbbbb")