var nextGreaterElement = function (nums1, nums2) {
    const result = []

    for (let i = 0; i < nums1.length; ++i) {

        for (let j = 0; j < nums2.length; ++j) {
            if (nums1[i] == nums2[j]) {
                console.log('1', nums1[i])
                console.log('2', nums2[j + 1])
                let idx;
                if (nums2[j + 1]) {
                    idx = j + 1
                } else {
                    idx = j
                }

                if (nums1[i] >= nums2[idx]) {
                    result.push(-1)
                } else {
                    result.push(nums2[idx])
                }
                break;
            }

        }
    }
    console.log(result)
    return result
};
nums1 = [1, 3, 5, 2, 4], nums2 = [6, 5, 4, 3, 2, 1, 7]
nextGreaterElement(nums1, nums2)