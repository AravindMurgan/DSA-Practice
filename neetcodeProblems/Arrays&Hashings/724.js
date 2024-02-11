/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const pivotIdx = Math.floor(nums.length/2);
    let leftSum=0;
    let rightSum=0;

    let i=0;
    let j=nums.length-1;
    
    while(i< pivotIdx && pivotIdx < j){
        leftSum+=nums[i];
        rightSum+=nums[j];

        console.log(i);
        console.log(j);

        i++;
        j--;
    }
    console.log(leftSum);
    console.log(rightSum);
    if(leftSum === rightSum ){
        return pivotIdx;
    }else{
        return -1;
    }
    
};

pivotIndex([1, 7, 3, 6, 5, 6]); //3