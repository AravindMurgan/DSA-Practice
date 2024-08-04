/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output=[]
    let prefix=1
    let postfix=1

    for(let i=0; i< nums.length ; ++i){
        output[i]=prefix;
        prefix*=nums[i]
    }

     for(let j=nums.length-1; j>=0; --j){
        output[j]*=postfix;
        postfix*=nums[j]
    }

    return output
};

productExceptSelf([1,2,3,4])