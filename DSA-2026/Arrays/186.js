/**
 * @param {number[]} nums
 * @param {number} k
 * @return {voik} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;
    k = k % len;

    const temp = [];
    for (let i = 0; i < k; i++) {
        temp[i] = nums[len - k + i];
    }

    for (let i = len - k - 1; i >= 0; i--) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; i++) {
        nums[i] = temp[i];
    }
};
nums = [1, 2, 3, 4, 5, 6, 7], k = 3
rotate(nums, k)