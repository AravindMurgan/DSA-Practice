const buildCharMap = (nums) => {
    const obj = {}

    for (let num of nums) {
        if (obj[num]) {
            obj[num]++
        } else {
            obj[num] = 1
        }
    }

    return obj
}

var findDifference = function (nums1, nums2) {
    const res = [[], []];

    let arr1 = new Set(nums1);
    let arr2 = new Set(nums2);
    for (let num of arr1) {
        if (!arr2.has(num)) res[0].push(num);
    }

    for (let num of arr2) {
        if (!arr2.has(num)) res[1].push(num);

    }

    // res.push([...arr1],[...arr2]);

    return res
}
nums1 = [-68, -80, -19, -94, 82, 21, -43], nums2 = [-63]
console.log(findDifference(nums1, nums2))