var longestSubArray =function(nums){
    let l=0
    let k=1
    let max=0

    for(let r=0; r<nums.length; ++r){
        if(nums[r] ===0) k-=1

        while(k<0){
            if(nums[r] === 0) k+=1
            l+=1
        }


        max = Math.max(max,r-l);
    }

    return max
}

longestSubArray([0,1,1,1,0,1,1,0,1])