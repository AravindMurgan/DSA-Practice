var productExceptSelf = function (nums) {
    let output = []
    let prefix = 1
    let postfix = 1

    //prefix calculation of all numbers
    for (let i = 0; i < nums.length; ++i) {
        output[i] = prefix
        prefix *= nums[i]
    }

    //postfix calculation of all numbers in output
    for (let j = nums.length; j >= 0; --j) {
        output[j] *= postfix
        postfix *= nums[j]
    }

    return output
};

nums = [1, 2, 3, 4]
productExceptSelf(nums)