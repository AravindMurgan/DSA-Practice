// var findDisappearedNumbers = function (nums) {
//     let numsArr = [...new Set(nums)];
//     numsArr = numsArr.sort();
//     const result = []

//     for (let i = 1; i < numsArr.length; ++i) {
//         let diff = numsArr[i] - numsArr[i - 1]
//         if (diff > 1) {
//             for (let j = 1; j <= diff - 1; ++j) {
//                 let val = numsArr[i] + 1
//                 result.push(val)
//             }
//         }
//     }

//     return result
// };

var findDisappearedNumbers = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        let idx = num - 1;
        nums[idx] = Math.abs(nums[idx]) * -1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) res.push(i + 1);
    }
    return res;
    // Time Complexity: O(N)
    // Space Complexity: O(1)
};
/*
We will scan through the input array and for every number we will use its value as an index and
negate the number at the index. For example, if we encounter 4, we will negate the number at index 3.
The reason the index is not four is because the array is zero-indexed.
*/

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);