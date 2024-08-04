/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result=[]
    nums.sort();
    console.log(nums);

    for(let i=0; i<nums.length ;++i){
        let currVal=nums[i]
        if(currVal === nums[i-1]){
            continue;
        }

        let l=i+1
        let r=nums.length-1

        while(l<r){
            console.log('l',nums[l])
            console.log('r',nums[r])

            let threeSum= currVal+nums[l]+nums[r]

            // if(threeSum===0){
            //     result.push([currVal+nums[l]+nums[r]])
            // }else if(threeSum>0){
            //     r-=1
            // }else{
            //     l+=1
            // }
            // l+=1
            // while(nums[l] === nums[l-1] && l<r){
            //     l+=1
            // }
            if(threeSum>0){
                r-=1
            }else if (threeSum<0){
                l+=1
            }else{
                 result.push([currVal+nums[l]+nums[r]])
                  l+=1
                while(nums[l] === nums[l-1] && l<r){
                    l+=1
                }
            }
        }
    }

    return result
};

threeSum([-3,3,4,-3,1,2])