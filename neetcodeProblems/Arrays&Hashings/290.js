var wordPattern = function (pattern, s) {
    let arr = s.split(' ')
    let map1 = new Map()
    let map2 = new Map()

    if (pattern.length !== arr.length) return false

    for (let i = 0; i < pattern.length; ++i) {
        let char = pattern[i]
        let word = arr[i]

        // if ((char in map1) && map1[char] !== word) return false
        // if ((word in map2) && map2[word] !== char) return false

        // map1[char] = word
        // map2[word] = char

        if ((map1.has(char)) && map1.has(char) !== word) return false
        if ((map2.has(word)) && map1.has(word) !== char) return false

        map1.add(char, word)
        map2.add(word, char)

    }
    return true
};

pattern = "abba"
s = "dog constructor constructor dog"

wordPattern(pattern, s)