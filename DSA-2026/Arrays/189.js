/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {

    const temp = []
    const numsLength = nums.length

    for (let i = numsLength - k; i < numsLength; ++i) {
        temp.push(nums[i])
    }

    for (let i = k; i < numsLength; ++i) {
        nums[i] = nums[i - k]
    }

    for (let i = 0; i < k; ++i) {
        nums[i] = temp[i]
    }

    console.log(nums)
};

rotate([1, 2, 3, 4, 5, 6, 7], 3)


function deep(params) {
    
}