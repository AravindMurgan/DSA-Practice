// find the longest subbarray with sum equals k

function subArraySum(arr, k) {
    let len = 0

    for (let i = 0; i < arr.length; ++i) {
        let sum = 0
        for (let j = i; j < arr.length; ++j) {
            sum += arr[j]

            if (sum == k) {
                len = Math.max(len, j - i + i)
                console.log('idx::', j - i + 1)
            }
        }
    }

    console.log('len:::', len)
    return len
}

subArraySum([1, 2, 3, 1, 1, 1, 1, 4, 2, 3], 3)