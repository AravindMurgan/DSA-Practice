var reverseWords = function (s) {
    let empty = false
    let word = ''
    let result = ''

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ' ') {
            word = word + s[i]
            empty = false
        } else if (!empty) {
            result = word + " " + result
            word = ''
            empty = true
        }
    }
    //merge the last word
    result = word + ' ' + result

    return result.trim()
};
// TC: O(n)


// i/p:'aaabb' k=2 o/p:aaabb ,character is repeated greater than or equal to

// wrong approach
function longestSubstring(s, k) {
    let count = 0
    let sCount = {}

    for (let char of s) {
        sCount[char] = sCount[char] + 1 || 1
    }

    for (let char in sCount) {
        if (sCount[char] >= k) {
            count += sCount[char]
        }
    }

    return count
}

console.log(longestSubstring('aaabb', 2))

var decodeString = function (s) {

    let stack = []

    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ']') {
            stack.push(s[i])
            continue
        }

        let subString = ''
        let n = ''
        let segment = ''

        while (stack[stack.length - 1] !== '[') {
            subString = stack.pop() + subString
        }
        stack.pop()

        while (!isNaN(stack[stack.length - 1])) {
            n = stack.pop() + n
        }

        for (let j = 0; j < Number(n); ++j) {
            segment = subString + segment
        }

        stack.push(segment)
    }

    return stack.join('')

};

var buildCharMap = function (str) {
    let obj = {}

    for (let char of str) {
        obj[char] = obj[char] || 0 + 1
    }
    return obj
}

var isValidAnagram = function (s, t) {
    let sCount = buildCharMap(s)
    let tCount = buildCharMap(t)

    if (Object.keys(s).length !== Object.keys(t).length) {
        return false
    }

    for (let char in tCount) {
        if (sCount[char] !== tCount[char]) {
            return false
        }
    }
    return true
}

console.log(isValidAnagram('aara', 'aaa'))

// find all anagrams in word
function checkIsValidAnagram(sCount, tCount) {
    for (let char in tCount) {
        if (sCount[char] !== tCount[char]) {
            return false
        }
    }
    return true
}

function findAllAnagrams(s, t) {
    if (t.length > s.length) return []

    let result = []
    let sCount = {}
    let tCount = {}
    let isValidAnagram

    for (let i = 0; i < t.length; ++i) {
        sCount[s[i]] = (sCount[s[i]] || 0) + 1
        tCount[t[i]] = (tCount[t[i]] || 0) + 1
    }

    isValidAnagram = checkIsValidAnagram(sCount, tCount)
    if (isValidAnagram) {
        result.push(0)
    }

    let left = 0
    for (let right = t.length; right < s.length; ++right) {
        sCount[s[right]] = (sCount[s[right]] || 0) + 1
        sCount[s[left]] -= 1

        if (sCount[s[left]] === 0) {
            delete sCount[s[left]]
        }
        left++
        isValidAnagram = checkIsValidAnagram(sCount, tCount)
        if (isValidAnagram) {
            result.push(left)
        }

    }
    return result
}

console.log(findAllAnagrams('baa', 'aa'))