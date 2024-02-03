// var wordPattern = function (pattern, s) {
//     let arr = s.split(' ')
//     let map1 = new Map()
//     let map2 = new Map()

//     if (pattern.length !== arr.length) return false

//     for (let i = 0; i < pattern.length; ++i) {
//         let char = pattern[i]
//         let word = arr[i]

//         // if ((char in map1) && map1[char] !== word) return false
//         // if ((word in map2) && map2[word] !== char) return false

//         // map1[char] = word
//         // map2[word] = char

//         if ((map1.has(char)) && map1.has(char) !== word) return false
//         if ((map2.has(word)) && map1.has(word) !== char) return false

//         map1.add(char, word)
//         map2.add(word, char)

//     }
//     return true
// };

// var wordPattern = function (pattern, s) {
//     const map1 = []
//     const map2 = []
//     let words = s.split(' ')
//     console.log(words)
//     if (pattern.length !== words.length) return false

//     for (let i = 0; i < pattern.length; ++i) {
//         console.log('map1:::', map1)
//         console.log('map2:::', map2)

//         console.log('map1 value:::', map1[pattern.charAt(i)]);
//         console.log('map1 value:::', map2[words[i]]);

//         if ((Number(map1[pattern.charAt(i)]) == Number(map2[words[i]]))
//             && map1[pattern.charAt(i)] !== map2[words[i]]) return false

//         map1[pattern.charAt(i)] = i
//         map2[words[i]] = i
//     }

//     return true
// };

var wordPattern = function (pattern, s) {
    let arr = s.split(' ')
    let map1 = new Map()
    // let map2 = new Map()

    if (pattern.length !== arr.length) return false
    if (new Set(arr).size !== new Set(pattern).size) return false

    for (let i = 0; i < pattern.length; ++i) {
        let char = pattern[i]
        let word = arr[i]

        if ((map1.has(char)) && map1.get(char) !== word) return false
        // if((map2.has(word)) && map1.has(word) !== char) return false

        map1.set(char, word)
    }
    return true
};

pattern = "abba"
s = "dog cat cat dog"

wordPattern(pattern, s)