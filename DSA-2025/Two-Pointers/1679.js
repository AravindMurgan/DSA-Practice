// var maxOperations = function(nums, k) {
//     let result=0;
//     const set = new Set()
//     for(let l=0; l<nums.length ; ++l){

//         for(let r=l+1; r<nums.length ; ++r){
//             if(set.has(l) || set.has(r)) continue;
//             if(nums[l]+ nums[r] === k){
//                 set.add(l,r)
//                 result+=1
//             }
//             // console.log(result)
//             // console.log(set)
//         }
//     }

//     return result
// };

// console.log(maxOperations([3,1,3,4,3]))

var maxOperations = function(nums, k) {
    const map = new Map()
    let res=0

    for(let num of nums){
        const complement = k-num

        if(map.get(complement) && map.get(complement) > 0 ){
            res+=1
            map.set(complement,map.get(complement)-1)
        }else{
            map.set(num, (map.get(num) || 0)+1)
        }
    }

    return res
};

maxOperations([3,1,3,4,3],6)

