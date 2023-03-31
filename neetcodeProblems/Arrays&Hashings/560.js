// var subarraySumHashMap = function (nums, k) {
//     let map = new Map();
//     let sum = 0;
//     let count = 0;
//     map.set(0, 1);
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         if (map.has(sum - k)) count += map.get(sum - k);
//         if (map.has(sum)) map.set(sum, map.get(sum) + 1);
//         else map.set(sum, 1);
//     }
//     return count;
// }

function subarraySum(nums, k) {  // function takes in array of numbers `nums` and a target value `k`
    let sum = 0;  // initialize variable `sum` to 0
    let count = 0;  // initialize variable `count` to 0
    const map = new Map();  // initialize a new Map object to keep track of the cumulative sums

    // set an initial value of the map to 0 with a count of 1, since we haven't seen any sums yet
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {  // iterate through the array
        sum += nums[i];  // add the current element to the cumulative sum

        // if the difference between the current sum and the target value k has been seen before in the map, add the number of times it has occurred to the count
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }

        // add the current sum to the map with a count of 1 if it hasn't been seen before, or increment its count if it has
        if (map.has(sum)) {
            map.set(sum, map.get(sum) + 1);
        } else {
            map.set(sum, 1);
        }
    }

    return count;  // return the total count of subarrays that add up to k
}



subarraySum([1, 1, 1], 2)