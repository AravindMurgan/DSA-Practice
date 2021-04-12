// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(nums) {

    // let length = arr.length;

    // for(let i =0 ; i < length; i++){

    //     for(let j=0; j <= length - i ; j++){
    //         if(j > j+1){
    //             j = j+1;
    //             j+1 = j;
    //         }
    //     }
    //     return 

    // }

    let i =0;
    while( i < nums.length){
        const j = nums[i] -1;

        if(nums[i] !== nums[j]){
            [nums[i],nums[j]]= [nums[j],nums[i]]
        }else{
            i +=1;
        }

    }
    return nums


}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
