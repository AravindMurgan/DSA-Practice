// // 349.
// // Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.



// // Example 1:

// // Input: nums1 = [1,2,2,1], nums2 = [2,2]
// // Output: [2]
// // Example 2:

// // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// // Output: [9,4]
// // Explanation: [4,9] is also accepted.

// // Constraints:

// // 1 <= nums1.length, nums2.length <= 1000
// // 0 <= nums1[i], nums2[i] <= 1000

//best approach for this problem is using set

var intersection = function (nums1, nums2) {
    let firstSet = new Set(nums1);
    let secondSet = new Set(nums2);

    const result = [];

    for (let [item] of firstSet.entries()) {
        if (secondSet.has(item)) {
            result.push(item)
            secondSet.delete(item)
        }
    }
    return result
}

intersection([1, 2, 2, 3, 3, 4], [3, 4])



// var intersection = function (nums1, nums2) {
//     let a = nums1.length;
//     let b = nums2.length;
//     let len = a > b ? a : b;
//     let arr = [];
//     let x = a > b ? nums1 : nums2; //greater arr
//     let arr2; // smaller arr

//     if (a < b) {
//         arr2 = nums1
//     } else {
//         arr2 = nums2;
//     }
//     for (let i = 0; i < len; i++) {
//         if (arr2.includes(x[i])) {
//             if (arr.includes(x[i])) {
//                 continue;
//             } else {
//                 arr.push(x[i]);
//             }
//         }
//     }

//     console.log(arr);

// };

// intersection(
//     [4, 7, 9, 7, 6, 7], [5, 0, 0, 6, 1, 6, 2, 2, 4])