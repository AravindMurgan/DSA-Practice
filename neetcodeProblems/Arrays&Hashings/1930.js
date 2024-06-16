// // var countPalindromicSubsequence = function (s) {
// //     //Keeps track of the initial starting index of each unique character from the input string
// //     var l = {}
// //     //Keeps track of the last index of each unique character from the input string
// //     var r = {}
// //     //Counter for unique length-3 palindrome
// //     var res = 0
// //     //Stores unique length-3 palindrome and checks for duplicates
// //     var marked = new Set();
// //     for (let i = 0; i < s.length; i++) {
// //         if (l[s[i]] == undefined) l[s[i]] = i
// //         r[s[i]] = i
// //     }

// //     for (let key in l) {
// //         /*
// //                Since in a length 3 palindrome string, 
// //                our first and last character must be the same,
// //                so we will need the first and last index of each unique 
// //                character that occurs in the input string.

// //                For each unique character found in the input, or 'key' in this case, 
// //                loop from the (firstOccurringIndex,lastOccurringIndex) of the character 
// //                and check for unique middle character.

// //                so if we have 'aabbbccda', and our current 'key' is the letter 'a',
// //                we will loop from the starting index (0) all the way to the last index (8) of 'a' 
// //                (excluding both starting and ending index, since we will be checking for middle
// //                character and form a length 3 palindrome with (key+middleCharacter+key))

// //                So if key is currently the letter 'a', the loop below will check for:
// //                'aaa',  'aba', 'aba', 'aba', 'aca', 'aca', 'ada'. 
// //                 Here there are 4 unique palindromes.

// //                We move to the next key, 'b', so we check:
// //                'bbb' (note that there is only 
// //                 one middle character between the first and last index of 'b').
// //                 Here there is one unique palindrome.

// //                Then we will check the remaining unique keys,
// //                 'c' and 'd' following the same process as above. 
// //                There is no middle character for these two keys so we do not have a unique length 3 palindrome. 

// //                Therefore, the solution to the input string 'aabbbccda' will be 4+1+0+0 = 5.

// //         */
// //         for (let i = l[key] + 1; i < r[key]; i++) {
// //             if (!marked.has(key + s[i] + key)) {
// //                 marked.add(key + s[i] + key);
// //                 res++;
// //             }
// //         }
// //     }
// //     return res;
// // }

// var countPalindromicSubsequence = function (s) {
//     let set = new Set()
//     let result = 0
//     let left = {}
//     let right = {}


//     for (let i = 0; i < s.length; ++i) {
//         let char = s[i]
//         if (left[char] == undefined) left[char] = i
//         right[char] = i
//         console.log('left:::', left)
//         console.log('right:::', right)
//     }

//     for (let key in left) {
//         console.log('key:::', key)
//         console.log('left:::', left[key])
//         console.log('right:::', right[key])

//         for (let i = left[key] + 1; i < right[key]; ++i) {
//             let str = key + s[i] + key
//             if (!set.has(str)) {
//                 set.add(str)
//                 result++
//             }
//         }
//     }

//     return result
// };
// countPalindromicSubsequence('aabca')

// function countPalindromicSubsequences(s) {
//     const mod = 1e9 + 7;
//     let count = 0;

//     for (let i = 0; i < s.length - 2; i++) {
//         for (let j = i + 1; j < s.length - 1; j++) {
//             for (let k = j + 1; k < s.length; k++) {
//                 if (s[i] === s[k]) {
//                     // If the characters at i and k are the same, then
//                     // we have found a valid palindromic subsequence
//                     count = (count + 1) % mod;
//                     break; // Move to the next i since any more k won't work for this i
//                 }
//             }
//         }
//     }

//     return count;
// // }

// const input = "aabcaa";
// console.log(countPalindromicSubsequences(input)); // Output: 6

// function countPalindromicSubsequences(s) {
//     let count = 0;
//     const n = s.length;
    
//     for (let i = 0; i < n - 2; i++) {
//         for (let j = i + 1; j < n - 1; j++) {
//             for (let k = j + 1; k < n; k++) {
//                 if (s[i] === s[k]) {
//                     count++;
//                 }
//             }
//         }
//     }
    
//     return count;
// }


var countPalindromicSubsequences = function(s) {
    
    const left={}
    const right={}
    const set=new Set()

    for(let i=0; i<s.length ; ++i){
        let char=s[i]

        if(left[char] == undefined) left[char]=i
        right[char]=i
    }

    for(let key in left){

        for(let i=left[key]+1 ; i<right[key]; ++i){
            let str= key+s[i]+key
            if(!set.has(str)){
                set.add(str)
            }

        }
    }

    return set.size
};



console.log(countPalindromicSubsequences("aabca"));