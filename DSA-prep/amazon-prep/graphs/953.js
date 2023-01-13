var isAlienSorted = function (W, O) {
    let alpha = new Map([['', -1]])

    for (let i = 0; i < O.length; ++i) {
        alpha.set(O.charAt(i), i)
    }
    for (let i = 1; i < W.length; ++i) {
        let a = W[i - 1], b = W[i];

        for (let j = 0; j < a.length; ++j) {
            let aChar = a.charAt(j), bChar = b.charAt(j),
                aIx = alpha.get(aChar), bIx = alpha.get(bChar)

            if (aIx < bIx) break
            if (aIx > bIx) return false
        }
    }

    return true
}
console.log(
    // isAlienSorted(["hello", "leetcode"], "hlabcdefgijkmnopqrstuvwxyz")
    isAlienSorted(["word", "world", "row"], "worldabcefghijkmnpqstuvxyz")
)


