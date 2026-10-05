const countConstruct = (target, wordBank) => {
    if (target === '') return 1

    let count = 0;

    for (let word of wordBank) {

        if (target.indexOf(word) === 0) {
            let noOfPaths = countConstruct(target.slice(word.length), wordBank);
            count += noOfPaths;
        }
    }

    return count;

}

// console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])) // 4
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))             // 2
// console.log(countConstruct("", ["cat", "dog"]))                                        // 1
// console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])) // 0
// console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee"])) // 0
