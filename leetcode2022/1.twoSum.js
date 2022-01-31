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

function twoSum(nums, target) {
    const obj = new Map();
    const length = nums.length;


    for (let i = 0; i < length; i++) {
        const diff = target - nums[i];

        if (obj.has(diff)) {
            return
        }

        obj.set(nums[i], i);
    }
}