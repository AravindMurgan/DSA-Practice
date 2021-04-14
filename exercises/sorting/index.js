// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	let length = arr.length;

	for (let i = 0; i < length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			const less = arr[i + 1];

			arr[i + 1] = arr[i];
			arr[i] = less;
		}
	}

	return arr;
}

console.log(bubbleSort([-40, +100, -124, -40, 0, +21, 7, -21, -100, 500]));


function selectionSort(arr) {

	for(let i = 0 ; i < arr.length ; i++){
		let indexofMin = i;

		for(let j = i+1; j<arr.length ; j++ ){
			if(arr[j] < arr[indexofMin] ){
				indexofMin = j;
			}
		}

		if(indexofMin !== i){
			let lesser = arr[indexofMin];
			arr[indexofMin] = arr[i];
			arr[i] = lesser;
		}

	}

	

}

selectionSort([9,4,6,0,1,3]);

// function mergeSort(arr) {}

// function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
