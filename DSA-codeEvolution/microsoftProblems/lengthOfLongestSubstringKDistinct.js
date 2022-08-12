function lengthOfLongestSubstringKDistinct(s, k) {
    // write your code here
    let arr = []
    let result = ''

    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i]) == false) {
            arr.push(s[i])
        }
        if (arr.length <= k) {
            result = result + s[i]
        }
    }
    return result.length
}

console.log(lengthOfLongestSubstringKDistinct('', 5))