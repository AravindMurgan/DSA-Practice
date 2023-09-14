var strStr = function (haystack, needle) {

    let left = 0
    let right = needle.length

    while (right < haystack.length) {
        let hStr = haystack.substring(left, right)

        if (hStr === needle) {
            return left
        }

        left++
        right++
    }

    return -1
};
haystack = "a", needle = "a"
strStr(haystack, needle)
