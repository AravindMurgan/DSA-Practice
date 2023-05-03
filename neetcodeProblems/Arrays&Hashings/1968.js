var minSwaps = function (s) {
    let close = 0
    let max = 0

    for (let c of s) {
        if (c == ']') {
            close += 1
        } else {
            close -= 1
        }

        max = Math.max(max, close)
    }

    return Math.ceil(max / 2)
};

s = "[]"
minSwaps(s)