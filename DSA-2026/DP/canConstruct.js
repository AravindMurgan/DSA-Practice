const canConstruct = (str, words, memo = {}) => {
    if (str in memo) return memo[str]
    if (str === '') return true;


    for (let word of words) {
        const isSuffixAvailable = str.indexOf(word);
        if (isSuffixAvailable === 0) {
            const suffixStr = str.slice(word.length);
            if (canConstruct(suffixStr, words, memo)) {
                memo[str] = true;
                return true;
            }
        }
    }

    memo[str] = false;
    return false;
}

// console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))       // true  (abc + def)
// console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // false
// console.log(canConstruct("", ["cat", "dog"]))                                  // true  (empty string)
// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee"]))   // false (no way to make 'f')
// console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])) // true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"])) // false
