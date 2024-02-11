// var removeElement = function (nums, val) {
//     let k = 0

//     for (let i = 0; i < nums.length; ++i) {
//         console.log(`nums is ${nums[i]} and the val is ${val}`)
//         if (nums[i] !== val) {
//             nums[k] = nums[i]
//             k++
//         }
//         console.log(`Array is ${nums}`)
//         console.log(`K is ${k}`)
//     }

//     return k
// };

// nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
// removeElement(nums, val)

var removeElement = function(nums, val) {
        
    let i=0,j=0;
    while(i < nums.length && j < nums.length){
        if(nums[i] == val) {
            while(nums[j] ===val){
                j+=1
            }
            let temp=nums[i]
            nums[i]=nums[j]
            nums[j]=temp
            i+=1
        }
    }
    console.log(nums)
    return nums
};


nums = [3,2,2,3], val = 3
removeElement(nums, val);

