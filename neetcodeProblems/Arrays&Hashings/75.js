
var sortColors = function(nums) {
    let low=0
    let mid=0
    let high=nums.length-1

    function swap(a,b){
         [nums[a],nums[b]]=[nums[b],nums[a]]
        // [nums[b], nums[a]] = [nums[a], nums[b]]
    }

    while(mid < high){

        if(nums[mid] ==0){
            swap(mid,low)
            low++
            mid++
        }
        else if(nums[mid] ==1){
            mid++
        }
        else if(nums[mid] ==2){
            swap(mid,high)
           high--
        }
    }

    return nums
};

sortColors([2,0,1]);