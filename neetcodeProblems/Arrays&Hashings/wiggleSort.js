const sortArray = (nums) => {
    if (nums.length < 2) return nums
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid);

    const merge = (left, right) => {
        let l = 0, r = 0;
        let leftLength = left.length
        let rightLength = right.length
        const result = []

        while (l < leftLength && r < rightLength) {

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
}

const wiggleSort = (nums) => {

    for (let i = 0; i < nums.length; ++i) {
        if (i % 2 === 1 && nums[i] < nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
        } else if (i % 2 === 0 && nums[i] > nums[i - 1]) {
            [nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
        }
    }

    return nums

}

console.log('wS::::', wiggleSort([3, 5, 2, 1, 6, 4]))




// Input: [3, 5, 2, 1, 6, 4]
// Output: [1, 6, 2, 5, 3, 4]
// Explanation: This question may have multiple answers, and [2, 6, 1, 5, 3, 4] is also ok.


const inputJSON={
    state:[
        {
            values:'BE',
            selected:'yes'
        },{
            values:'HE',
            selected:'no'
        }
    ],

    serviceType:{
            value:'FDTV',
            selected:'no'
    },

    selectTag1:{
        value:'test1',
        selected:'yes'
    },
    selectTag2:{
        value:'test2',
        selected:'yes'
    },
    selectTag3:{
        value:'test3',
        selected:'yes'
    },
    selectTag4:{
        value:'test4',
        selected:'yes'
    }
}