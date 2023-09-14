/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    if (nums.length < 2) return nums
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)


    function merge(left, right) {
        let l = 0,
            r = 0,
            lLength = left.length,
            rLength = right.length,
            result = []

        while (l < lLength && r < rLength) {

            if (left[l] < right[r]) {
                result.push(left[l])
                l += 1
            } else {
                result.push(right[r])
                r += 1
            }
        }

        return result.concat(left.slice(l), right.slice(r))

    }

    return merge(sortArray(left), sortArray(right))
};
nums = [5, 2, 3, 1]
sortArray(nums)