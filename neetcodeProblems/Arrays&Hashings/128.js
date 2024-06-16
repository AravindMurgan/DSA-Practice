var longestConsecutive = function(nums) {
    if(nums.length ===0) return 0
    const numsSet=new Set([...nums]);
    let longest=Number.NEGATIVE_INFINITY

    
    for(let num of numsSet){
        if(!numsSet.has(num-1)){
            let count =1
            let x=num

            while(numsSet.has(x+1)){
                count+=1
                x+=1
            }
            longest=Math.max(longest,count)

        }
  
    }

    return longest
};

nums=[0,0,-1]


longestConsecutive(nums)