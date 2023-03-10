var majorityElement = function (nums) {
    var obj = {};

    for (var i = 0; i < nums.length; i++) {
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        console.log(obj)
        console.log(`${obj[nums[i]]} > ${nums.length / 2}`)
        if (obj[nums[i]] > nums.length / 2) return nums[i];
    }

};

majorityElement([2, 1, 1, 2, 2, 2])