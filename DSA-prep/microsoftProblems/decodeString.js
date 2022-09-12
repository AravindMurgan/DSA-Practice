// Decode String
// Example 1:

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
// Example 2:

// Input: s = "3[a2[c]]"
// Output: "accaccacc"
// Example 3:

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

function decodeString(s) {
    debugger
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
        /// -- [
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
}

console.log(decodeString("3[a]2[bc]"))