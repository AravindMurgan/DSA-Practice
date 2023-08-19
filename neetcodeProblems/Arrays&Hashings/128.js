var longestConsecutive = function (nums) {
    let sortedArr = nums.sort((a, b) => a - b)
    let output = 1
    let prev = sortedArr[0]
    for (let i = 1; i < sortedArr.length; ++i) {
        if (prev + 1 === sortedArr[i]) output += 1
        prev = sortedArr[i]
    }

    return output
};
nums = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]


longestConsecutive(nums)