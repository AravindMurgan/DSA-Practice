// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {

	let length = arr.length;

	// for (let i = 0; i < length; i++) {
	// 	for (let j = 0; j < length - i - 1; j++) {
	// 		if (arr[j] > arr[j + 1]) {
	// 			const less = arr[j + 1];

	// 			arr[j + 1] = arr[j];
	// 			arr[j] = less;
	// 		}
	// 	}
	// }

    for(let i =0; i< length - 1; i++){
        if(arr[i] > arr[i+1] ){
            const less = arr[i+1];

            arr[i+1] = arr[i];
            arr[i] = less
        }
    }


	return arr;
}

bubbleSort([-60,95,0,20,10]);


// let i =0;
// while( i < nums.length){
//     const j = nums[i] -1;

//     if(nums[i] !== nums[j]){
//         [nums[i],nums[j]]= [nums[j],nums[i]]
//     }else{
//         i +=1;
//     }

// }
// return nums

function selectionSort(arr) {}

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
