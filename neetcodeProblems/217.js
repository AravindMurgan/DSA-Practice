var buildMap = function (nums) {
    let obj = {}
    for (let num of nums) {
        if (obj[num]) {
            obj[num] += 1
        } else {
            obj[num] = 1
        }
    }

    return obj
}
var containsDuplicate = function (nums) {
    const map = buildMap(nums)

    for (let key in map) {
        if (map[key] > 1) return false
    }

    return true
};
console.log(
    containsDuplicate([1, 2, 3, 1]))