var checkSubarraySum = function (nums, k) {
    const map = {}
    map[0] = -1
    let total = 0

    for (let i = 0; i < nums.length; ++i) {
        let num = nums[i];
        total += num
        let rem = total % k


        if (!map[rem]) {
            map[rem] = i
        } else if (i - map[rem] > 1) {
            return true
        }

    }

    return false
};

checkSubarraySum([1, 2, 3], 5)