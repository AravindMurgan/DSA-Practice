function checkSubarraySum(nums, k) {
    const n = nums.length;
    const remainderMap = new Map();
    remainderMap.set(0, -1); // Initialize with a remainder of 0 at index -1
    let sum = 0;

    for (let i = 0; i < n; i++) {

        sum += nums[i];
        console.log(`sum :::: ${sum}`)

        if (k !== 0) {
            sum %= k; // Calculate the remainder if k is not 0
        }

        console.log(`sum % k ${k} :::: ${sum}`)



        if (remainderMap.has(sum)) {
            if (i - remainderMap.get(sum) > 1) {
                return true;
            }
        } else {
            remainderMap.set(sum, i);
        }

        console.log('map:::', remainderMap)
    }

    return false;
}
nums = [0], k = 1

console.log(checkSubarraySum(nums, k))

