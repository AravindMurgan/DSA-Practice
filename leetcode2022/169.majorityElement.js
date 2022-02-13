// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
    let majorityElement = { key: 0, value: 0 }
    let map = {};
    let count = 1;

    for (let num of nums) {
        if (map[num]) {
            map[num]++
        } else {
            map[num] = 1
        }
    }
    console.log(map);
    // for (let [key, value] of map) {
    //     if (majorityElement['value'] < value) {
    //         majorityElement['value'] = value;
    //         majorityElement['key'] = key
    //         // console.log(key);
    //     }
    // }
    for (let num in map) {
        if (map[num] > majorityElement['value']) {
            majorityElement['value'] = map[num]
            majorityElement['key'] = num
        }
    }

    return majorityElement['key']

};

majorityElement([3, 2, 3]);