var pivotIndex = function(nums) {
    let pivotIdx = Math.floor(nums.length/2);
    
    let leftSum=0;
    let rightSum=0;
    
    for(let i=0 ;i<pivotIdx ;++i){
        leftSum+=nums[i]
    }
    for(let j=pivotIdx ; j<nums.length ; ++j){
        rightSum+=nums[j]
    }
    
    return leftSum == rightSum ? pivotIdx : -1
};

pivotIndex([1,7,3,6,5,6])