/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    const map = new Map()
    const bucket=[]
    const result=[]
    for(let num of nums){
        map.set(num,(map.get(num) || 0)+1)
    }

    for(let [num,freq] of map){
        bucket[freq]=(bucket[freq] || new Set()).add(num)
    }

    console.log('bucket:::',bucket)

    for(let i= bucket.length-1 ;i>=0 ; --i){
        if(bucket[i]) result.push(...bucket[i])

        if(result.length === k) break;
    }

    return result
};

topKFrequent([4,1,-1,2,-1,2,3,10,10],2)