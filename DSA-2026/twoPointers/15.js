// function threeSum(nums) {
//     nums.sort((a, b) => a - b);
//     const result = []
//     for (let i = 0; i < nums.length - 2; ++i) {

//         let L = i + 1
//         let R = nums.length - 1

//         while (L < R) {

//             const sum = nums[i] + nums[L] + nums[R]

//             if (sum === 0) {
//                 result.push([nums[i], nums[L], nums[R]])

//                 while (L < R && nums[L] === nums[L + 1]) L += 1
//                 while (L < R && nums[R] === nums[R - 1]) R -= 1

//                 L += 1
//                 R -= 1

//             } else if (sum > 0) {
//                 R -= 1
//             } else {
//                 L += 1
//             }
//         }
//     }

//     return result;
// };

function threeSum(nums) {
    nums.sort((a, b) => a - b)
    const result = []
    console.log(nums)
    for (let i = 0; i < nums.length; ++i) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        console.log(i)
        let L = i + 1
        let R = nums.length - 1

        while (L < R) {
            const sum = nums[i] + nums[L] + nums[R]

            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]])

                // while(L <R && nums[L] === nums[L+1]) L+=1
                // while(L <R && nums[R] === nums[R-1]) R-=1

                // L+=1
                // R-=1
                break;


            } else if (sum > 0) {
                R -= 1
            } else {
                L += 1
            }
        }
    }

    return result
};

// threeSum([0, 0, 0, 0]);
threeSum([-1, 0, 1, 2, -1, -4]);
