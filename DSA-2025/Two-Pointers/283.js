// var moveZeros = function(nums) {
//     let left=0

//     for(let right=0; right<nums.length ; ++right){
        
//         if(nums[right] !== 0){
//             [nums[left],nums[right]]=[nums[right],nums[left]]
//             left+=1
//         }
//     }

//     return nums
// };

// nums = [0,1,0,3,12]
// console.log(moveZeros(nums))

var moveZeroes = function(nums) {
    let l=0
    let r=0

    while(r<nums.length){
        console.log(nums[r])
        if(nums[r] !==0){
            [nums[l],nums[r]]=[nums[r],nums[l]]
            l+=1
            r+=1
        }

        r+=1
    }

    return nums
};

moveZeroes([0,1,0,3,12])