// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function (nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let rem = target - nums[i];
        let index = nums.indexOf(rem, i);
        if (index > 0) {
            result.push(i);
            result.push(index);
            break;
        }
    }
    return result;
};


console.log(twoSum([2, 7, 11, 15], 9));




// function twoSum(nums, target) {
//     let obj = {};
//     for (let num of nums) {
//         if (obj[num]) {
//             obj[num]++
//         } else {
//             obj[num] = 1
//         }
//     }
//     console.log(obj);

// }

// twoSum([2, 7, 11, 15], 9)

// function twoSum(nums, target) {
//     const obj = {};
//     const length = nums.length;

//     for (let i = 0; i < length; i++) {
//         if (obj[nums[i]] >= 0) {
//             return [obj[nums[i]], i];
//         }
//         obj[target - nums[i]] = i
//     }

//     return []
// }

// // console.log(twoSum([3, 3, 10, 12, 11], 13));
// // const myObj = { name: 'aravind', email: 'aravind@gmail.com' }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];


// const obj = new Map();

// arr.map((item, idx) => obj.set(idx, item));
// //obj[1]
// console.log(obj);


// let temp_arr = [...obj];
// // for (let [key, value] of obj.entries()) {
// //     // console.log(`${key}:${value}`)
// //     let temp_obj = {};
// //     temp_obj[key] = value
// //     temp_obj['name'] = 'Aravind Murugan'
// //     temp_arr.push(temp_obj)
// // }

// console.log(temp_arr);

// function twoSum(nums, target) {
//     const obj = new Map();
//     const length = nums.length;


//     for (let i = 0; i < length; i++) {
//         const diff = target - nums[i];

//         if (obj.has(diff)) {
//             console.log(nums[i]);
//             return [obj.get(nums[i]), i]
//         }
//         console.log(obj);
//         obj.set(nums[i], i);
//     }

//     return obj
// }




// console.log(twoSum([2, 7, 11, 15], 9));