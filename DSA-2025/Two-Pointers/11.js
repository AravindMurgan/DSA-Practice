// var maxArea = function(height) {
//     let r =height.length-1
//     let res=0

//     for(let l=0; l<height.length ; ++l ){
//         let area = (r-l) +1* Math.min(height[l],height[r])
//         res= Math.max(res,area)
//         r-=1
//     }

//     return res
// };

var maxArea = function(height) {
    let l =1
    let r=height.length
    let res=0

    while(l<r){
        let area = (r-l)* Math.min(height[l],height[r])
        res= Math.max(res,area)

        if(height[l] < height[r]){
            l+=1
        }else{
            r-=1
        }
    }

    return res
};


maxArea([1,8,6,2,5,4,8,3,7])