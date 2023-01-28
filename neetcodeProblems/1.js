function twoSum(nums, target) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        let index = nums.indexOf(diff, i + 1);

        if (index > 0) {
            result.push(i);
            result.push(index);
            break;
        }
    }

    return result
}

twoSum([3, 2, 4], 6)