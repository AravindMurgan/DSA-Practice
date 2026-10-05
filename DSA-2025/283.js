var moveZeroes = function (nums) {

    let i = 0
    let j = 0

    while (j < nums.length) {
        if (j != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i += 1
        }
        j += 1
    }

    return nums
};

moveZeroes([0, 1, 0, 3, 12])