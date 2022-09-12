// 767. Reorganize String
// Medium
// Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.
// Return any possible rearrangement of s or return "" if not possible.
// Example 1:

// Input: s = "aab"
// Output: "aba"
// Example 2:

// Input: s = "aaab"
// Output: ""


// Constraints:

// 1 <= s.length <= 500

// JavaScript program for rearranging characters in a string such
// that no two adjacent are same

// Function to find the char with maximum frequency in the given
// string
function getMaxCountChar(count) {
    let maxCount = 0
    let maxChar
    for (let i = 0; i < 26; i++) {
        if (count[i] > maxCount) {
            maxCount = count[i]
            maxChar = String.fromCharCode(i + ('a').charCodeAt(0))
        }
    }

    return [maxCount, maxChar]
}

// Main function for rearranging the characters
function rearrangeString(S) {
    let n = S.length

    // if length of string is None return false
    if (!n)
        return false

    // create a hashmap for the alphabets
    let count = new Array(26).fill(0)
    for (let char of S)
        count[char.charCodeAt(0) - ('a').charCodeAt(0)] += 1

    let [maxCount, maxChar] = getMaxCountChar(count)

    // if the char with maximum frequency is more than the half of the
    // total length of the string than return false
    if (maxCount > Math.floor((n + 1) / 2))
        return false

    // create a list for storing the result
    let res = new Array(n)

    let ind = 0

    // place all occurrences of the char with maximum frequency in
    // even positions
    while (maxCount) {
        res[ind] = maxChar
        ind += 2
        maxCount -= 1
    }

    // replace the count of the char with maximum frequency to zero
    // as all the maxChar are already placed in the result
    count[maxChar.charCodeAt(0) - 'a'.charCodeAt(0)] = 0

    // place all other char in the result starting from remaining even
    // positions and then place in the odd positions
    for (let i = 0; i < 26; i++) {
        while (count[i] > 0) {
            if (ind >= n)
                ind = 1
            res[ind] = String.fromCharCode(i + ('a').charCodeAt(0))
            ind += 2
            count[i] -= 1
        }
    }

    // convert the result list to string and return
    return res.join('')
}

// Driver Code
let str = 'aabccff'
let = rearrangeString(str)
console.log(res)