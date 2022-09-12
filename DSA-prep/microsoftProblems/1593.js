// // 1593. Split a String Into the Max Number of Unique Substrings

// // Given a string s, return the maximum number of unique substrings that the given string can be split into.
// // You can split string s into any list of non-empty substrings, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are unique.
// // A substring is a contiguous sequence of characters within a string.

// // Example 1:

// // Input: s = "ababccc"
// // Output: 5
// // Explanation: One way to split maximally is ['a', 'b', 'ab', 'c', 'cc']. Splitting like ['a', 'b', 'a', 'b', 'c', 'cc'] is not valid as you have 'a' and 'b' multiple times.
// // Example 2:

// // Input: s = "aba"
// // Output: 2
// // Explanation: One way to split maximally is ['a', 'ba']

// // function maxUniqueSplit(s) {
// //     const set = new Set();

// //     let result = 1;

// //     function bfs(startIndex) {
// //         if (startIndex === s.length) {
// //             // reached end of recursion
// //             result = Math.max(result, set.size);
// //             return;
// //         }

// //         // optimization
// //         // even if we will split rest of string with onу-symbol chunks, we will not get sulution better then existing
// //         console.log('formula::', set.size + (s.length - startIndex), result)
// //         if (set.size + (s.length - startIndex) <= result) {
// //             return;
// //         }

// //         for (let endIndex = startIndex + 1; endIndex <= s.length; endIndex++) {
// //             let str = s.slice(startIndex, endIndex);
// //             if (!set.has(str)) {
// //                 set.add(str);
// //                 // store current set of strings
// //                 bfs(endIndex);
// //                 // remove
// //                 set.delete(str);
// //             }
// //         }
// //     }

// //     bfs(0);

// //     return result
// // }


// function dfs(set, idx, s) {
//     if (idx >= s.length) return 0

//     let result = -1;
//     for (let i = idx + 1; i <= s.length; ++i) {
//         let sub = s.substring(idx, i)
//         if (!(set.add(sub))) continue
//         let next = dfs(set, i, s)
//         if (next >= 0) {
//             result = Math.max(result, next + 1)
//             set.delete(sub)
//         }
//     }

//     return result

// }


// function maxUniqueSplit(s) {
//     let set = new Set()

//     return dfs(set, 0, s)
// }

// s = "abc"
// console.log(maxUniqueSplit(s))


class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')

a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
// const depthFirstValues = (root) => {
//     // todo
//     const stack = [root]
//     const result = []
//     while (stack.length > 0) {
//         const current = stack.pop()
//         result.push(current.val)

//         if (current.right) stack.push(current.right)
//         if (current.left) stack.push(current.left)
//     }

//     return result
// };

// recursiveApproach
const depthFirstValues = (root) => {
    if (!root) return []
    const leftValues = depthFirstValues(root.left)
    const rightValues = depthFirstValues(root.right)

    return [root.val, ...leftValues, ...rightValues]

}

console.log(depthFirstValues(a))
