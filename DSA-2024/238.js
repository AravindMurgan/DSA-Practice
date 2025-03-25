// var moveZeroes = function(nums) {
    
//     for(let i=0; i<nums.length-1 ; ++i){
//         let j=i+1;

//         if(nums[i] ===0){
//         while(nums[j] === 0 && j<nums.length){
//             j+=1
//         }
//         }

//         let temp =nums[i]
//         nums[i]=nums[j]
//         nums[j]=temp
//     }

//     return nums
// };
var moveZeroes = function(nums) {
    
    let count=0;
    for(let num of nums){
        if(num ===0) count+=1
    }
    
    for(let i=0; i<nums.length-count ; ++i){
        let j=i+1;

        if(nums[i] ===0 && nums[j]){
        while(nums[j] === 0 && j<nums.length){
            j+=1
        }
        let temp =nums[i]
        nums[i]=nums[j]
        nums[j]=temp
        }

    }

    return nums
};
nums = [0,1,0,3,12]
console.log(moveZeroes(nums))