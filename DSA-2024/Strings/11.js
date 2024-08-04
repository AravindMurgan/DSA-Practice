/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let highestHeight=[0,height[0]]
    let output=0
    for(let i=1; i<height.length ; ++i){
        if(highestHeight[1] < height[i]){
            highestHeight=[i,height[i]]
        }
    }

    for(let i=highestHeight[0]; i<height.length ; ++i){
        if( height[i] <= highestHeight[1] ){
            output+=height[i]
        }
    }

    return output
};

maxArea([1,8,6,2,5,4,8,3,7])