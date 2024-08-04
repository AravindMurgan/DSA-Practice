var longestConsecutive = function(nums) {
    const sorted = nums.sort((a,b)=> a-b)

    let currCount=0
    let lastSmaller=Number.POSITIVE_INFINITY
    let longest=1
    for(let i=0; i<sorted.length ; ++i){

        if(sorted[i] - 1 == lastSmaller ){
            currCount+=1
            lastSmaller=sorted[i]
        }else if(sorted[i] !==  lastSmaller){
            currCount=1
            lastSmaller= sorted[i]
        }

        longest = Math.max(longest,currCount)
    }

    return longest
};


console.log(longestConsecutive([100,4,200,1,3,2]))