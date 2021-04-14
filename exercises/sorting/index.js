// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	let length = arr.length;

	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < (arr.length - i - 1); j++) {
		  if (arr[j] > arr[j+1]) {
			const lesser = arr[j+1];
			arr[j+1] = arr[j];
			arr[j] = lesser;
		  }
		}
	  }

	return arr;
}

bubbleSort([9,4,6,0,1,3])


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

function merge(left, right) {


	const results = [];

	while(left && right){
		if(left[0] < right[0]){
			const leftElement = left.shift();
			results.push(leftElement);
		}else{
			const rightElement = right.shift();
			results.push(rightElement)
		}
	}

	results.push(left,right);

}




module.exports = { bubbleSort, selectionSort, mergeSort, merge };
