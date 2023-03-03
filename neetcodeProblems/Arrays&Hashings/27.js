var removeElement = function (nums, val) {
    let k = 0

    for (let i = 0; i < nums.length; ++i) {
        console.log(`nums is ${nums[i]} and the val is ${val}`)
        if (nums[i] !== val) {
            // nums[k] = nums[i]
            k++
        }
        console.log(`Array is ${nums}`)
        console.log(`K is ${k}`)
    }

    return k
};

nums = [3, 2, 2, 3], val = 3
removeElement(nums, val)