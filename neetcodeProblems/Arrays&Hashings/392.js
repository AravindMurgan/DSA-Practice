var isSubsequence = function (s, t) {
    let i = 0
    let j = 0

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i += 1
        j += 1
    }

    return i == s.length
};

s = "ab", t = "baab"
isSubsequence(s, t)