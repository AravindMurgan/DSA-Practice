// var nextGreaterElement = function (nums1, nums2) {
//     const result = []

//     for (let i = 0; i < nums1.length; ++i) {

//         for (let j = 0; j < nums2.length; ++j) {
//             if (nums1[i] == nums2[j]) {
//                 console.log('1', nums1[i])
//                 console.log('2', nums2[j + 1])
//                 let idx;
//                 if (nums2[j + 1]) {
//                     idx = j + 1
//                 } else {
//                     idx = j
//                 }

//                 if (nums1[i] >= nums2[idx]) {
//                     result.push(-1)
//                 } else {
//                     result.push(nums2[idx])
//                 }
//                 break;
//             }

//         }
//     }
//     console.log(result)
//     return result
// };

// var nextGreaterElement = function (nums1, nums2) {
//     const result = []

//     for (let i = 0; i < nums1.length; ++i) {
//         let num1 = nums1[i]

//         for (let j = 0; j < nums2.length; ++j) {
//             let num2 = nums2[j]

//             if (num1 == num2) {
//                 if (nums2[j + 1] && nums2[j + 1] > num2) {
//                     result.push(nums2[j + 1])
//                 } else {
//                     result.push(-1)
//                 }
//                 break;
//             }
//         }
//     }

//     return result
// };

var nextGreaterElement = function (nums1, nums2) {
    const map = new Map(); // map for next greater element
    const stack = [];
    for (let num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) { // Pop elements from stack and update map with next greater element
            map.set(stack.pop(), num);
        }
        stack.push(num); // Push current element onto stack
    }
    for (let i = 0; i < nums1.length; i++) { // Check if each element in nums1 has a next greater element in map
        nums1[i] = map.
        has(nums1[i]) ? map.get(nums1[i]) : -1; // Update element in nums1 with next greater element or -1
    }
    return nums1;
}

nums1 = [1, 3, 5, 2, 4], nums2 = [6, 5, 4, 3, 2, 1, 7]
nextGreaterElement(nums1, nums2)