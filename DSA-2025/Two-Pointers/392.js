function validate(wordS, wordT) {
    let length = 0
    let i = 0;

    for (let j = 0; j < wordT.length; ++j) {
        if (wordS[i] === wordT[j]) {
            length += 1
            i += 1
        }
    }

    return length === wordS.length
}
var isSubsequence = function (s, t) {
    const result = []


    for (let word of s) {

        const output = validate(word, t)
        result.push(output)
    }
    return result
};

console.log(isSubsequence(['abc','cdk','aeg','abc'],"ahbgdc"))