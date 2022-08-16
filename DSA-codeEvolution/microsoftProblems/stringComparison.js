// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.



// Example 1:

// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".
// Example 2:

// Input: chars = ["a"]
// Output: Return 1, and the first character of the input array should be: ["a"]
// Explanation: The only group is "a", which remains uncompressed since it's a single character.
// Example 3:

// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".

///optimized approach
var compress3 = function (chars) {
    let index = 0
    let i = 0

    while (i < chars.length) {
        let j = i
        while (j < chars.length && chars[i] == chars[j]) {
            j++
        }

        chars[index++] = chars[i]
        if (j - i > 1) {
            let count = j - i + ''
            for (let num of count) {
                chars[index++] = num
            }
        }
        i = j
    }
    console.log(chars)
    return index

};

/// my approach , should manipulate the exsisting one without creating new arr
var compress = function (chars) {
    if (chars.length <= 0) return 0

    let result = []
    let s = ''
    let charCount = {}
    for (let char of chars) {
        charCount[char] = charCount[char] + 1 || 1
    }

    for (let char in charCount) {
        if (charCount[char] === 1) {
            result.push(char)
        }
        if (charCount[char] > 1 && charCount[char] < 10) {
            result.push(char, charCount[char].toString())
        }
        if (charCount[char] >= 10) {
            s = charCount[char].toString()
            s = s.split(' ')
            result.push(char)
            result = [...result, ...s]
        }
    }

    chars = result
    return chars
};

var compress2 = function (chars) {
    let counter = 0
    let l = 0
    chars.forEach((char, index) => {
        if (char === chars[index + 1]) counter++
        else {
            if (counter) {
                chars[l] = char
                counter++
                for (let num of counter + '') {
                    l++
                    chars[l] = num
                }
                counter = 0
                l++
            } else {
                chars[l] = char
                l++
            }
        }
    })
    console.log(chars)
    return l
};

console.log(compress3(['a', 'a', 'b', 'b', 'c', 'c', 'c', 'l']))