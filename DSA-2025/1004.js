var longestOnes = function (nums, k) {
    let i = 0
    let j = 0
    let zeros = 0
    let max = 0

    while (j < nums.length) {
        if (nums[j] === 0) zeros += 1

        if (zeros > k) {
            if (nums[i] === 0) {
                i += 1
                zeros -= 1
            }
        }

        if (zeros <= k) {
            let len = (j - i) + 1
            max = Math.max(max, len)

        }
        j += 1

    }

    return max
};

nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
longestOnes(nums, k)