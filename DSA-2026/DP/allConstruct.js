const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];
    const result = []
    for (let word of wordBank) {
        const suffix = target.indexOf(word)
        if (suffix === 0) {
            const suffixStr = allConstruct(target.slice(word.length), wordBank)
            const targetWays = suffixStr.map(way => [word, ...way])
            result.push(...targetWays)
        }
    }

    return result;
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
// [ ["purp","le"], ["p","ur","p","le"] ]

// console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
// // [ ["ab","cd","ef"], ["ab","c","def"], ["abc","def"], ["abcd","ef"] ]

// console.log(allConstruct("", ["cat", "dog"]))
// // [ [] ]  (one way: use nothing)

// console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
// // []  (no way to construct)

// console.log(allConstruct("aaa", ["a", "aa"]))
// // [ ["a","a","a"], ["a","aa"], ["aa","a"] ]