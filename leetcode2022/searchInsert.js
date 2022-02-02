// Example 1:
// Input: nums = [1,3,5,6], target = 5

// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4

function searchInsert(nums, target) {
    const idx = nums.indexOf(target);
    if (idx !== -1) {
        return idx
    } else {
        nums.push(target);
        const res = nums.sort((a, b) => a - b);
        console.log(res);
        return res.indexOf(target)
    }

}
console.time()
console.log(searchInsert([1, 2, 3, 10, 15], 7));
console.timeEnd()











// var searchInsert = function (nums, target) {
//     return binarySearch(nums, target, 0, nums.length - 1)
// };

// const binarySearch = (arr, target, start, end) => {
//     if (start > end) return start
//     let mid = Math.floor((start + end) / 2)
//     if (arr[mid] === target) return mid
//     if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1)
//     if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end)
// }

// console.log(searchInsert([1, 3, 5, 8], 4));

// const arr = [44, 88, 111, 5954, 1];
// arr.sort(function (a, b) {
//     if (a > b) return 1;
//     else if (a < b) return -1;
//     else return 0;
// })

// console.log('arr:::', arr);