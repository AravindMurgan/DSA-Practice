var leftRigthDifference = function (nums) {
    let result = [];

    let left = 0;
    let right = 0;

    for (var i = 0; i < nums.length; i++) {
        right += nums[i];
    }

    for (var i = 0; i < nums.length; i++) {
        right -= nums[i];
        result.push(Math.abs(left - right));
        left += nums[i];
    }
    return result;
};

leftRigthDifference([10, 4, 8, 3])